import React, { useContext } from 'react';
import Cusin from '../Cusin/Cusin';
import { MoneyContext } from '../GrandPa/GrandPa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h1 className="texty-primary">Uncle</h1>
            <p>
                <small>Grandpa money: {money}</small>
            </p>
            <div>
                <button onClick={()=> setMoney(money + 1000)}>Send 1000 taka</button>
            </div>
            <section className="d-flex">
                <Cusin> Nabil</Cusin>
                <Cusin> Nabila</Cusin>
                
            </section>
        </div>
    );
};

export default Uncle;