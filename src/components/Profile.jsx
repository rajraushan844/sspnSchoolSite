import React from 'react';

const Profile = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-[#f2f5f9]">
      {/* Profile Image Section */}
      <div
        className="relative w-full h-[500px] flex flex-col items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)',
        }}
      >
        <img
          className="absolute bottom-[-1px] left-0 right-0 w-full object-cover z-[100]"
          src="path-to-image"
          alt="Profile"
        />
      </div>

      {/* Profile Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex opacity-50 bg-black"></div>

      {/* Profile Content Section */}
      <div className="flex flex-col items-start w-[90%] max-w-[1320px] mt-[-12rem] mb-12 bg-white shadow-xl rounded-xl">
        {/* Inner Sections Here */}
      </div>

      {/* Profile Inner Container */}
      <div className="flex justify-around items-center w-full py-4">
        {/* Content goes here */}
      </div>

      {/* Profile Image 2 */}
      <img
        className="absolute top-[-60%] left-0 right-0 w-[150px] m-auto shadow-xl rounded-full object-cover"
        src="path-to-image"
        alt="Profile 2"
      />

      {/* Profile Containers for Icons and Texts */}
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center mr-4">
          {/* Icon and Text */}
        </div>
      </div>

      {/* Profile Content Section with Margin Top and Bottom */}
      <div className="flex flex-col items-center w-full mt-12 mb-12">
        {/* Content goes here */}
      </div>

      {/* Profile Text Section */}
      <p className="text-gray-500">Sample Text</p>

      {/* More Containers for Icons and Texts */}
      <div className="flex justify-center items-center">
        <svg className="fill-current text-gray-600 w-4 h-4"></svg>
        <p className="text-gray-600 font-semibold ml-2">Sample Text</p>
      </div>

      <div className="flex justify-center items-center mt-12">
        <svg className="fill-current text-gray-600 w-4 h-4"></svg>
        <p className="text-gray-600 ml-2">Sample Text</p>
      </div>

      {/* More Containers for Centered Rows */}
      <div className="flex justify-center items-start w-full h-auto">
        <div className="flex justify-center items-center mt-4">
          <svg className="fill-current text-gray-600 w-4 h-4"></svg>
          <p className="text-gray-600 ml-2">Sample Text</p>
        </div>
      </div>

      {/* Separator Line */}
      <div className="w-[90%] h-[0.5px] opacity-50 mt-8 mb-8 bg-gray-700"></div>

      {/* Final Texts */}
      <p className="w-[75%] text-center text-lg font-light leading-7 mb-4">Sample Footer Text</p>
      <p className="text-gray-500">Another Footer Text</p>
      <a href="#" className="text-blue-600 font-medium transition-colors duration-300 hover:text-blue-400">
        Link
      </a>
    </div>
  );
};

export default Profile;
