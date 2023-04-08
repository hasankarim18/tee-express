import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Auntie from '../Auntie/Auntie';
import './GrandPa.css'

export const RingContext = createContext("gold");
export const MoneyContext = createContext(0)

const GrandPa = () => {
  const [money, setMoney] = useState(0)
 
    const ring = 'Diamond'
    return (
      <div className="container grandpa">
        <h1 className="text-danger">Grand pa</h1>
        <p>Has Money: {money}</p>
        <MoneyContext.Provider value={[money, setMoney]}>
          <section className="d-flex">
            <RingContext.Provider value="golden ring">
              <Father ring={ring} />
              <Uncle />
              <Auntie />
            </RingContext.Provider>
          </section>
        </MoneyContext.Provider>
      </div>
    );
};

export default GrandPa;

/**
 * 1. create a context and export it
 * 2. Crate context provider
 * 3. use useContext to receive the value 
 * 
 */