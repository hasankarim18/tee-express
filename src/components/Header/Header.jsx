import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <nav className="d-flex ps-5 pe-5 pt-3 pb-3 border-bottom mb-3 ">
        <div className="d-flex gap-5">
          <NavLink
            className={({ isActive}) =>
               isActive ? "text-danger nav-link fs-5" : "nav-link fs-5"
           }
            to="/"
          >
            {" "}
            Home{" "}
          </NavLink>
          <NavLink
            className={({ isActive}) =>
              isActive ? "text-danger nav-link fs-5" : " nav-link fs-5"
            }
            to="/review"
          >
            {" "}
            Orders Review{" "}
          </NavLink>
        </div>
      </nav>
    );
};

export default Header;