import React from 'react';

import './home.css';

const favoriteThings = [
  'djing',
  'light',
  'thrifting',
  'saxophone',
  'happyplace',
  'moires',
  'coding',
  'plants',
  'dancing',
];

const rainbow = [
  'C132AB',
  'FF756D',
  '5742B5',
  '3CADCF',
  '85DE77',
  '97CC4B',
  'F9FFCB',
  'FFCC49',
  'EF3E1F',
];

function Home() {
  return (
    <div className='home rainbow flex-wrap'>
      {favoriteThings.map((thing, i) => {
        return (
          <a
            className='home-link x3'
            style={{ backgroundColor: '#' + rainbow[i] }}
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
