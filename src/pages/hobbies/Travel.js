import React, { Fragment } from 'react';
import Content from '../../components/Content';

const content = [
  {
    title: '2021 Chile??',
    content: ['Some close friends recently moved down there. Looking forward to visiting them at some point in their new home.']
  },
  {
    title: '2020 Brazil',
    content: ['Heading back to Brazil with my samba group VamoLá']
  },
  {
    title: '2019 Europe',
    content: ['Toured around Europe with the band Pleasures!']
  },
  {
    title: '2018 Brazil',
    content: [
      'After meeting some members of Unidos Do Swing at HONK! Boston 2018, I planned a trip down there with my clarinet to attend HONK! Rio and HONK! São Paulo just a month later. There was an enormous amount of love and inspiration to take in and was welcomed with open arms by the incredible community of artists that is down there. I look forward to getting back to this parallel world again for Carnaval 2020.'
    ]
  },
  {
    title: '2017 Honduras',
    content: [
      'A very close friend of mine worked as a nurse for a year at a orphanage through an organization called Mis Pequeños Hermanos. It was especially inspiring to meet a man who had been raised by this organization, studied to become a surgeon there, and now practices surgery in higher population areas.'
    ]
  },

  {
    title: '2002 - 2016 Still in progress',
    content: ['Dang! I have so many stories to tell!']
  },
  {
    title: '2002 South America',
    content: [
      'My grandpa and nana would take their grandchildren on an international trip once they turned 10. They even discussed the idea of exploring Antarctica but I was ecstatic to learn that they wanted to take me to Ecuador, Peru, and the Galapagos Islands.'
    ]
  },
  {
    title: '2001 Europe',
    content: [
      'For just $3,000, my mom planned a 3 week long car camping trip all around Europe for our entire family. Yes, that includes flights.'
    ]
  },
  {
    title: '2000 El Salvador',
    content: [
      'Incredible exchange program between gradeschool immersion programs.'
    ]
  },
  {
    title: '1995 Costa Rica',
    content: [
      'My parents bravely brought 3 kids to Costa Rica. We stayed on a farm with a family there and learned how to harvest bananas, process chickens, eat stargruit, and build a hottub in the middle of a river. At 5 I was exposed to the sounds of the jungle - birds, bats, bugs, howlers monkeys and so much more.'
    ]
  }
];

function Travel() {
  return (
    <Fragment>
      <p>
        I've had the luxury of exploring the world. I find it to be a way find
        new perspectives for my approach to life and a really awesome way to
        connect with others.
      </p>
      <Content content={content} />
    </Fragment>
  );
}

export default Travel;
