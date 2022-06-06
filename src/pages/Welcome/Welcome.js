import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllDoctors } from '../../redux/bookDoctor/doctorThunks';
import AnimateWrapper from '../../components/AnimateWrapper';

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

  return (
    <AnimateWrapper
      initial={{ y: 1000, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 1000, opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      { doctors.map(({ id, name }) => (
        <div key={id}>{name}</div>
      )) }
    </AnimateWrapper>
  );
};

export default Welcome;
