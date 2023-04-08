import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = ({ring}) => {
    const angti = useContext(RingContext)

    return (
      <div>
        <h6 className="text-danger">Specisl</h6>
        <p>
          <small className="text-primary">{angti}</small>
        </p>
      </div>
    );
};

export default Special;