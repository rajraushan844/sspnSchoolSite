import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-70"
        style={{
          backgroundImage:
            "url('https://cf-img-a-in.tosshub.com/lingo/itne/images/story/202405/6643aa607362b-nagaland-141558844-16x9.png')", // replace with your image path
        }}
      ></div>

      {/* Overlay for text */}
      <div className="relative z-5 flex flex-col items-center justify-center h-full space-y-4">
        <h1 className="text-4xl mt-4 font-bold text-blue-800">Academia</h1>
        

        {/* Circle with 4 segments */}
        <div className="relative flex justify-center items-center h-full w-full">
          <div className="relative h-[30rem] w-[30rem] rounded-full bg-white shadow-xl overflow-hidden flex flex-wrap">
            {/* Segment 1 */}
             
            <div className="relative w-1/2 h-1/2 hover:bg-opacity-80 transition-all duration-300">
            
              <img
                src="https://sainikschoolpunglwa.nic.in/images/Sep28.jpg" // replace with your image path
                alt="Maritime 1"
                className="h-full w-full object-cover"
              />
              
              <NavLink to="/academic/houses" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl font-semibold">House</p>
                </NavLink>
            </div>
            

            {/* Segment 2 */}
            <div className="relative w-1/2 h-1/2 hover:bg-opacity-80 transition-all duration-300">
              <img
                src="https://morungexpress.com/uploads/2024/08/60587286_1724173071_Take_.jpg" // replace with your image path
                alt="Maritime 2"
                className="h-full w-full object-cover"
              />
              <NavLink to="/academic/club" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl font-semibold">Club</p>
              </NavLink>
            </div>

            {/* Segment 3 */}
            <div className="relative w-1/2 h-1/2 hover:bg-opacity-80 transition-all duration-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQDaQIR9BGTAnR0HtFRgmJI-ZdomORcDBRq-S3zYz7-Xh8ihfRrm4pvlPkjCyC9-uRzI&usqp=CAU" // replace with your image path
                alt="Maritime 3"
                className="h-full w-full object-cover"
              />
              <NavLink to="/academic/ncc" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl font-semibold">NCC</p>
              </NavLink>
            </div>

            {/* Segment 4 */}
            <div className="relative w-1/2 h-1/2 hover:bg-opacity-80 transition-all duration-300">
              <img
                src="https://pesancoggov.com/wp-content/uploads/2024/01/Sainik-School-Students-in-Band-Competition.webp" // replace with your image path
                alt="Maritime 4"
                className="h-full w-full object-cover"
              />
              <NavLink to="/academic/sports-activity" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl font-semibold">Sports</p>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
