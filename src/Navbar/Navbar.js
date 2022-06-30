import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [burger,setBurger]=useState(false)
    return (
        <div className='nav'>
              <button className='logo'><img src="./img/Logo.svg" alt="" /></button>
              <MenuIcon className='burger' onClick={()=>setBurger(!burger)} />
              <ul className={burger ? 'active':''}>
                <li  onClick={()=>setBurger(!burger)} ><NavLink to={'/'}>HOME</NavLink></li>
                <li  onClick={()=>setBurger(!burger)} >ABOUT</li>
                <li  onClick={()=>setBurger(!burger)} >ACTIONOME</li>
                <li  onClick={()=>setBurger(!burger)} >UMA’S PAINTING</li>
                <li  onClick={()=>setBurger(!burger)} >CONTACT</li>
                <li  onClick={()=>setBurger(!burger)} ><NavLink to={'/shop'}><ShoppingCartIcon/></NavLink></li>
              </ul>
        </div>
    );
};

export default Navbar;