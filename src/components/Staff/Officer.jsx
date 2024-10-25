import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumb";
import bgimage from "../../assets/bgarmy.jpg";
import Title from "../Cards/Title";

const Officers = [
  {
    id: 1,
    src: "https://sainikschoolpunglwa.nic.in/images/princ.jpg",
    alt: "Officer 1",
    name: "Col Arvind Nautiyal",
    post: "Principal",
    message: `We learn, we serve, The motto itself says for Sainik School Punglwa, the 'Pride of Nagaland'. I find myself blessed to get the opportunity to serve as the ninth principal of this school and prepare the school cadets to become military leaders of tomorrow. As this school is really making a difference in people's lives all over Nagaland, our goal is to build a sense of community and trust between cadets, parents & staff.
                The school is located in the lush green valley of Punglwa and cadets learn to be sensitive & appreciate the needs and beauty of nature and contribute towards a clean and healthy environment. The objective of this school is to impart academic training of the highest quality, enable cadets to achieve requisite physical and mental endurance standards, proficiency in team games, and to develop moral values and principles keeping pace with the advancement in technology and globalization.
                Challenges in the future are immense. The ultimate role of the school will be to motivate and empower its cadets to be life-long learners, critical thinkers, and productive members of an ever-challenging global society.
                I would also like to say that teachers have an influencing role in the students' lives. They mould us and, in the process, shape our future. What we learn from our teachers remains with us throughout our lives. Teachers do need encouragement and support from the community to feel that their efforts are being recognized. We acknowledge their efforts and join hands with them to continue with the efforts to take our school to greater heights.
                I assure you that team SSPN will continue this journey on the road to excellence as we stand committed to ensuring the development of each cadet as a good human being and better citizen dedicated to the nation.
            Jai Sainik School Punglwa
            Jai Hind`,
  },
  {
    id: 2,
    src: "https://sainikschoolpunglwa.nic.in/images/princ.jpg",
    alt: "Officer 2",
    name: "Lt Col Amit Choudhary",
    post: "Vice Principal",
    message: `We learn, we serve, The motto itself says for Sainik School Punglwa, the 'Pride of Nagaland'. I find myself blessed to get the opportunity to serve as the ninth principal of this school and prepare the school cadets to become military leaders of tomorrow. As this school is really making a difference in people's lives all over Nagaland, our goal is to build a sense of community and trust between cadets, parents & staff.
    The school is located in the lush green valley of Punglwa and cadets learn to be sensitive & appreciate the needs and beauty of nature and contribute towards a clean and healthy environment. The objective of this school is to impart academic training of the highest quality, enable cadets to achieve requisite physical and mental endurance standards, proficiency in team games, and to develop moral values and principles keeping pace with the advancement in technology and globalization.
    Challenges in the future are immense. The ultimate role of the school will be to motivate and empower its cadets to be life-long learners, critical thinkers, and productive members of an ever-challenging global society.
    I would also like to say that teachers have an influencing role in the students' lives. They mould us and, in the process, shape our future. What we learn from our teachers remains with us throughout our lives. Teachers do need encouragement and support from the community to feel that their efforts are being recognized. We acknowledge their efforts and join hands with them to continue with the efforts to take our school to greater heights.
    I assure you that team SSPN will continue this journey on the road to excellence as we stand committed to ensuring the development of each cadet as a good human being and better citizen dedicated to the nation.
Jai Sainik School Punglwa
Jai Hind`,
  },
  {
    id: 3,
    src: "https://sainikschoolpunglwa.nic.in/images/princ.jpg",
    alt: "Administrative Officer",
    name: "Lt Col Sudhir Kumar",
    post: "Administrative Officer",
    message: `We learn, we serve, The motto itself says for Sainik School Punglwa, the 'Pride of Nagaland'. I find myself blessed to get the opportunity to serve as the ninth principal of this school and prepare the school cadets to become military leaders of tomorrow. As this school is really making a difference in people's lives all over Nagaland, our goal is to build a sense of community and trust between cadets, parents & staff.
    The school is located in the lush green valley of Punglwa and cadets learn to be sensitive & appreciate the needs and beauty of nature and contribute towards a clean and healthy environment. The objective of this school is to impart academic training of the highest quality, enable cadets to achieve requisite physical and mental endurance standards, proficiency in team games, and to develop moral values and principles keeping pace with the advancement in technology and globalization.
    Challenges in the future are immense. The ultimate role of the school will be to motivate and empower its cadets to be life-long learners, critical thinkers, and productive members of an ever-challenging global society.
    I would also like to say that teachers have an influencing role in the students' lives. They mould us and, in the process, shape our future. What we learn from our teachers remains with us throughout our lives. Teachers do need encouragement and support from the community to feel that their efforts are being recognized. We acknowledge their efforts and join hands with them to continue with the efforts to take our school to greater heights.
    I assure you that team SSPN will continue this journey on the road to excellence as we stand committed to ensuring the development of each cadet as a good human being and better citizen dedicated to the nation.
Jai Sainik School Punglwa
Jai Hind`,
  },
  // Add more cadets as needed
];

const Officer = () => {
  const [expandedOfficer, setExpandedOfficer] = useState(null);

  const breadcrumbs = [
    { label: "Home", href: "/", isCurrent: false },
    { label: "Staff", href: "/staff", isCurrent: false },
    { label: "Officers", href: "/staff/officer", isCurrent: true },
  ];

  const toggleExpand = (id) => {
    setExpandedOfficer(expandedOfficer === id ? null : id);
  };

  return (
    <>
    <Breadcrumbs 
        breadcrumbs={breadcrumbs} 
        backgroundImage="https://sainikschoolpunglwa.nic.in/images/princ.jpg"
      />
    
    <div style={{backgroundImage: `url(${bgimage})`}} className="flex flex-col w-full items-center sm:p-16 md:p-8 bg-black bg-opacity-50">
    <Title title="Officers" />
      {Officers.map((officer, index) => {
        const isExpanded = expandedOfficer === officer.id;
        const imagePositionClass = index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse";
        const displayedMessage = isExpanded ? officer.message : `${officer.message.substring(0, 200)}...`;

        return (
          <>
        
          <div key={officer.id} className="w-full max-w-6xl mb-8">
            <div
              className={`flex flex-col ${isExpanded ? "md:flex-col" : imagePositionClass} bg-white mb-20 rounded-lg shadow-lg overflow-hidden`}
            >
              {/* Image section */}
              <div
                className={`w-full ${isExpanded ? "md:w-full" : "md:w-1/2"} flex justify-center items-center bg-gray-200 p-4`}
              >
                <img
                  className="object-cover rounded-lg"
                  src={officer.src}
                  alt={officer.alt}
                  width="733"
                  height="412"
                />
              </div>

              {/* Message section */}
              <div className={`w-full ${isExpanded ? "md:w-full" : "md:w-1/2"} p-6 flex flex-col justify-between`}>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{officer.post}</h2>
                <h3 className="text-xl font-semibold text-gray-600 mb-4">{officer.name}</h3>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">{displayedMessage}</p>

                {/* Toggle button */}
                <div className="mt-4">
                  <button
                    onClick={() => toggleExpand(officer.id)}
                    className="bg-teal-600 hover:bg-teal-500 text-white text-lg font-semibold px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          </>
        );
      })}
    </div>
    </>
  );
};

export default Officer;
