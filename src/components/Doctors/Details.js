import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOneDoctor } from '../../redux/bookDoctor/doctorThunks';

function Details() {
  const { id } = useParams();
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
      <img alt="doctor" src={doctor.image_url} />
    </div>
  );
}

export default Details;
