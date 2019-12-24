import React from 'react';

import './home.css';

const favoriteThings = [
  'djing',
  'light',
  'thrifting',
  'sax',
  'happyplace',
  'travel',
  'coding',
  'nature',
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
    <div id='home' className='home rainbow flex-wrap'>
      {favoriteThings.map((thing, i) => {
        return (
          <a
            className='home-link x3'
            style={{ backgroundColor: '#' + rainbow[i] }}
            href={'/' + thing}
          >
            {thing === 'happyplace' ? (
              <a href='/hobbies' className='big-love'>
                <span role='img' aria-label='sunshine lollipops and rainbows'>
                  🌈✨
                </span>
              </a>
            ) : (
              thing.toUpperCase()
            )}
          </a>
        );
      })}
    </div>
  );
}

export default Home;
