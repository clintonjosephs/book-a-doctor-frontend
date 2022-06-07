import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllDoctors } from '../../redux/bookDoctor/doctorThunks';
import CarouselItem from '../../components/Doctors/Carousel/CarouselItem';
import AnimateWrapper from '../../components/AnimateWrapper';
import 'react-multi-carousel/lib/styles.css';
import styles from './Welcome.module.css';

let fetched = false;

const Welcome = () => {
  const dispatch = useDispatch();
  const { doctors, loading } = useSelector((state) => state.bookDoctorReducer);
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

  const displayDoctors = [doctors[1], doctors[2], doctors[3]];

  return (
    <AnimateWrapper
      initial={{ y: 1000, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 1000, opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.top}>
        <h1>Available Doctors</h1>
        <span>Professionals ready to serve you</span>
      </div>
      <section className={styles.doctorsCarousel}>
        <ul className={styles.carouselWrapper}>
          { displayDoctors.map(({
            id, name, imageUrl, description,
          }) => (
            <CarouselItem
              key={id}
              name={name}
              imageUrl={imageUrl}
              description={description}
            />
          )) }
        </ul>
      </section>
    </AnimateWrapper>
  );
};

export default Welcome;
