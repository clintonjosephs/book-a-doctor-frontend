import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => (
  <section className={styles.notFound}>
    <div className={styles.mainbox}>
      <div className={styles.err}>4</div>
      <i className={`${styles.far} fa-question-circle fa-spin`} />
      <div className={styles.err2}>4</div>
      <div className={styles.msg}>
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
        <p>
          Lets go
          {' '}
          <Link to="/">home</Link>
          {' '}
          and try from there.
        </p>
      </div>
    </div>
  </section>
);

export default NotFound;
