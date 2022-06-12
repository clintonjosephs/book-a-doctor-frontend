import React, { useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { deleteDoctorThunk, fetchAllDoctors } from '../../redux/bookDoctor/doctorThunks';
import styles from './list.module.css';

function ListDoctors() {
  const doctors = useSelector((state) => state.bookDoctorReducer.doctors);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!doctors.data) {
      dispatch(fetchAllDoctors());
    }
  }, []);
  const deleteDoc = (id) => {
    dispatch(deleteDoctorThunk(id));
  };

  return (
    <>
      <section className={styles.listContainer}>
        <div className={styles.listDoctor}>
          {doctors.data ? doctors.data.map((doctor) => (
            <div key={doctor.id} className={styles.list}>
              <img src={doctor.imageUrl} alt="docs" className={styles.docImage} />
              <div className={styles.delete}>
                <p className={styles.docName}>{doctor.name}</p>
                <FaIcons.FaTrash
                  role="button"
                  className={styles.dltBtn}
                  onClick={() => { deleteDoc(doctor.id); }}
                />
              </div>
            </div>
          )): <p className={styles.notification}>No Doctors</p>}
        </div>
      </section>
    </>
  );
}

export default ListDoctors;
