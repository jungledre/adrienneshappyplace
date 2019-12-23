import React from 'react';

const plants = ['pilea', 'pothos', 'monstera', 'zz'];

const Plants = () => (
  <a href='/' className='flex-wrap'>
    {plants.map(type => (
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

export default Plants;
