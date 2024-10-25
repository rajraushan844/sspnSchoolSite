import React from "react";
import { NavLink } from "react-router-dom";

const Breadcrumbs = ({ breadcrumbs, backgroundImage }) => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat bg-blend-overlay"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Background overlay filter */}
      <div className="absolute inset-0 bg-black bg-opacity-40 filter backdrop-blur-sm"></div>

      {/* Breadcrumbs content */}
      <nav className="relative p-12 h-full">
        <ol className="list-reset flex text-white">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index} className="flex items-center">
              {/* Check if it's the last breadcrumb to avoid wrapping in a link */}
              {breadcrumb.isCurrent ? (
                <span className="text-white">{breadcrumb.label}</span>
              ) : (
                <>
                  <NavLink
                    to={breadcrumb.href}
                    className="text-gray-300 hover:text-white"
                  >
                    {breadcrumb.label}
                  </NavLink>
                  <span className="mx-2 text-gray-300">/</span>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
