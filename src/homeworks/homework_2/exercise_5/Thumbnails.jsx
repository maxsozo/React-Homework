import React from 'react';
import './Carousel.css';

const Thumbnails = ({ images, current, onChange }) => {
  return (
    <div className="thumbnails">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Thumbnail ${index + 1}`}
          className={current === index ? 'thumbnail selected' : 'thumbnail'}
          onClick={() => onChange(index)}
        />
      ))}
    </div>
  );
};

export default Thumbnails;