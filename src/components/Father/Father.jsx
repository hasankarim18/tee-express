import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    return (
        <div>
            <h1 className="text-warning">Father.jsx</h1>
            <section className="d-flex">
                <Myself ring={ring} />
                <Brother />
                <Sister />
            </section>
        </div>
    );
};

export default Father;