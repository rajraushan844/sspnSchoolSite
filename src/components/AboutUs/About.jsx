import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumb";
import Title from "../Cards/Title";

export default function About() {
  const breadcrumbs = [
    { label: "Home", href: "/", isCurrent: false },
    { label: "About", href: "/about", isCurrent: true },
  ];

  return (
    <div className="w-full bg-gray-100">
      <Breadcrumbs
        breadcrumbs={breadcrumbs}
        backgroundImage="https://sainikschoolpunglwa.nic.in/images/princ.jpg"
      />

      <div className="min-h-screen flex flex-col p-6 sm:p-8 bg-gray-100 mx-auto">
        
        {/* Title and Image Section */}
        <div className=" text-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-10 space-y-4 sm:space-y-6 transition-transform duration-300 hover:bg-orange-100 hover:shadow-2xl">
          <Title title="About Sainik School Punglwa" />
          <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://sainikschoolpunglwa.nic.in/images/EAST%20ZONE%20CHAMPIONSHIP%202023%20copy.jpg"
              alt="Sainik School Punglwa Event"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Text Section */}
        <div className="bg-white mt-8 p-4 sm:p-6 lg:p-10 rounded-lg shadow-lg text-gray-800">
          <blockquote className="text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Sainik School Punglwa is a prestigious residential school established in 2007 by the Ministry of Defence, Government of India, with the primary aim of preparing young boys for entry into the National Defence Academy (NDA), Indian Naval Academy (INA), and other elite military institutions. Situated amidst the serene hills of Punglwa in the Peren district of Nagaland, the school offers a disciplined and comprehensive education system that blends academics, physical fitness, and personality development.
            </p>
            <p>
              Our mission is to develop responsible and patriotic citizens who can serve the nation with dedication and integrity, both in military and civilian roles. The school follows the Central Board of Secondary Education (CBSE) curriculum, focusing on a well-rounded education that emphasizes academic excellence, leadership qualities, physical fitness, and moral values.
            </p>
            <p><strong>Key Features:</strong></p>
            <ul className="space-y-2">
              <li><strong>Holistic Education:</strong> A balanced curriculum integrating academics with co-curricular and extra-curricular activities such as sports, leadership camps, and cultural events.</li>
              <li><strong>Military Training:</strong> Cadets receive preliminary military training, including drills, shooting, obstacle courses, and other physical endurance exercises to prepare them for a career in the armed forces.</li>
              <li><strong>State-of-the-Art Facilities:</strong> Modern infrastructure, including fully-equipped classrooms, a well-stocked library, science and computer labs, and specialized sports facilities.</li>
              <li><strong>Dedicated Faculty:</strong> Highly qualified and experienced teachers guide students in academics and other spheres of development, with regular workshops, seminars, and interactions with defense personnel.</li>
              <li><strong>Discipline & Values:</strong> Emphasis on discipline, character-building, and leadership, preparing students to live with integrity and responsibility.</li>
              <li><strong>Scholarships & Support:</strong> Various scholarship schemes ensure that talent, not financial background, is the deciding factor for those aspiring to serve the nation.</li>
            </ul>
            <p>
              Sainik School Punglwa is not just an educational institution; it is a stepping stone for young minds with the dream of serving their motherland, instilling in them the values of duty, honor, and courage.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
