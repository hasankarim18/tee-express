import React from 'react';

const Tshirt = ({ tshirt, handleAddToCart }) => {
//  console.log(tshirt);
  const { name, picture, price } = tshirt;
  return (
    <div className="col-12 p-2 col-sm-6">
      <div className="card p-2 rounded">
        <img
          style={{ height: "250px" }}
          src={picture}
          className="img-fluid rounded"
          alt=""
        />
        <h3 className="text-primary">{name}</h3>
        <p className="fw-bold fs-5 ">Price: ${price}/- </p>
        <div className="text-center">
          <button
            onClick={()=> {handleAddToCart(tshirt)}}
            className="btn border fw-bold fs-5 btn-primary w-100"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tshirt;