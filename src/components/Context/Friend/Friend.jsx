import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h6>Friend</h6>
            {
                ring && ring
            }
        </div>
    );
};

export default Friend;