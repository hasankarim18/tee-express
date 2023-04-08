import React, { useContext } from 'react';
import { MoneyContext } from '../GrandPa/GrandPa';

const Sister = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h6 className="text-warning">Mysister</h6>
            <p>Grand Pa's Balance: {money}</p>
        </div>
    );
};

export default Sister;