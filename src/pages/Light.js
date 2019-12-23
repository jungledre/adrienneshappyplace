import React, { Fragment } from 'react';
import Content from '../components/Content';
import Moires from './Moires';
const info = [
  {
    title: 'Supplies',
    content: [
      <span>
        Glass Clock Faces - At thrift stores or custom ones from{' '}
        <a href='http://liquidlightshop.com'>Liquid Light Lab Shop</a>
      </span>,
      <span>
        Water Dyes - Food Coloring or higher quality watercolor dyes by{' '}
        <a href='https://www.docmartins.com/collections/hydrus-fine-art-watercolor-bottles'>
          Dr. Ph. Martin
        </a>
      </span>,
      <span>
        Oil Dyes - I've been having good luck with liquid dyes by{' '}
        <a href='https://www.lonestarcandlesupply.com/candle-dyes/liquid-dyes.html'>
          Lone Star Candle Supply
        </a>
      </span>,
      <span>
        Transparency Sheets - You can overlay transparency sheet graphics over
        eachother to produce{' '}
        <a href='https://www.exploratorium.edu/snacks/on-the-fringe'>
          moire/interference patterns.
        </a>
      </span>,
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/e/ea/Moir%C3%A9_pattern.svg'
        alt='moire pattern graphic'
      />
    ]
  },
  {
    title: 'CSS Moires for funsies',
    content: [
      <div style={{ width: '80vw' }}>
        <Moires />
      </div>
    ]
  }
];


function Light() {
  return (
    <Fragment>
      <p>
        I finally got my hands on a light projector! This has led to all kinds
        of experiments and research. Here I'll share my learnings.
      </p>
      <Content content={info} />
    </Fragment>
  );
}

export default Light;
