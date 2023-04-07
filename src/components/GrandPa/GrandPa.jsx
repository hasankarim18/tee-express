import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Auntie from '../Auntie/Auntie';
import './GrandPa.css'

const GrandPa = () => {
    const ring = 'Diamond'
    return (
      <div className="container grandpa">
        <h1 className="text-danger">Grand pa</h1>
        <section className="d-flex">
          <Father ring={ring} />
          <Uncle />
          <Auntie />
        </section>
      </div>
    );
};

export default GrandPa;