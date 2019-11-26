import React from 'react';

function Light() {
  return (
    <div className='light rainbow-container'>
      {"Here's some cool info on psychedelic light shows"}
      <ul>
        <li>
          <a href='http://liquidlightshop.com'>Liquid Light Lab</a>
        </li>
        <li>
          <a href='https://www.exploratorium.edu/snacks/on-the-fringe'>
            {' '}
            interference patterns
          </a>
        </li>
      </ul>
      <a href='/'>Click here to go back home</a>
    </div>
  );
}

export default Light;
