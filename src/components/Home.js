import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

import './home.css';

const favoriteThings = [
  'moires',
  'djing',
  'saxophone',
  'plants',
  'Adrienne\'s Happy Place',
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
    <div className='flex-wrap'>
      {favoriteThings.map((thing, i) => {
        return (
          <div
            className='x3 rainbow'
            style={{ backgroundColor: rainbow[i] }}
          >
            <a href={'/' + thing}>{thing}</a>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
