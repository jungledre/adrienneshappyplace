import React from 'react';

import './home.css';

function Home() {
  return (
    <span className='home flex-wrap'>
      <div className='half-screen'>
        <a href='/services'>
          <h1>Services</h1>
        </a>
      </div>
      <div className='half-screen rainbow rainbow-container'>
        <a className='home-link rainbow-link ' href='/hobbies'>
          <h1>Hobbies</h1>
        </a>
      </div>
    </span>
  );
}

export default Home;
