import React from 'react';
import {useLoaderData, useNavigation} from 'react-router-dom'
import Spinner from '../utils/Spinner';

const Home = () => {
    const tshirts = useLoaderData()
    console.log(tshirts);
    const navigation = useNavigation()
    console.log(navigation.state);

    return (
      <div>
        <div className="container">
          <div
            className={navigation.state === "loading" ? "loading" : "d-none"}
          >
            <Spinner />
          </div>
          <h1 className="text-danger"> This is home</h1>
        </div>
      </div>
    );
};

export default Home;