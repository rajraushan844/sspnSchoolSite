import React from "react";
import Title from "./Cards/Title";

const TitleImgContent = ({ title, imageUrl, content }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center">
      <div className="min-h-screen text-white flex flex-col lg:flex-col bg-gray-100 m-8 lg:mt-2 mb-20 p-8 rounded-lg shadow-lg">
        {/* Image Section */}
        <Title title={title} />
        {/* Text Section */}
        <div className="bg-gradient-to-tr from-orange-600 to-gray-600 text-white flex mt-4 flex-col items-center justify-center p-6 lg:p-10 rounded-lg shadow-lg w-full lg:pl-10 transition-transform duration-300 hover:bg-orange-900 hover:shadow-2xl">
          <div className="w-full mx-auto mb-6 lg:mb-4 transform transition-transform duration-300 hover:scale-105">
            <img
              src={imageUrl}
              alt="Event"
              className="rounded-lg shadow-lg w-full h-auto object-cover lg:relative lg:mt-4"
            />
          </div>

          <blockquote className="text-xl font-light leading-relaxed mb-4 shadow-sm">
            {content}
          </blockquote>
        </div>
      </div>
    </div>
  );
};
export default TitleImgContent;
