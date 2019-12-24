import React from 'react';
import './youtube.css';

function YouTube({ videoUrl }) {
  return (
    <div>
      <div className='video-background'>
        <div className='video-foreground'>
          <iframe
            title='psychedelic video'
            src={videoUrl}
            frameBorder='0'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default YouTube;
