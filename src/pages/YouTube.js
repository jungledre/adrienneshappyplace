import React from 'react';
import './youtube.css';

function YouTube({ videoUrl }) {
  return (
    <div>
      <div class='video-background'>
        <div class='video-foreground'>
          <iframe
            title='YouTube Content'
            src={ videoUrl }
            frameborder='0'
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default YouTube;
