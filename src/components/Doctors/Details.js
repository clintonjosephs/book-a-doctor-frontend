import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOneDoctor } from '../../redux/bookDoctor/doctorThunks';

function Details() {
  const id = 1;
  const dispatch = useDispatch();
  const { doctor } = useSelector((state) => state.bookDoctorReducer);

  useEffect(() => {
    dispatch(fetchOneDoctor(id));
  }, [dispatch]);

  return (
    <div>
      <h1> Details</h1>
      <h2>
        { doctor.name }
        {' '}
      </h2>

    </div>
  );
}

export default Details;
