import React from 'react';
import Content from '../components/Content';

function Dancing() {
  return (
    <div className='page-container'>
      <h1>Dancing</h1>
      <p>I grew up contra dancing and have picked up a bunch of different styles of dance since then.</p>
      <p>While I love exploring my own body by dancing in front of a mirror at home, I'm also fascinated by partner dance as a way of physical communication that transcends language in the same way that playing music does.</p>
      <Content content={[{
        title: 'My Favorite Styles',
        content: [
          'Forro',
          'Clubbing',
          'Improvisational Dance',
          'Samba',
          'Forro',
          'Contra'
        ]
      }]} />
    </div>
  );
}

export default Dancing;
