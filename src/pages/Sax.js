import React from 'react';
import Content from '../components/Content';

const content = [
  {
    title: 'Audio Recordings',
    content: [
      <a href='https://halfshellrecords.bandcamp.com/album/softly-wait'>
        <img
          alt='album cover with beautiful rainbow'
          src='https://f4.bcbits.com/img/a2733115006_10.jpg'
          width='100'
        ></img>
      </a>
    ]
  },
  {
    title: 'Live Recordings',
    content: [
      <a href='https://youtu.be/J-oxfReveQ8'>Tres Leches 2019</a>,
      <a href='https://www.youtube.com/watch?v=00OoYjwBF0g'>Pleasures 2018</a>,
    ]
  },
  {
    title: 'Groups I\'ve performed with',
    content: [
      'Sundae Crush',
      'VamoLá',
      'The Dahlias',
      'Rise Up! Action Band',
      'Pleasures',
      'Tres Leches',
      'Cumbia Calavera',
      'Unidos Do Swing',
      'Filthy FemCorps'
    ]
  }
];

function Sax() {
  return (
    <div className='page-container'>
      <h1>Saxophone</h1>
      <p>
        Playing saxophone is the way I can most fluently express myself through
        music.
      </p>
      <Content content={content} />
    </div>
  );
}

export default Sax;
