import React from 'react';

function BookAppointment() {
  return (
    <div>
      <section>
        <div>
          <h1>Book an Appointment</h1>
          <form>
            <select aria-label="doctor_name">
              <option value="1">Meredith Grey</option>
              <option value="2">Cristina Yang</option>
              <option value="3">George O Malley</option>
              <option value="4">Izzie Stevens</option>
              <option value="5">Alex Karev</option>
            </select>
            <input aria-label="city" disabled="" type="text" value="city" readOnly />
            <input id="date_appointment" required="" type="date" readOnly />
            <button type="submit">Reserve</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default BookAppointment;
