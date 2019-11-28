import React from 'react';
import './content.css';

function Content({ content }) {
  return content.map(item => (
    <div className='content-container'>
      <h3>{item.title}</h3>
      <ul>
        {item.content.map(p => (
          <li>{p}</li>
        ))}
      </ul>
    </div>
  ));
}

export default Content;

