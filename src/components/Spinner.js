import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

function LoadingInfo() {
  return (
    <section className="loadingInfo">
      <BallTriangle
        height="80"
        width="80"
        color="green"
      />
    </section>
  );
}

export default LoadingInfo;
