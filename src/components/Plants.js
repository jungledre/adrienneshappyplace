import React from 'react';

const stuff = ['pilea', 'pothos', 'monstera', 'zz'];

function Plants() {

  return (
    <a href='/' className='flex-wrap'>
      {stuff.map(type => (
        <div className='x2'>
          <img className='fill-width' src={'/' + type + '.jpg'} />
        </div>
      ))}
    </a>
  );
}

export default Plants;
