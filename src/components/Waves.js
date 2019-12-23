import React from 'react';

import './waves.css';

const rainbow = [
  'pink',
  'orange',
  'yellow',
  'green',
  'yellow',
  'orange'
];

const doubleRainbow = rainbow.concat(rainbow);

function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {doubleRainbow.map(color => {
        return (
          <div
            className='rainbow-container'
            style={{
              backgroundColor: color,
              width: '100vw',
              height: '9vh'
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default Home;
