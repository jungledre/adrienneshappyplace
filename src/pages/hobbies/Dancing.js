import React, { Fragment } from 'react';
import Content from '../../components/Content';

function Dancing() {
  return (
    <Fragment>
      <p>
        I grew up contra dancing and have picked up a bunch of different styles
        of dance since then.
      </p>
      <p>
        While I love dancing in front of a mirror at
        home, I'm also fascinated by partner dance as a way of physical
        communication that transcends language in the same way that playing
        music does.
      </p>
      <Content
        content={[
          {
            title: 'My Favorite Styles',
            content: ['Improvisational, Clubbing, Samba, Forro, Contra']
          }
        ]}
      />
    </Fragment>
  );
}

export default Dancing;
