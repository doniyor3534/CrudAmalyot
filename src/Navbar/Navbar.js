import React from 'react';
import {  NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    return (
        <div className='nav'>
              <button className='logo'><img src="./img/Logo.svg" alt="" /></button>
              <ul>
                <li><NavLink to={'/'}>HOME</NavLink></li>
                <li>ABOUT</li>
                <li>ACTIONOME</li>
                <li>UMA’S PAINTING</li>
                <li>CONTACT</li>
                <li><NavLink to={'/shop'}><ShoppingCartIcon/></NavLink></li>
              </ul>
        </div>
    );
};

export default Navbar;