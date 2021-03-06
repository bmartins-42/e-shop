import React from 'react';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/auth.utils';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/boardgame.icon.svg';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        shop
      </Link>
      {currentUser ? (
        <div
          className='option'
          onClick={() => {
            auth.signOut();
          }}
        >
          Sign Out
        </div>
      ) : (
        <Link className='option' to='/login'>
          login
        </Link>
      )}
    </div>
  </div>
);

export default Header;
