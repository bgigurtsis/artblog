// src/components/Gallery.js

import React from 'react';
import './Gallery.css'; // Make sure to create a CSS file for the gallery

function Gallery() {
  const images = [/* array of image URLs */];

  return (
    <div className="grid-gallery">
      {images.map((image, index) => (
        <div key={index} className="grid-item">
          <img src={image} alt={`Artwork ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
