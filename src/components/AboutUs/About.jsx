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
      <div className="min-h-screen text-white flex flex-col lg:flex-col bg-gray-100 m-8 lg:mt-2 mb-20 p-8 rounded-lg shadow-lg">
        {/* Image Section */}
        <Title title="About Sainik School Punglwa" />
        {/* Text Section */}
        <div className="bg-gradient-to-tr from-orange-600 to-gray-600 text-white flex mt-4 flex-col items-center justify-center p-6 lg:p-10 rounded-lg shadow-lg w-full lg:pl-10 transition-transform duration-300 hover:bg-orange-900 hover:shadow-2xl">
          <div className="w-full mx-auto mb-6 lg:mb-4 transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://sainikschoolpunglwa.nic.in/images/EAST%20ZONE%20CHAMPIONSHIP%202023%20copy.jpg"
              alt="Sainik School Punglwa Event"
              className="rounded-lg shadow-lg w-full h-auto object-cover lg:relative lg:mt-4"
            />
          </div>

          <blockquote className="text-xl font-light leading-relaxed mb-4 shadow-sm">
            Sainik School Punglwa is a prestigious residential school
            established in 2007 by the Ministry of Defence, Government of India,
            with the primary aim of preparing young boys for entry into the
            National Defence Academy (NDA), Indian Naval Academy (INA), and
            other elite military institutions. Situated amidst the serene hills
            of Punglwa in the Peren district of Nagaland, the school offers a
            disciplined and comprehensive education system that blends
            academics, physical fitness, and personality development.
            <br />
         
            Our mission is to develop responsible and patriotic citizens who can
            serve the nation with dedication and integrity, both in military and
            civilian roles. The school follows the Central Board of Secondary
            Education (CBSE) curriculum, focusing on a well-rounded education
            that emphasizes academic excellence, leadership qualities, physical
            fitness, and moral values.
            <br />
            
            <strong>Key Features:</strong>
            <br />
         
            <strong>Holistic Education:</strong> Sainik School Punglwa provides
            a balanced curriculum, integrating academics with co-curricular and
            extra-curricular activities such as sports, leadership camps, and
            cultural events.
            <br />
           
            <strong>Military Training:</strong> Cadets receive preliminary
            military training, including drills, shooting, obstacle courses, and
            other physical endurance exercises to prepare them for a career in
            the armed forces.
            <br />
         
            <strong>State-of-the-Art Facilities:</strong> The school offers
            modern infrastructure, including fully-equipped classrooms, a
            well-stocked library, science and computer labs, and specialized
            sports facilities for games like football, basketball, athletics,
            and more.
            <br />
         
            <strong>Dedicated Faculty:</strong> The school boasts a team of
            highly qualified and experienced teachers who guide students in
            academics and other spheres of development. Regular workshops,
            seminars, and interactions with defense personnel enhance the
            students' understanding of military and defense-related careers.
            <br />
          
            <strong>Discipline & Values:</strong> A strong emphasis on
            discipline, character-building, and leadership sets Sainik School
            Punglwa apart. Students are trained to live with integrity,
            responsibility, and a spirit of service.
            <br />
         
            <strong>Scholarships & Support:</strong> Various scholarship schemes
            are available to help students from different backgrounds. The
            school ensures that talent, not financial background, is the
            deciding factor for those aspiring to serve the nation.
            <br />
         
            Sainik School Punglwa is not just an educational institution; it is
            a stepping stone for young minds with the dream of serving their
            motherland, instilling in them the values of duty, honor, and
            courage.
          </blockquote>
        </div>
      </div>
      
    </div>
  );
}
