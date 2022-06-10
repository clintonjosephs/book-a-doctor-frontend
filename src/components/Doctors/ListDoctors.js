import React from 'react';
import axios from 'axios';
import * as FaIcons from 'react-icons/fa';
import { useSelector } from 'react-redux';
import StorageManager from '../../helpers/format/StorageManager';
import styles from './list.module.css';

function ListDoctors() {
  const doctors = useSelector((state) => state.bookDoctorReducer.doctors);

  const headers = {
    Authorization: `Bearer ${StorageManager.getToken().token}`,
  };
  const deleteDoc = (id) => {
    axios.delete(`http://localhost:3001/v1/doctors/${id}`, { headers })
      .then((response) => {
        console.log(response);
        if (response.data.message === 'Doctor deleted successfully') {
          console.log(doctors.data);
        }
      });
  };

  return (
    <>
      <section className={styles.listContainer}>
        <div className={styles.listDoctor}>
          {doctors.data.map((doctor) => (
            <div key={doctor.id} className={styles.list}>
              <img src={doctor.imageUrl} alt="docs" className={styles.docImage} />
              <div className={styles.delete}>
                <p className={styles.docName}>{doctor.name}</p>
                <FaIcons.FaTrash
                  className={styles.dltBtn}
                  onClick={() => { deleteDoc(doctor.id); }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ListDoctors;
