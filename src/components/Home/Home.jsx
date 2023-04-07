import React, { useState } from 'react';
import {useLoaderData, useNavigation} from 'react-router-dom'
import Spinner from '../utils/Spinner';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import toast from "react-hot-toast";

const Home = () => {
    const tshirts = useLoaderData() || []
    const [cart, setCart] = useState([])
  //  console.log(tshirts);
    const navigation = useNavigation()
  //  console.log(navigation.state);


  const handleAddToCart = (tshirt)=> {
     const exitst = cart.find((ts) => ts._id === tshirt._id);

     if(exitst){
        toast('You have already added this tshirt!!!')
     }else {
      console.log('adding');
       const newCart = [...cart, tshirt];
       setCart(newCart); 
     }

   
  }

  const handleRemoreFromCart = (id)=> {
    const rest = cart.filter(item => item._id !== id)

    setCart(rest)
  }

    return (
      <div>
        <div className="container">
          <div
            className={navigation.state === "loading" ? "loading" : "d-none"}
          >
            <Spinner />
          </div>
          <div className="row">
            <div className="col-12 col-sm-8">
              <div className="row">
                {tshirts.map((item) => (
                  <Tshirt
                    handleAddToCart={handleAddToCart}
                    key={item._id}
                    tshirt={item}
                  />
                ))}
              </div>
            </div>
            <div className="col-12 col-sm-4 position-relative">
              <Cart handleRemoreFromCart={handleRemoreFromCart} cart={cart} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;