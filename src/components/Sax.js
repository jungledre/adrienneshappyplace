import React from 'react';

function Sax() {
  return (
    <div className='rainbow-container'>
      Playing saxophone is one of the ways I can most fluently express myself
      through music!
      <ul>
        <li>
          I'm on a record!!
          <a href='https://halfshellrecords.bandcamp.com/album/softly-wait'>
            <img
              alt='album cover with beautiful rainbow'
              src='https://f4.bcbits.com/img/a2733115006_10.jpg'
              width='100'
            ></img>
          </a>
        </li>
        <li>
          <p>
            I've had the honor of performing on{' '}
            <a href='https://kexp.org/'>KEXP</a> twice!
          </p>
          <ul>
            <li>
              <a href='https://www.youtube.com/watch?v=00OoYjwBF0g'>
                Pleasures 2018
              </a>
            </li>
            <li>
              <a href='https://youtu.be/J-oxfReveQ8'>Tres Leches 2019</a>
            </li>
          </ul>
        </li>
      </ul>
      <a href='/'>Take me home!</a>
    </div>
  );
}

export default Sax;
