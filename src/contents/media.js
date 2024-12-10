import React from 'react';
import Image from 'next/image';

function ImageWithAlt({ src, alt, title, style, width, height }) {
  const altText = alt || (src ? src.split('/').pop().replace(/\.[^/.]+$/, '').replace(/-/g, ' ') : 'image');
  return (
    <Image
      src={src}
      alt={altText}
      title={title}
      style={{ width: '100%', maxHeight: '600px', ...style }} // Default styling
      width={width || 800} // Default width
      height={height || 600} // Default height
      priority // Ensures critical images are loaded eagerly
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