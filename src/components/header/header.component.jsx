import React from 'react';

import './header.styles.scss';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/boardgame.icon.svg';

const Header = () => (
  <div className='header'>
    <Link to='' className='logo-container'>
      <Logo className='logo'/>
    </Link>
    <Link className='options'>
      <Link className='option' to='/shop'>
        shop
      </Link>
      <Link className='option' to='/contact'>
        contact
      </Link>
    </Link>
  </div>
);

export default Header;