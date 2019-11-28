import React from 'react';

import './home.css';

const favoriteThings = [
  'djing',
  'light',
  'thrifting',
  'saxophone',
  'happyplace',
  'moires',
  'technology',
  'plants',
  'dancing',
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
          <a
            className='home-link x3'
            style={{ backgroundColor: rainbow[i] }}
            href={'/' + thing}
          >
            {thing === 'happyplace' ? 'Adrienne\'s Happy Place' : thing.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}

export default Home;
