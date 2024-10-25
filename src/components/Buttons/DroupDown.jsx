import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ label, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId = null;

  // Function to open the dropdown immediately
  const openDropdown = () => {
    // Clear any existing timeouts to prevent closing while opening
    if (timeoutId) clearTimeout(timeoutId);
    setIsOpen(true);
  };

  // Function to close the dropdown with a delay
  const closeDropdown = () => {
    // Set a delay of 1 second (1000ms) before closing
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative z-50"
      onMouseEnter={openDropdown} // Open dropdown when mouse enters
      onMouseLeave={closeDropdown} // Close dropdown with delay when mouse leaves
    >
      {/* Dropdown label button */}
      <button
        className="block py-2 z-50 pr-4 pl-3 text-white hover:text-yellow-400 lg:hover:bg-transparent lg:border-0 lg:p-0 duration-200"
      >
        {label}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 bg-yellow-400 text-white shadow-md z-20">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  className="block px-4 py-2 hover:bg-yellow-600 text-red-600"
                  onClick={() => !isOpen && setIsOpen(false)} // Close dropdown immediately when item clicked
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;