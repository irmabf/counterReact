import React, { Component } from 'react';

//Stateless functional component

//we are extracting totalCounters from props as an argument
const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar
        <span className="badge badge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
}

export default Navbar;

