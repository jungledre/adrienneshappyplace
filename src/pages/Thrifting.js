import React from 'react';

function Thrifting() {
  return (
    <div className='rainbow-container'>
      <h1>Thrifting</h1>
      <div>
        Do yourself a favor and drop by{' '}
        <a href='https://www.lifelongthrift.com/'>Lifelong Thrift</a>. The best
        thrift store I've ever been to in my entire life.
      </div>
      <p>
        They have a <span className='rainbow'>rainbow</span> of deals, and all the money goes to support folks with HIV and AIDS.
      </p>
    </div>
  );
}

export default Thrifting;
