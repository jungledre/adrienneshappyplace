import React, { Fragment } from 'react';

function Adrienne() {
  return (
    <Fragment>
      <p>
        Thank you for taking the time to mosey on over here. I hope that it's
        abundantly clear that I have truly loved putting this site together.
        Please enjoy what you find while exploring what makes me happy and what
        I have to offer the world.
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
        <br />
        <small>
          Seattle, WA <span role='img' aria-label='heart'>💞</span>
          {new Date().getFullYear()}
        </small>
      </p>
    </Fragment>
  );
}

export default Adrienne;
