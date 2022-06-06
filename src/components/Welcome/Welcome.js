import React from 'react';
import AnimateWrapper from '../AnimateWrapper';

const Welcome = () => (
  <AnimateWrapper
    initial={{ x: 300, opacity: 1 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div>Available Doctors</div>
  </AnimateWrapper>
);

export default Welcome;
