import React from 'react';
import Content from '../components/Content';

const info = [
  {
    title: 'Supplies',
    content: [
      <span>
        Glass Clock Faces - At thrift stores or custom ones from{' '}
        <a href='http://liquidlightshop.com'>Liquid Light Lab Shop</a>
      </span>,
      'Petri dishes',
      <span>
        Water Dyes - Food Coloring or higher quality watercolor dyes by{' '}
        <a href='https://www.docmartins.com/collections/hydrus-fine-art-watercolor-bottles'>
          Dr. Ph. Martin
        </a>
      </span>,
      <span>
        Oil Dyes - Candle, candy, and{' '}
        <a href='http://liquidlightshop.com'>Liquid Light Lab</a> again with the
        good stuff
      </span>,
      'Moire transparencies',
      'Color, strobe, and ripple wheels'
    ]
  },
  // {
  //   title: 'Research',
  //   content: [
  //     <a href='https://www.exploratorium.edu/snacks/on-the-fringe'>
  //       {' '}
  //       interference patterns
  //     </a>
  //   ]
  // },
  {
    title: 'Artists',
    content: [
      <a href='https://liquidlightlab.com/'>Liquid Light Lab</a>,
      <a href='https://www.youtube.com/user/UniversalColors'>
        {'UniversalColors'}
      </a>
    ]
  }
];


function Light() {
  return (
    <div className='light page-container'>
      <div className='light rainbow-inner'>
        <h1>Psychedelic Light Shows</h1>
        <p>
          I finally got my hands on a light projector! This has led to all kinds of experiments and research. Here I'll share my learnings.'
        </p>
        <Content content={info} />
      </div>
    </div>
  );
}

export default Light;
