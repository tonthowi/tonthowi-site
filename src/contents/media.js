import React from 'react';

function ImageWithAlt({ src, style }) {
  const altText = src ? src.split('/').pop().replace(/\.[^/.]+$/, '').replace(/-/g, ' ') : 'image';
  return (
    <img
      src={src}
      alt={altText}
      style={{ width: '100%', maxHeight: '600px', ...style }}
    />
  );
}

function VideoWithAlt({ src, className, style }) {
  const altText = src.split('/').pop().replace(/\.[^/.]+$/, '').replace(/-/g, ' ');
  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className={className}
      style={{ width: '100%', maxHeight: '600px', ...style }}
    >
      {`Your browser does not support the video tag for ${altText}.`}
    </video>
  );
}

export { ImageWithAlt, VideoWithAlt };