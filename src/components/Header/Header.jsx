import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <nav className="d-flex ps-5 pe-5 ">
        <div className="d-flex gap-5">
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/review"> Orders Review </NavLink>
        </div>
      </nav>
    );
};

export default Header;