import React, { useState } from 'react';
import { NavLink,  useLocation, useNavigate } from "react-router-dom";

const Pdesk = () => {
  
  const navigate = useNavigate(); 
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (location.pathname === "/" || location.pathname === "") {
      navigate("/officer");
      
    } else if (location.pathname === "/officer") {
      {
        setIsExpanded(!isExpanded);
      }
    }
    // Add more routes as needed
  };

 

  const message = `We learn, we serve, The motto itself says for Sainik School Punglwa, the 'Pride of Nagaland'. I find myself blessed to get the opportunity to serve as the ninth principal of this school and prepare the school cadets to become military leaders of tomorrow. As this school is really making a difference in people's lives all over Nagaland, our goal is to build a sense of community and trust between cadets, parents & staff.
    The school is located in the lush green valley of Punglwa and cadets learn to be sensitive & appreciate the needs and beauty of nature and contribute towards a clean and healthy environment. The objective of this school is to impart academic training of the highest quality, enable cadets to achieve requisite physical and mental endurance standards, proficiency in team games, and to develop moral values and principles keeping pace with the advancement in technology and globalization.
    Challenges in the future are immense. The ultimate role of the school will be to motivate and empower its cadets to be life-long learners, critical thinkers, and productive members of an ever-challenging global society.
    I would also like to say that teachers have an influencing role in the students' lives. They mould us and, in the process, shape our future. What we learn from our teachers remains with us throughout our lives. Teachers do need encouragement and support from the community to feel that their efforts are being recognized. We acknowledge their efforts and join hands with them to continue with the efforts to take our school to greater heights.
    I assure you that team SSPN will continue this journey on the road to excellence as we stand committed to ensuring the development of each cadet as a good human being and better citizen dedicated to the nation.
Jai Sainik School Punglwa
Jai Hind`;

  const substring = isExpanded ? message : `${message.substring(0, 200)}...`;

  return (
    <div className="flex flex-col w-full items-center p-4 m-8 mt-4 sm:p-16 md:p-24 bg-gray-50">
      {/* Dynamic layout based on isExpanded */}
      <div
        className={`flex flex-col ${
          isExpanded ? 'md:flex-col' : 'md:flex-row'
        } max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden`}
      >
        {/* Image section */}
        <div
          className={`w-full ${isExpanded ? 'md:w-full' : 'md:w-1/2'} flex justify-center items-center bg-gray-200 p-4`}
        >
          <img
            className="object-cover rounded-lg"
            src="https://sainikschoolpunglwa.nic.in/images/princ.jpg"
            alt="Principal"
            width="733"
            height="412"
          />
        </div>

        {/* Message section */}
        <div className={`w-full ${isExpanded ? 'md:w-full' : 'md:w-1/2'} p-6 flex flex-col justify-between`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Principal's Message</h2>
          
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            {substring}
          </p>

          {/* Toggle button */}
          <div className="mt-4">
            <button
              onClick={handleClick}
              className="bg-teal-600 hover:bg-teal-500 text-white text-lg font-semibold px-4 py-2 rounded-lg transition-all duration-300"
            >
              {isExpanded ? 'See Less' : 'See More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdesk;
