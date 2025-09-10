import React, { useState, useEffect } from 'react';
import Weather from './Weather';
import image1 from '../assets/images/crops.jpg';
import image2 from '../assets/images/schemes.jpg';
import image3 from '../assets/images/scheme1.jpg';

const images = [image1, image2, image3]; // Using available images for the slider

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '20px',
    zIndex: 1
  };

  const prevButtonStyle = { ...buttonStyle, left: '10px' };
  const nextButtonStyle = { ...buttonStyle, right: '10px' };

  return (
    <div>
      <div style={{ width: '100%', height: '100vh', overflow: 'hidden', position: 'relative' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slider-${index}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        ))}
        <button style={prevButtonStyle} onClick={goToPrevious}>&#10094;</button>
        <button style={nextButtonStyle} onClick={goToNext}>&#10095;</button>
      </div>
      <Weather />
    </div>
  );
};

export default Home;
