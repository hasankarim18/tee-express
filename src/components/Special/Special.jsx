import React from 'react';

const Special = ({ring}) => {
    return (
        <div>
            <h6 className="text-danger">Specisl</h6>
            <p>
                <small className="text-primary">{ring}</small>
            </p>
        </div>
    );
};

export default Special;