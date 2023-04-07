import React from 'react';

const Cart = ({ cart, handleRemoreFromCart }) => {
  return (
    <div className=" position-sticky top-0 ">
      <h1 className="text-primary"> Order Summary {cart.length} </h1>
      {cart.map((tshirt) => {
        return (
          <p key={tshirt._id}>
            {tshirt.name}
            <button onClick={()=> {handleRemoreFromCart(tshirt._id);}} className="ms-3 btn">X</button>
          </p>
        );
      })}
    </div>
  );
};

export default Cart;