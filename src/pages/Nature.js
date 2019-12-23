import React, { Fragment } from 'react';
import Plants from './Plants';
import Content from '../components/Content';

const content = [
  {
    title: "Gardening",
    content: ['I grew up in the city but my parents bartered with a neighbor for access to their land. I have fond memories of walking through the neihborhood to fetch fresh veggies for screened in porch dinners accompanied by the ocassional flash of a lightning bug and the  hum of cicadas.']
  },
  {
    title: "House Plants",
    content: [<Plants />]
  }
];

function Nature() {
  return (
    <Fragment>
      <Content content={content} />
    </Fragment>
  );
}

export default Nature;
