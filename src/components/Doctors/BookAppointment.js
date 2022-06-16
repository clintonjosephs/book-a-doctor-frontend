import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addAppointmentDispatcher, fetchAllDoctors } from '../../redux/bookDoctor/doctorThunks';
import styles from './BookAppointment.module.css';

function BookAppointment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentDoctor = useSelector((state) => state.bookDoctorReducer.doctor[0] || null);
  const [dateAppointment, setDateAppointment] = useState('');
  const [selectedDoctorcity, setSelectedDoctorcity] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  let doctors = useSelector((state) => state.bookDoctorReducer.doctors || []);

  useEffect(() => {
    if (currentDoctor) {
      setSelectedDoctorcity(currentDoctor.city);
      setSelectedDoctor(currentDoctor.id);
    }
    dispatch(fetchAllDoctors());
  }, [dispatch]);

  const handleChange = (e) => {
    setSelectedDoctorcity(doctors[e.target.value].city);
    setSelectedDoctor(doctors[e.target.value].id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAppointmentDispatcher(selectedDoctor, dateAppointment));
    navigate('/myreservations');
  };

  if (currentDoctor) {
    doctors = [currentDoctor];
  }

  return (
    <section className={styles.book_appointment_container}>
      <div className={styles.book_appointment}>
        <h1 className={styles.h1}>Book an Appointment </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <select
            onChange={(e) => handleChange(e)}
            className={styles.inputs}
            aria-label="doctor_name"
          >
            {doctors.map((doctor, index) => (
              <option key={doctor.id} value={index}>
                {doctor.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={selectedDoctorcity}
            disabled
            className={styles.disabled}
            aria-label="city"
          />

          <input
            type="date"
            onChange={(event) => {
              setDateAppointment(event.target.value);
            }}
            required
            className={styles.inputs}
            id="date_appointment"
          />
          <button type="submit">Reserve</button>
        </form>
      </div>
    </section>
  );
}

export default BookAppointment;
