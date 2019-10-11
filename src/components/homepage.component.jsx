import React from "react";

import './homepage.styles.scss'

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Stuff 1</h1>
          <span className='subtitle'>BUY ME</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Stuff 2</h1>
          <span className='subtitle'>BUY ME</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Stuff 3</h1>
          <span className='subtitle'>BUY ME</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>The Stuff</h1>
          <span className='subtitle'>BUY NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>The Thing</h1>
          <span className='subtitle'>BUY NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;