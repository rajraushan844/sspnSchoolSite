import React from "react";

// Card Component
const Card = ({ image, name, education, designation }) => (
  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-transform duration-200 hover:scale-105">
    <img className="w-full h-cover object-cover" src={image} alt={name} />
    <div className="px-6 py-4 bg-white">
      <div className="font-bold text-2xl mb-2 text-gray-800">{name}</div>
      <div className="font-semibold text-gray-600 mb-2">{education}</div>
      <p className="text-gray-700 text-base">{designation}</p>
    </div>
    {/* <div className="px-6 pt-4 pb-2 bg-gray-50">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div> */}
  </div>
);

export default Card;
