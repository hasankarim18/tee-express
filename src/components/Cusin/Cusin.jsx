import React from 'react';
import Friend from '../Friend/Friend';

const Cusin = ({ children,hasFriend, ring }) => {
  return (
    <div>
     
      <p className="fw-bold">
        <small>{children}</small>
      </p>
      {
        hasFriend && <Friend ring={ring}  />}
    </div>
  );
};

export default Cusin;