import React from 'react';
import { Link } from 'react-router-dom';
import YouTube from '../pages/YouTube';

import './page.css';

function Page({ title, children, noRainbow }) {
  const rainbowColors = [
    '3CADCF',
    '85DE77',
    '97CC4B',
    'F9FFCB',
    'FFCC49'
  ];

  const randomColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];

  return (
    <div
      className={!noRainbow && 'rainbow-container'}
      style={{
        backgroundColor: !noRainbow && '#' + randomColor
      }}
    >
      <YouTube
        videoUrl={
          'https://www.youtube.com/embed/o-cHr7Ka-fE?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1'
        }
      />
      <div className='page-container'>
        <h1>{title}</h1>
        {children}
      </div>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </div>
  );
}

export default Page;

