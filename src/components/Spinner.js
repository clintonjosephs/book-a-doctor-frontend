import React from 'react';
import { Oval } from 'react-loader-spinner';

function LoadingInfo() {
  return (
    <section className="loadingInfo">
      <Oval
        height="80"
        width="80"
        secondaryColor="green"
        color="#ffb400"
        ariaLabel="loading"
        strokeWidth={4}
      />
    </section>
  );
}

export default LoadingInfo;
