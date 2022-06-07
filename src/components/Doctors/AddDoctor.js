/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDoctorThunk } from '../../redux/bookDoctor/doctorThunks';
// import StorageManager from '../../helpers/format/StorageManager';

// function addDoctorApi(data) {
//   fetch('http://localhost:3001/v1/doctors', {
//     method: 'POST',
//     body: data,
//     headers: {
//       Authorization: `Bearer ${StorageManager.getToken().token}`,
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// }

function AddDoctor() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.bookDoctorReducer);
  const [info, setMessage] = useState({ message: '', status: false });
  const { message, status } = info;

  function formData(event) {
    const data = new FormData();
    data.append('doctor[name]', event.target.name.value);
    data.append('doctor[specialization]', event.target.specialization.value);
    data.append('doctor[city]', event.target.city.value);
    data.append('doctor[description]', event.target.description.value);
    data.append('doctor[cost_per_day]', event.target.cost_per_day.value);
    if (event.target.image.files.length !== 0) data.append('doctor[image]', event.target.image.files[0]);
    return data;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = formData(event);
    const response = await dispatch(addDoctorThunk(data));
    console.log(response);
    if (response.status) {
      setMessage(response);
    } else {
      setMessage(response);
    }
  };

  console.log(message, status);

  return (
    <div>
      <h1>Add a doctor</h1>
      {/* <div>{message}</div>
      <div>{status}</div> */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">name</label>
        <input type="text" name="name" id="name" />
        <br />

        <label htmlFor="specialization">specialization</label>
        <input type="text" name="specialization" id="specialization" />
        <br />

        <label htmlFor="city">city</label>
        <input type="text" name="city" id="city" />
        <br />

        <label htmlFor="description">description</label>
        <input type="text" name="description" id="description" />
        <br />

        <label htmlFor="cost_per_day">Cost per day</label>
        <input type="number" name="cost_per_day" id="cost_per_day" />
        <br />

        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image" />
        <br />

        {
          loading ? <button type="submit">Submit</button> : <button type="button">Processing ...</button>
        }
      </form>
    </div>
  );
}

export default AddDoctor;
