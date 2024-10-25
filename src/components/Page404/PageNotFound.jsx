import React from 'react';
import { useNavigate } from 'react-router-dom';

import NotfoundImg from '../../assets/Page404/PgNF.svg';

const NotFound = () => {
  const navigate = useNavigate();

  return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
          {/* Image */}
          <img
            src={NotfoundImg}// Replace with your image URL
            alt="404 Not Found"
            className="mt-10 w-[40%] max-h-3xl"
          />
          <div className='flex flex-col ml-4 text-center mb-20'>
          {/* Error Message */}
          <h1 className="text-4xl font-bold text-orange-600">404 Not Found</h1>
          <p className="text-6xl text-gray-700 mt-2">Whoops! That page doesn’t exist.</p>
    
          {/* Helpful Links */}
          <p className="text-gray-600 mt-4">
            Here are some helpful links instead:
          </p>

          <div className="mt-2 space-x-4">
            <button
              onClick={() => navigate('/')}
              className="text-blue-500 hover:underline"
            >
              Home
            </button>
            <button
              onClick={() => navigate('/search')}
              className="text-blue-500 hover:underline"
            >
              Search
            </button>
            <button
              onClick={() => navigate('/help')}
              className="text-blue-500 hover:underline"
            >
              Help
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="text-blue-500 hover:underline"
            >
              Contact
            </button>
          </div>
        </div>
          
        </div>
      );
};

export default NotFound;
