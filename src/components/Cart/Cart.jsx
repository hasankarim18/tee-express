import React from 'react';

const Cart = ({ cart, handleRemoreFromCart }) => {

  let message;

  if(cart.length === 0){
    message = <p className="text-center">Please add some products</p>
  }else {
    message = <div className="text-center">
      <h3>Boroloxx</h3>
      <p>Thanks for giving you money.</p>
    </div>
  }

  return (
    <div className=" position-sticky top-0 text-center ">
      <h1 className="text-primary"> Order Summary {cart.length} </h1>
      {cart.length > 2 ? (
        <span className="fs-5 text-danger">Aro Kino</span>
      ) : (
        <span className="fs-5 text-secondary">Fokira</span>
      )}
      {message}
      {cart.map((tshirt) => {
        return (
          <>
            <p key={tshirt._id}>
              {tshirt.name}
              <button
                onClick={() => {
                  handleRemoreFromCart(tshirt._id);
                }}
                className="ms-3 btn"
              >
                X
              </button>
            </p>
          </>
        );
      })}
      {cart.length === 2 && (
        <p className="text-warning fs-5">Double Bonanaza</p>
      )}
      {cart.length === 3 || <h3 className="text-primary">Tin ta hoilo na</h3>}
    </div>
  );
};

export default Cart;


/**
 * Conditional rendering 
 * 
 */