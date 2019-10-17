import React from 'react';

import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/boardgame.icon.svg';

const Header = () => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        shop
      </Link>
      <Link className='option' to='/login'>
        login
      </Link>
    </div>
  </div>
);

export default Header;
