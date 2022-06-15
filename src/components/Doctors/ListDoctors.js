import React, { useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { deleteDoctorThunk, fetchAllDoctors } from '../../redux/bookDoctor/doctorThunks';
import styles from './list.module.css';

function ListDoctors() {
  const doctors = useSelector((state) => state.bookDoctorReducer.doctors);
  const user = useSelector((state) => state.userReducer.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!doctors.data) {
      dispatch(fetchAllDoctors());
    }

    if (user.role !== 'admin') {
      navigate('/');
    }
  }, []);
  const deleteDoc = (id) => {
    dispatch(deleteDoctorThunk(id));
    toast.success('Doctor deleted successfully');
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
          )) : <p>No Doctors 😔</p>}
        </div>
      </section>
    </>
  );
}

export default ListDoctors;
