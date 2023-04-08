import React from 'react';
import Special from '../Special/Special';

const Myself = ({ring}) => {
    return (
        <div>
            <h6 className="text-warning">Myselef</h6>
            <Special ring={ring} />
        </div>
    );
};

export default Myself;