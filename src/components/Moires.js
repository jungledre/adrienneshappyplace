import React from 'react';
import './moires.css';
import './starburst.css';

const stuff = ['m', 's', 's', 'm'];

function Moire() {
  const moire = (
    <div className='x2'>
      <div className='moires'>
        <div className='moire m1'></div>
        <div className='moire m2'></div>
      </div>
    </div>
  );

  const starburst = (
    <div className='x2'>
      <div className='starburst starburst--both'></div>
    </div>
  );

  return (
    <a href='/' className='flex-wrap'>
      { stuff.map(i => {
        return i === 'm' ? moire : starburst;
      }) }
    </a>
  );
}

export default Moire;
