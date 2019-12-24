import React, { Fragment } from 'react';

function Adrienne() {
  return (
    <Fragment>
      <p>
        Thank you for taking the time to mosey on over here. It's been super fun
        putting this thing together and I look forward to continue iterarating
        on what I've built so far. Please enjoy what you find here while
        exploring what makes me happy and what I have to offer the world.
      </p>

      <p>
        What I've shared here is a shallow dip into the wealth of experiences
        I've had the pleasure of collecting during my time here on Earth. I can
        only share so much through this medium so I hope you take inspiration
        from something you find here that you can pick up and carry along with
        you along your own journey.
      </p>

      <p>
        <a href='https://youtu.be/hgw_yprN_-w'>Happy trails</a>,
      </p>

      <p>
        <i>Adrienne Kerr</i>
        <br/>
        <small>
          Seattle, WA{' '}
          <span role='img' aria-label='heart'>
            💞
          </span>
          {new Date().getFullYear()}
        </small>
      </p>
    </Fragment>
  );
}

export default Adrienne;
