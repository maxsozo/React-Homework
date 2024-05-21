import React, { useState } from 'react';
import Thumbnails from './Thumbnails';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="main-image-container">
        <div className="clickable-area left" onClick={handlePrevClick}></div>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="main-image"
        />
        <div className="clickable-area right" onClick={handleNextClick}></div>
      </div>
      <Thumbnails
        images={images}
        current={currentIndex}
        onChange={handleThumbnailClick}
      />
    </div>
  );
};

export default Carousel;
