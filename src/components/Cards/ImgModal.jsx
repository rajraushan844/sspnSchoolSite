import React, { useState, useEffect } from 'react';

const ImageModal = () => {
  const [isOpen, setIsOpen] = useState(true); // Modal opens on page load

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Close the modal when clicking outside of the modal content
  const handleClickOutside = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  // Adding the event listener for clicking outside the modal
  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className="modal fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-2 rounded-lg shadow-lg max-w-lg w-full">
            {/* Close button */}
            <span
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-900 cursor-pointer text-3xl"
              onClick={closeModal}
            >
              &times;
            </span>
            {/* Modal Image */}
            <img
              src="https://sainikschoolpunglwa.nic.in/images/RESULT2024.jpg"
              alt="Modal"
              className="rounded-lg max-w-full h-auto"
            />
            <p className="mt-4 text-center text-gray-700">Result From Sainik School Punglwa</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
