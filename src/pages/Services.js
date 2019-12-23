import React, { Fragment } from 'react';
import Content from '../components/Content';

const content = [
  {
    title: 'DJ',
    content: [
      'Electronica, synth pop, Brazilian, house, soul, funk DJ',
      "Past Events: Fremont Foundry, Jupiter Bar, Corvus, Linda's Tavern."
    ]
  },
  {
    title: 'VJ',
    content: [
      'I can provide a full psychedelic light show including analog liquid light art.',
      'Upcoming Events: Werewolf Vacation 1/18'
    ]
  },
  {
    title: 'Saxophone',
    content: [
      'I perform and record professional improvised or arranged wind instrument parts. I can read music and learn very fast by ear.',
      'Bands: Housekeys, Sundae Crush, Rise Up! Action Band, Pleasures, Tres Leches, Filthy FemCorps'
    ]
  },
  {
    title: 'Web Development',
    content: [
      "With 6 years of professional web development experience, I'm open to offering my services for compelling website ideas.",
      <span>
        Experience: <a href='https://account.godaddy.com/products'>GoDaddy.com</a>{' '}
        — My Products + Account Settings Pages,{' '}
        <a href='https://porch.com'>Porch.com</a> — Front of Site + Account
        Settings Pages, Widget API,{' '}
        <a href='https://brenthaven.com/'>Brenthaven.com</a>
      </span>
    ]
  },
  {
    title: 'Networking',
    content: [
      'I can connect you with some of the best musicians, music composers, sound designers, mixing and mastering engineers, videographers, graphic designers, illustrators, painters, woodworkers and jewelry makers in this city.'
    ]
  }
];

function Services({ label }) {
  return (
    <Fragment>
      <Content content={content} />
      Contact: <a href='mailto: adrie.k@gmail.com'>adrie.k@gmail.com</a>
    </Fragment>
  );
}

export default Services;
