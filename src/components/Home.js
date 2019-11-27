import React from 'react';

import './home.css';

const favoriteThings = [
  'moires',
  'djing',
  'saxophone',
  'plants',
  'happyplace',
  'dancing',
  'thrifting',
  'light',
  'technology'
];

const rainbow = [
  'HotPink',
  'Tomato',
  'Magenta',
  'Coral',
  'Gold',
  'Chartreuse',
  'Aquamarine',
  'DeepSkyBlue',
  'DarkViolet',
];

function Home() {
  return (
    <div className='home rainbow flex-wrap'>
      {favoriteThings.map((thing, i) => {
        return (
          <div
            className='x3'
            style={{ backgroundColor: rainbow[i] }}
          >
            {
            thing === 'happyplace' ?
              <div>Adrienne's Happy Place</div> :
              <a href={'/' + thing}>{thing}</a>
            }
          </div>
        );
      })}
    </div>
  );
}

export default Home;
