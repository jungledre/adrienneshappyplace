import React from 'react';

function Content({ content }) {
  const rainbow = [
    'HotPink',
    'Tomato',
    'Magenta',
    'Coral',
    'Gold',
    'Chartreuse',
    'Aquamarine',
    'DeepSkyBlue',
    'DarkViolet'
  ];

  return (
    <div className='content-container'>
      {this.props.children}
    </div>
  );
}

export default Content;

