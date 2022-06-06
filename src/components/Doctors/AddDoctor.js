/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import StorageManager from '../../helpers/format/StorageManager';

function addDoctorApi(data) {
  fetch('http://localhost:3001/v1/doctors', {
    method: 'POST',
    body: data,
    headers: {
      Authorization: `Bearer ${StorageManager.getToken().token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

function AddDoctor() {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    console.log(data);

    data.append('doctor[name]', event.target.name.value);
    data.append('doctor[image]', event.target.image.files[0]);
    addDoctorApi(data);
  }

  return (
    <div>
      <h1>Add a doctor</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">name</label>
        <input type="text" name="name" id="name" />
        <br />

        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image" />
        <br />

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default AddDoctor;
