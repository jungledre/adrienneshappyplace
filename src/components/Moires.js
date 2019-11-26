import React from 'react';
import './moires.css';
import './starburst.css';

const stuff = ['m', 's', 's', 'm'];

function Moire() {

  const moire = (
    <div className='x2'>
      <div className='moires'>
        <div className='moire m1'></div>
        <div className='moire m2'></div>
      </div>
    </div>
  );

  const starburst = (
    <div className='x2'>
      <div className='starburst starburst--both'></div>
    </div>
  );

  return (
    <a href='/' className='flex-wrap'>
      { stuff.map(i => {
        return i === 'm' ? moire : starburst;
      }) }
    </a>
  );
}

export default Moire;
    /* <div className='container'>

  <div className='element'></div>
</div> */
    /* <div className='container2'></div> */
    /* <div className="cool rainbow">
  <a href="https://codepen.io/clawtros/pen/rLwGpW" className="linky">Iteration of a super coooooool code sample by </a>
  <a href="http://www.removablefeast.com/#drip" className="clawtros">clawtros</a>
</div> */
    /* <div id='wave-container'>
  <div id='wave'></div>
</div> */