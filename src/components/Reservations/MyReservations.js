import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './MyReservation.module.css';
import { convertDateWithName } from '../../helpers/format/format';

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
      <table className={style.table} id="table">
        <thead>
          <tr>
            <th>Doctor Picture</th>
            <th>Doctor Name</th>
            <th>Doctor Special</th>
            <th>Appointment Date</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {reservation && reservation[0] === 'No appointments found'
            ? <tr><td>There is no Reservations</td></tr>
            : reservation.map((element) => (
              <tr key={element.id}>
                <td><img src={element.imageUrl} alt="doctors" className={style.img} /></td>
                <td>{element.doctor.name}</td>
                <td>{element.doctor.specialization}</td>
                <td>{convertDateWithName(element.date_of_appointment)}</td>
                <td>
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
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}

export default MyReservations;
