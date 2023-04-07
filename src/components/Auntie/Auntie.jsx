import React from 'react';
import Cusin from '../Cusin/Cusin';

const Auntie = ({ring}) => {
    return (
      <div>
        <h1 className="text-success">Auntie</h1>
        <section className="d-flex">
          <Cusin> Abir</Cusin>
          <Cusin hasFriend ring={ring} > Nbir</Cusin>
        </section>
      </div>
    );
};

export default Auntie;