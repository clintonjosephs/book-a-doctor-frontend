import React from 'react';
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
          <a href="#home">home</a>
          {' '}
          and try from there.
        </p>
      </div>
    </div>
  </section>
);

export default NotFound;
