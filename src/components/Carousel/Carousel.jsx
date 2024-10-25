// Carousel.jsx
import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Automatically change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[350px] sm:h-[500px] md:h-[600px] lg:h-[500px] overflow-hidden">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 text-gray-800 p-2 rounded-full shadow-md hover:bg-opacity-100 transition duration-300 ease-in-out focus:outline-none"
        aria-label="Previous Slide"
      >
        &#9664;
      </button>

      {/* Next Button */}
      <button
        onClick={() => setCurrentImage((currentImage + 1) % images.length)}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 text-gray-800 p-2 rounded-full shadow-md hover:bg-opacity-100 transition duration-300 ease-in-out focus:outline-none"
        aria-label="Next Slide"
      >
        &#9654;
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 w-2 rounded-full transition duration-300 ease-in-out ${index === currentImage ? 'bg-white' : 'bg-gray-400 hover:bg-gray-300'}`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
