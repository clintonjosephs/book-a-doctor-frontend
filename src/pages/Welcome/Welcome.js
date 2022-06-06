import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { fetchAllDoctors } from '../../redux/bookDoctor/doctorThunks';
import AnimateWrapper from '../../components/AnimateWrapper';
import 'react-multi-carousel/lib/styles.css';

let fetched = false;

const Welcome = () => {
  const dispatch = useDispatch();
  const { doctors } = useSelector((state) => state.bookDoctorReducer);

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchAllDoctors());
      fetched = true;
    }
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <AnimateWrapper
      initial={{ y: 1000, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 1000, opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Carousel responsive={responsive}>
        { doctors.map(({
          id, name, imageUrl, description,
        }) => (

          <div key={id}>
            <img src={imageUrl} width={150} height={150} alt="doctor" />
            <div>{name}</div>
            <div>{description}</div>
          </div>
        )) }
      </Carousel>
    </AnimateWrapper>
  );
};

export default Welcome;
