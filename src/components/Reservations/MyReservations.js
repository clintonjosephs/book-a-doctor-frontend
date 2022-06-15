import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as FaIcons from 'react-icons/fa';
import { convertDateWithName } from '../../helpers/format/format';
import style from './MyReservation.module.css';

import getReservations, { deleteReservations } from '../../redux/reservation/reservationThunks';

function MyReservations() {
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservationReducers.reservationReducer);
  const [reservationState, setReservationState] = useState(reservation);
  useEffect(() => {
    dispatch(getReservations());
    setReservationState(reservation);
  }, [reservationState.length]);

  return (
    <section className={style.reservation}>

      <div className={style.table} id="table">
        {reservation && reservation.includes('No appointments found') ? (
          <div>
            <span>There is no Reservations</span>
          </div>
        ) : (
          reservation.map((element) => (
            <div key={element.id} className={style.appointment}>
              <div className={style.date_of_appointment}>
                <FaIcons.FaCalendarAlt className="social-icons-date_of_appointment" />
                {convertDateWithName(element.date_of_appointment)}
              </div>

              <div className={style.doctor_container_info}>
                <img src={element.imageUrl} alt="doctors" className={style.img} />
                <span>{element.doctor.name}</span>
                <span>{element.doctor.specialization}</span>
              </div>
              <div>
                <button
                  type="button"
                  className={style.button}
                  onClick={() => {
                    dispatch(deleteReservations(element.id));
                    dispatch(getReservations());
                    setReservationState(reservation);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default MyReservations;
