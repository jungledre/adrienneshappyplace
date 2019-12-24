import React, { Fragment } from 'react';
import Accordion from '../components/Accordion';

const content = [
  {
    title: 'DJ Services',
    content: [
      'I love spinning electronica, synth pop, Brazilian, house, soul, and funk.',
      "Past Events: Fremont Foundry, Jupiter Bar, Corvus, Linda's Tavern."
    ]
  },
  {
    title: 'VJ Services',
    content: [
      'As my newest service, I can provide a full psychedelic light show including analog liquid light art.',
      'Upcoming Events: Werewolf Vacation 1/18'
    ]
  },
  {
    title: 'Saxophone',
    content: [
      'I perform and record professional improvised or arranged wind instrument parts. I read music fluently and learn very fast by ear. I also play a wide range of auxillary percussion.',
      <p>
        Bands:{' '}
        <a href='https://housekeysband.bandcamp.com/Housekeys'>Housekeys</a>,{' '}
        <a href='http://sundaecrush.com/'>Sundae Crush</a>,{' '}
        <a href='https://soundcloud.com/neonpolygon/strawberry-moon'>The Dahlias</a>,{' '}
        <a href='http://riseupactionband.com/'>Rise Up! Action Band</a>,{' '}
        <a href='https://halfshellrecords.bandcamp.com/album/softly-wait'>
          Pleasures
        </a>
        , <a href='https://youtu.be/J-oxfReveQ8'>Tres Leches</a>,{' and '}
        <a href='https://www.facebook.com/FilthyFemcorps/'>Filthy FemCorps</a>
      </p>
    ]
  },
  {
    title: 'Web Development',
    content: [
      "With 6 years of professional web development experience, I'm open to offering my services for compelling website ideas.",
      <span>
        Experience:{' '}
        <a href='https://account.godaddy.com/products'>GoDaddy.com</a> — My
        Products + Account Settings Pages,{' '}
        <a href='https://porch.com'>Porch.com</a> — Front of Site + Account
        Settings Pages, Widget API,{' '}
        <a href='https://brenthaven.com/'>Brenthaven.com</a>
      </span>
    ]
  },
  {
    title: 'Networking',
    content: [
      'I can connect you with some of the best musicians, music composers, sound designers, mixing and mastering engineers, photographers, videographers, event producers, social media managers, graphic designers, illustrators, painters, tattoo artists, woodworkers and jewelry makers in this city.'
    ]
  }
];

function Services({ label }) {
  return (
    <Fragment>
      <Accordion content={content} />
      <br />
      Let's work together! {' '}
      <a href='mailto: adrie.k@gmail.com'>adrie.k@gmail.com</a>
    </Fragment>
  );
}

export default Services;
