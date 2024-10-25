import React, { useState, useEffect } from 'react';


const images = [
  'https://sainikschoolpunglwa.nic.in/images/EAST%20ZONE%20CHAMPIONSHIP%202023%20copy.jpg',  // Replace with your image URLs
  'https://sainikschoolpunglwa.nic.in/images/Oct2.jpg',
  'https://cf-img-a-in.tosshub.com/lingo/itne/images/story/202405/6643aa607362b-nagaland-141558844-16x9.png',
  'https://sainikschoolpunglwa.nic.in/images/4.jpg',
  'https://morungexpress.com/uploads/2023/04/91622050_1682526822_sainik.jpg',
  'https://cf-img-a-in.tosshub.com/lingo/itne/images/story/202405/663f9adcd7161-nagaland-sainik-school--punglwa-observes-17th-founders-day-112043645-16x9.jpg'
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Automatically change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval);
  }, []);

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

      {/* Optional: Previous/Next Buttons */}
      <button
        onClick={() => setCurrentImage((currentImage - 1 + images.length) % images.length)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
      >
        &#9664;
      </button>
      <button
        onClick={() => setCurrentImage((currentImage + 1) % images.length)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
      >
        &#9654;
      </button>

      {/* Optional: Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 w-2 rounded-full ${index === currentImage ? 'bg-white' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
