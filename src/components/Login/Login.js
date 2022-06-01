import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const loginHandler = () => {
    console.log('someone hit submit button');
  };

  return (
    <section className={styles.loginContainer}>
      <div className={`${styles.login} ${styles.shadow}`}>
        <h2>Login</h2>
        <div className={styles.line} />
        <form onSubmit={loginHandler}>
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
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
          <button type="submit" className={styles.formSubmitBtn}>Log in</button>
          <div style={{ marginTop: '1rem' }}>
            Don&apos;t have an account?
            <NavLink to="/signup" exact> signup </NavLink>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
