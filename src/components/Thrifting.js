import React from 'react';

function Thrifting() {
  return (
    <div className='rainbow-container'>
      <div>
        Do yourself a favor and drop by{' '}
        <a href='https://www.lifelongthrift.com/'>Lifelong Thrift</a>. The best
        thrift store I've ever been to.
      </div>
      <p>
        They have a <span className='rainbow'>rainbow</span> of deals!
      </p>
      <a href='/' className='flex-wrap'>
        Go home
      </a>
    </div>
  );
}

export default Thrifting;
