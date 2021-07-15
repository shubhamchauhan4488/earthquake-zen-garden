import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='header-container'>
      <Link to="/">
        <img src="./../../../assets/realtor-logo.png" width='70px' height='50px' />
      </Link>
      <h2>Earthquake Zen Garden</h2>
      <Link to="/profile">Welcome Sally</Link>
    </div>
  );
};

export default Header;