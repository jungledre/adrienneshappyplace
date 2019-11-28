import React from 'react';
import Content from '../components/Content';

const content = [
  {
    title: "Sites I've Touched",
    content: [
      <span>
        <a href='https://account.godaddy.com/products'>GoDaddy.com</a> — My Products +
        Account Settings Pages
      </span>,
      <span>
        <a href='https://porch.com'>Porch.com</a> — Front of Site + Account Settings
        Pages, Widget API
      </span>,
      <a href='https://brenthaven.com/'>Brenthaven.com</a>
    ]
  },
  {
    title: 'How to Learn',
    content: [
      "If you've ever messed with HTML or CSS on myspace or livejournal or something, I bet you'd like web development too.",
      <span>
        Get started right meow with{' '}
        <a href='http://jsforcats.com/'>JavaScript For Cats</a> 🐈
      </span>,
      'If you take an interest in web development or coding in general, hit me up! I would love to start you on your journey.'
    ]
  }
];

function Technology() {
  return (
    <div className='page-container'>
      <h1>Web Development</h1>
      <p>I discovered this field after meeting some startup developers through Couchsurfing.org who would work remotely while travelling the world.</p>
      <p>After spending more time around web developers, it became clear that this was the life I wanted to go after. I hunkered down for a year and was able to build a career in web development for myself.</p>
      <Content content={content} />
    </div>
  );
}

export default Technology;
