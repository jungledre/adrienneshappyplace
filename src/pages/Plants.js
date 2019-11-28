import React from 'react';

const stuff = ['pilea', 'pothos', 'monstera', 'zz'];

function Plants() {

  return (
    <a href='/' className='plants flex-wrap'>
      {stuff.map(type => (
        <div
          alt='pretty plant pic fro sill.com'
          className='x2 plant-img-container'
          style={{
            backgroundImage: 'url(/' + type + '.jpg)',
            backgroundPosition: 'center'
          }}
        ></div>
      ))}
    </a>
  );
}

export default Plants;
