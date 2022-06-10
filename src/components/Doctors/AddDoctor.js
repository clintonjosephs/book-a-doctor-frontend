import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addDoctorThunk } from '../../redux/bookDoctor/doctorThunks';
import classes from './AddDoctor.module.css';
import form from '../../pages/Login/Login.module.css';

function AddDoctor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.bookDoctorReducer);
  const [info, setMessage] = useState({ message: '', status: false });
  const { message, status } = info;

  const goBack = () => navigate('/');

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
    setMessage(response);
    if (response.status) event.target.reset();
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <section className={classes.loginContainer}>
      <div className={`${classes.doctor} ${form.shadow}`}>
        <h1>Add a doctor</h1>
        <div className={classes.line} />
        <div className={`${status === true ? form.success : form.failure}`}>{message}</div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name="name" id="name" placeholder="Name" required />
          <input type="text" name="specialization" id="specialization" placeholder="Specialization" required />
          <input type="text" name="city" id="city" placeholder="City" required />
          <input type="text" name="description" id="description" placeholder="Description" required />
          <input type="number" name="cost_per_day" id="cost_per_day" placeholder="Cost per day" required />
          <input type="file" name="image" id="image" placeholder="Image" />
          <div className={classes.flex}>
            <div>
              <button type="button" onClick={goBack} className={form.formSubmitBtn}>Back</button>
            </div>
            <div>
              {
                !loading ? <button type="submit" className={form.formSubmitBtn}>Submit</button> : <button type="button" className={form.formSubmitBtn}>Processing ...</button>
              }
            </div>
          </div>
        </form>
      </div>

    </section>
  );
}

export default AddDoctor;
