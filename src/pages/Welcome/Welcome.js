import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllDoctors } from '../../redux/bookDoctor/doctorThunks';
import AnimateWrapper from '../../components/AnimateWrapper';
import 'react-multi-carousel/lib/styles.css';
import styles from './Welcome.module.css';

let fetched = false;

const Welcome = () => {
  const dispatch = useDispatch();
  const { doctors, loading } = useSelector((state) => state.bookDoctorReducer);
  const displayDoctors = [doctors[1], doctors[2], doctors[3]];

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchAllDoctors());
      fetched = true;
    }
  }, []);

  if (doctors.length === 0 && loading) {
    return <h2>Loading</h2>;
  }
  if (doctors.length === 0 && !loading) {
    return <h2>No doctors available at the moment</h2>;
  }

  return (
    <AnimateWrapper
      initial={{ y: 1000, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 1000, opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className={styles.doctorsCarousel}>
        <ul className={styles.carouselWrapper}>
          { displayDoctors.map(({
            id, name, imageUrl, description,
          }) => (
            <li key={id} className={styles.carouselItem}>
              <img src={imageUrl} width={150} height={150} alt="doctor" />
              <div className={styles.docName}>{name}</div>
              <div className={styles.line} />
              <div>{description}</div>
            </li>
          )) }
        </ul>
      </section>
    </AnimateWrapper>
  );
};

export default Welcome;
