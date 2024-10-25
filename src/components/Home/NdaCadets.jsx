import React, { useEffect, useRef } from 'react';

// Sample data for cadet images (replace with actual URLs)
const cadetImages = [
  { id: 1, src: "../../assets/Cadets/cadet1.jpg", alt: "Cadet 1", name: "SUKHABO V KIHO" },
  { id: 2, src: "Sainik-School-Punglwa-removebg-preview.png", alt: "Cadet 2", name: "EKAGRA ARYAN" },
  { id: 3, src: "Sainik-School-Punglwa-removebg-preview.png", alt: "Cadet 3", name: "CADET 3 NAME" },
  { id: 4, src: "Sainik-School-Punglwa-removebg-preview.png", alt: "Cadet 4", name: "CADET 4 NAME" },
  { id: 5, src:"Sainik-School-Punglwa-removebg-preview.png", alt: "Cadet 5", name: "CADET 5 NAME" },
  { id: 6, src: "Sainik-School-Punglwa-removebg-preview.png", alt: "Cadet 6", name: "CADET 6 NAME" },
  // Add more cadets as needed
];

const CadetImageCarousel = () => {
  const scrollRef = useRef(null);

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        // Check if the scroll has reached the end
        if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
          // Reset to the start
          scrollRef.current.scrollLeft = 0;
        } else {
          // Continue scrolling
          scrollRef.current.scrollLeft += 1;
        }
      }
    }, 20); // Adjust speed (lower value = faster)
  
    return () => clearInterval(interval);
  }, []);

  // Scroll to the left (Previous)
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200; // Adjust scroll amount
    }
  };

  // Scroll to the right (Next)
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200; // Adjust scroll amount
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto p-5 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">Meet Our Cadets</h2>

      {/* Buttons for manual scrolling */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 z-10"
      >
        &#9664; {/* Left arrow */}
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 z-10"
      >
        &#9654; {/* Right arrow */}
      </button>

      {/* Carousel */}
      <div className="overflow-hidden h-60 relative" ref={scrollRef}>
        <div className="flex space-x-6">
          {/* Duplicate the card blocks for continuous scrolling */}
          {cadetImages.concat(cadetImages).map((cadet, index) => (
            <div
              key={index}
              className="w-40 h-full bg-white rounded-lg shadow-lg p-4 flex-shrink-0 transform transition hover:scale-105"
            >
              <img
                src={cadet.src}
                alt={cadet.alt}
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h3 className="text-center font-semibold text-gray-800 text-sm">{cadet.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CadetImageCarousel;
