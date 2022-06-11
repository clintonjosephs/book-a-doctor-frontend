import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { deleteDoctorThunk } from '../../redux/bookDoctor/doctorThunks';
import styles from './list.module.css';

function ListDoctors() {
  const doctors = useSelector((state) => state.bookDoctorReducer.doctors);
  const dispatch = useDispatch();
  const deleteDoc = (id) => {
    dispatch(deleteDoctorThunk(id));
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
