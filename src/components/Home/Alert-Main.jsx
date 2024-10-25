import React from 'react';

const Alert = () => {
  return (
    <div className="relative flex items-center bg-gradient-to-r p-4 from-yellow-200 via-yellow-500 to-orange-400 text-black py-1 shadow-lg rounded-lg overflow-hidden">
      {/* Fixed "Important Alert" Section */}
      <div className="bg-red-600 text-white px-4 py-2 font-bold rounded-l-lg text-sm md:text-base lg:text-lg">
        IMPORTANT ALERT
      </div>

      {/* Marquee Text Section */}
      <div className="overflow-hidden flex-1">
        <div className="flex animate-marquee whitespace-nowrap space-x-8 md:space-x-12 text-sm md:text-base lg:text-lg font-semibold tracking-wide md:tracking-wider">
          <span className="flex items-center">
            🚨 <span className="ml-2">School Annual Day is on October 20th! Don’t miss it!</span>
          </span>
          <span className="flex items-center">
            🏅 <span className="ml-2">Sports Day will take place on November 5th! Join us!</span>
          </span>
          <span className="flex items-center">
            ✍️ <span className="ml-2">Midterm Exams start on November 15th! Prepare well!</span>
          </span>
        </div>
      </div>
    
    </div>

  );
};

export default Alert;