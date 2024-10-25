import { useState } from 'react';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-orange-600 to-gray-600 py-4 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Logo and Text */}
        <div className="flex items-center space-x-4">
          <img
            src="Sainik-School-Punglwa-removebg-preview.png"
            alt="School Logo"
            className="h-20 w-20 p-2 shadow-white filter drop-shadow-lg"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold drop-shadow-xl">
              SAINIK SCHOOL PUNGLWA, NAGALAND
            </h1>
            <p className="text-lg text-center md:text-2xl italic">We Learn, We Serve</p>
            <p className="text-sm md:text-xl text-center">
              One Aim One Goal - National Defence Academy & Naval Academy
            </p>
          </div>
          <img
            src="sainik-school-society.png"
            alt="School Logo"
            className="h-20 w-20 p-2 filter drop-shadow-lg"
          />
        </div>

        {/* Right Side - Contact Info */}
        <div className="mt-4 md:mt-0 text-center md:text-right space-y-1 text-sm md:text-base">
          <p>For Academic Info: 9402988734</p>
          <p>For Admission Enquiry: 9402988735</p>
          <p>For Fees Enquiry: 9402988736</p>
          <p>Email: sspunglwa@sainikschoolsociety.in</p>
        </div>
      </div>

      {/* Menu */}
      <div className="bg-orange-900 mt-4 sticky top-0 z-50 shadow-lg text-white">
        <div className="container mx-auto">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 py-2 text-sm md:text-base">
            <li className="group relative">
              <button className="hover:text-yellow-400">Home</button>
            </li>
            <li className="group relative">
              <button className="hover:text-yellow-400">About Us</button>
              {/* Dropdown */}
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-blue-700 text-white shadow-md">
                <ul className="space-y-1">
                  <li className="px-4 py-2 hover:bg-blue-600">Mission</li>
                  <li className="px-4 py-2 hover:bg-blue-600">Vision</li>
                  <li className="px-4 py-2 hover:bg-blue-600">History</li>
                </ul>
              </div>
            </li>
            <li className="group relative">
              <button className="hover:text-yellow-400">Staff</button>
            </li>
            <li className="group relative">
              <button className="hover:text-yellow-400">Cadet's Corner</button>
            </li>
            <li className="group relative">
              <button className="hover:text-yellow-400">Academics</button>
            </li>
            <li className="group relative">
              <button className="hover:text-yellow-400">Publications</button>
            </li>
            <li className="group relative">
              <button className="hover:text-yellow-400">Infrastructure</button>
            </li>
            <li className="group relative">
              <button className="hover:text-yellow-400">Photo Gallery</button>
            </li>
            <li className="group relative">
              <button className="hover:text-yellow-400">CBSE Oasis</button>
            </li>
            <li className="group relative">
              <button className="hover:text-yellow-400">Sainik Schools Society</button>
            </li>
            <li className="group relative">
              <button className="hover:text-yellow-400">Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
