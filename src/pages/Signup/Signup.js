import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { NavLink, useNavigate } from 'react-router-dom';

import FormInput from './FormInput';
import { signupDispatcher } from '../../redux/user/userThunks';

import styles from '../Login/Login.module.css';

const Signup = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const signupState = useSelector((state) => state.userReducer.signup || false);
  const errorMessages = useSelector((state) => state.userReducer.errorMessages || []);

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'Name*',
      errorMessage: 'Name should be 3-150 characters.',
      pattern: '^[A-Za-z0-9 ]{3,150}$',
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email*',
      errorMessage: 'Email should be a valid email.',
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: 'Password*',
      errorMessage: 'Password should be 6-20 characters, without special characters.',
      pattern: '[A-Za-z0-9]{6,20}',
    },
    {
      id: 4,
      name: 'password_confirmation',
      type: 'password',
      placeholder: 'Confirm Password*',
      errorMessage: "Passwords don't match",
      pattern: values.password,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  if (signupState) {
    navigate('/');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('name', values.name);
    data.append('email', values.email);
    data.append('password', values.password);
    data.append('password_confirmation', values.password_confirmation);

    if (event.target.image && event.target.image.files.length !== 0) data.append('image', event.target.image.files[0]);

    dispatch(signupDispatcher(data));
  };

  return (
    <section className={styles.loginContainer}>
      <div className={`${styles.login} ${styles.shadow}`}>
        <h2>Sign Up</h2>
        <div className={styles.line} />
        <div className={styles.failure}>
          {errorMessages.map((element) => (
            <span key={uuidv4()} className="errorMessage">
              {element}
            </span>
          ))}
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={values[input.name]}
              onChange={onChange}
              errorMessage={input.errorMessage}
              pattern={input.pattern}
            />
          ))}

          <input type="file" name="image" id="image" />

          <button type="submit" className={styles.formSubmitBtn}>
            Signup
          </button>

          <div style={{ marginTop: '1rem' }}>
            Have an account?
            <NavLink to="/login"> login </NavLink>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
