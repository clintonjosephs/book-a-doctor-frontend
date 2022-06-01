import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { accountLogin } from '../../redux/bookDoctor/doctorThunks';
import styles from './Login.module.css';
import banner from './images/banner.jpeg';

const Login = () => {
  const { loading } = useSelector((state) => state.bookDoctorReducer);
  const [info, setMessage] = useState({ message: '', status: false });

  const setup = () => ({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState(setup());

  const { email, password } = loginData;

  const changeHandler = (event) => {
    setLoginData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    const response = await dispatch(accountLogin(loginData));
    setMessage(response);
  };

  const { message, status } = info;

  return (
    <>
      <section className={styles.loginContainer}>
        <img src={banner} alt="login banner" className={styles.banner} />
        <div className={`${styles.login} ${styles.shadow}`}>
          <h2>Book a Doctor</h2>
          <div className={styles.line} />
          <div className={`${status === true ? styles.success : styles.failure}`}>{message}</div>
          <form onSubmit={loginHandler}>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={changeHandler}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              required
              onChange={changeHandler}
            />
            <div>
              <input
                type="checkbox"
                name="remember"
              />
              {' '}
              &nbsp;
              Remember me?
            </div>
            {
              loading ? <button type="submit" className={styles.formSubmitBtn}>Log in</button> : <button type="button" className={styles.formSubmitBtn}>Processing ...</button>
            }

            <div style={{ marginTop: '1rem' }}>
              Don&apos;t have an account?
              <NavLink to="/signup"> signup </NavLink>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
