import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllDoctors } from '../../redux/bookDoctor/doctorThunks';
import { updateCarouselState } from '../../redux/bookDoctor/doctorActions';
import CarouselItem from '../../components/Doctors/Carousel/CarouselItem';
import AnimateWrapper from '../../components/AnimateWrapper';
import LoadingInfo from '../../components/Spinner';
import styles from './Welcome.module.css';

let fetched = false;
const Welcome = () => {
  const [current, setCurrent] = useState(0);

  const dispatch = useDispatch();
  const {
    currentCarouselState,
    loading,
    doctorsChunked,
  } = useSelector((state) => state.bookDoctorReducer);

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchAllDoctors());
      fetched = true;
    }
  }, []);

  if (doctorsChunked.length === 0 && loading) {
    return <LoadingInfo />;
  }

  if (doctorsChunked.length === 0 && !loading) {
    return <h2>No doctors available at the moment</h2>;
  }

  const { length } = doctorsChunked;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    dispatch(updateCarouselState(current));
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    dispatch(updateCarouselState(current));
  };

  return (
    <AnimateWrapper
      initial={{ y: 1000, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 1000, opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.top}>
        <span><b>AVAILABLE DOCTORS</b></span>
        <p>Please select a doctor</p>
      </div>
      <section className={styles.doctorsCarousel}>
        <button type="button" data-testid="previous" onClick={prevSlide} className={`${styles.prev} ${styles.direction}`}>
          <i className="fa-solid fa-caret-left" />
        </button>
        <ul className={styles.carouselWrapper}>
          { currentCarouselState && currentCarouselState.map(({
            id, name, imageUrl, description,
          }) => (
            <CarouselItem
              key={id}
              name={name}
              imageUrl={imageUrl}
              id={id}
              description={description}
            />
          )) }
        </ul>
        <button type="button" data-testid="next" onClick={nextSlide} className={`${styles.next} ${styles.direction}`}>
          <i className="fa-solid fa-caret-right" />
        </button>
      </section>

    </AnimateWrapper>
  );
};

export default Welcome;
