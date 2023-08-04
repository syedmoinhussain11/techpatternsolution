import React from 'react';
import {RiMenu3Line, RiCloseLin } from 'react-icons/ri'
import logo from '../../assets/logo.svg';
import './navbar.css';

//BEM -> Block Element Modifier

const Navbar = () => {
  return (
    <div className='TechPatternSolution__navbar'>
      <div className='TechPatternSolution__navbar-links'>
        <div className='TechPatternSolution__navbar-links_logo'>
          <img src="{logo}" alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar