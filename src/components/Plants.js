import React from 'react';
import './plants.css';

const stuff = ['pilea', 'pothos', 'monstera', 'zz'];

function Plants() {

  return (
    <a href='/' className='plants flex-wrap'>
      {stuff.map(type => (
        <div className='x2'>
          <div className='plant-img-container'>
            <img className='fill-width' alt='pretty plant pic fro sill.com' src={'/' + type + '.jpg'} />
          </div>
        </div>
      ))}
    </a>
  );
}

export default Plants;
