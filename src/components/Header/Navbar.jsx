import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DropdownButton from '../Buttons/DroupDown';


function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-orange-600 to-gray-600 py-4 text-white z-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Logo and Text */}
        <div className="flex items-center space-x-4">
          
          <img
            src="Sainik-School-Punglwa-removebg-preview.png"
            alt="School Logo"
            className="h-[7rem] w-[7rem] p-2 shadow-white filter drop-shadow-lg"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-4xl sm:text-2xl font-bold drop-shadow-xl">
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
            className="h-[7rem] w-[7rem] p-2 filter drop-shadow-lg"
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


      {/* Hamburger Menu Button for Small Screens */}
      <div className="flex justify-end md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none p-2 z-80"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>


      {/* Menu */}
      <div className={`bg-orange-900 mt-4 shadow-lg text-white ${isMenuOpen ? "block" : "hidden"} md:block`}>
        <div className="container mx-auto">
          <ul className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-6 py-2 text-sm md:text-base">
            <li className="group relative">
              <NavLink to="/" className={({ isActive }) => `block py-2 pr-4 pl-3 z-10 duration-200 ${isActive ? "text-yellow-400" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`}>
                Home
              </NavLink>
            </li>
            <li className="group relative">
            <NavLink to="/about" className={({ isActive }) => `block py-2 pr-4 pl-3 z-10 duration-200 ${isActive ? "text-yellow-400" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`}>
            <DropdownButton
            label="About Us"
            menuItems={[
              { label: "Mission & Vision", path: "/about/Mission-Vision" },
              { label: "School Motto & Song", path: "/about/Mission-Vision" },
              { label: "LBA", path: "/about/lba" },
              { label: "History", path: "/about/History" },
              { label: "Former Principles", path: "/about/former-ppl" },
            ]}
          />
            </NavLink>
            </li>

          
            <li className="group relative">
            <NavLink to="" className={({ isActive }) => `block py-2 pr-4 pl-3 z-10 duration-200 ${isActive ? "text-yellow-400" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`}>
              <DropdownButton
                label="Staff"
                menuItems={[
                    { label: "Officer", path: "/staff/officer" },
                    { label: "Academic Staff", path: "/staff/teachers" },
                    { label: "Administrative Staff", path: "staff/admin" },
                    { label: "NCC & PTI Staff", path: "staff/ncc-pti" },
                    { label: "General Staff", path: "/staff/generalstaff" },
                    { label: "Women Cell", path: "/staff/womencell" },
                ]}
              />
            </NavLink>
            </li>

            <li className="group relative">
            <NavLink to="" className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-400" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`}>
            <DropdownButton
                label="Cadet's Corner"
                menuItems={[
                    { label: "Defence Alumni", path: "/officer" },
                    { label: "School Alumni Form", path: "/cadet-corner/alumniform" },
                    
                ]}
              />
            </NavLink>
            </li>

            <li className="group relative">
              <NavLink to="/academic" className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-400" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`}>
                Academics
              </NavLink>
            </li>

            <li className="group relative">
              <NavLink to="" className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-400" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`}>
              <DropdownButton
                label="Publications"
                menuItems={[
                    { label: "Annual Magazine", path: "/publications/anualmagzine" },
                    { label: "Cadet's Magazine", path: "/publications/cadetsmagzine" },
                    { label: "School Clander", path: "/publications/schoolcalendar" },
                ]}
              />
              </NavLink>
            </li>

            <li className="group relative">
              <NavLink to="/Infrastructure" className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-400" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`}>
              <DropdownButton
                label="Infrastructure"
                menuItems={[
                    { label: "Hostel", path: "/officer" },
                    { label: "Academic", path: "/Sports" },
                    { label: "Auditorium", path: "/Admin" },
                    { label: "Library", path: "/Admin" },
                    { label: "Sports", path: "/Sports" },
                    { label: "Shoping Complex", path: "/Admin" },
                ]}
              />
              </NavLink>
            </li>

            <li className="group relative">
              <NavLink to="/PhotoGallery" className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-400" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`}>
              <DropdownButton
                label="Photo Gallery"
                menuItems={[
                    { label: "VIP Visits", path: "/officer" },
                    { label: "Alumni Visits", path: "/teachers" },
                    { label: "School Events", path: "/Admin" },
                    { label: "Cocurricular Activities", path: "/Admin" },
                    { label: "Founder's Day", path: "/Admin" },
                    { label: "Sports", path: "/Sports" },
                    { label: "Motivational Tour", path: "/Sports" },
                    { label: "East Zone", path: "/Admin" },
                    { label: "Publicity Media", path: "/Admin" },
                ]}
              />
              </NavLink>
            </li>

            <li className="group relative">
              <NavLink to="/" className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-400" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`}>
              CBSE Oasis
              </NavLink>
            </li>


            <li className="group relative">
              <NavLink to="https://sainikschoolsociety.in/" 
              rel="noopener noreferrer" 
              target="_blank" className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-400" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`}>
                Sainik Schools Society
              </NavLink>
            </li>

            <li className="group relative">
              <NavLink to="/Contact" className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-yellow-400" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-yellow-400 lg:p-0`}>
              Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

}

export default Navbar;
