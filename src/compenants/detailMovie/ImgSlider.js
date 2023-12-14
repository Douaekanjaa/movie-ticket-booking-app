
import React, { useState } from 'react';
import './Slider.css';
import BtnSlider from './BtnSlider';

export default function ImgSlider({ images }) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(images.length);
    }
  };

  const moveDot = index => {
    setSlideIndex(index);
  };
  return (
    <div className="container-slider">
      {images.map((img, index) => (
        <div
          key={index}
          className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
        >
          <img
            src={`${process.env.PUBLIC_URL}/${img}`}
            alt={`img${index + 1}`}
          />
        </div>
      ))}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />


      <div className="container-dots">
        {Array.from({ length: images.length }).map((_, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
  );
}
