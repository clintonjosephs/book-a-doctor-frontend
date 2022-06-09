import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import AnimateWrapper from '../../components/AnimateWrapper';
import { userStatus } from '../../helpers/format/format';
import { accountLogin } from '../../redux/bookDoctor/doctorThunks';
import styles from './Login.module.css';

const Login = () => {
  // if user exists redirect to main page
  const navigate = useNavigate();

  useEffect(() => {
    if (userStatus()) {
      navigate('/');
    }
  }, []);

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
    if (response.status) {
      navigate('/');
    } else {
      setMessage(response);
    }
  };

  const { message, status } = info;

  return (
    <AnimateWrapper
      initial={{ x: 300, opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className={styles.loginContainer}>
        <div className={`${styles.login} ${styles.shadow}`}>
          <h2>Book a Doctor</h2>
          <div className={styles.line} />
          <div className={`${status === true ? styles.success : styles.failure}`}>{message}</div>
          <form onSubmit={loginHandler}>
            <input
              type="email"
              name="email"
              data-testid="email-input"
              placeholder="Email Address"
              required
              value={email}
              onChange={changeHandler}
            />
            <input
              type="password"
              name="password"
              data-testid="password-input"
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
              !loading ? <button type="submit" className={styles.formSubmitBtn}>Log in</button> : <button type="button" className={styles.formSubmitBtn}>Processing ...</button>
            }

            <div style={{ marginTop: '1rem' }}>
              Don&apos;t have an account?
              <NavLink to="/signup"> signup </NavLink>
            </div>
          </form>
        </div>
      </section>
    </AnimateWrapper>
  );
};

export default Login;
