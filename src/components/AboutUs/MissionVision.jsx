import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumb";
import Title from "../Cards/Title";

const SchoolInfo = () => {
  const breadcrumbs = [
    { label: "Home", href: "/", isCurrent: false },
    { label: "About", href: "/about", isCurrent: false },
    {
      label: "Mission & Vision",
      href: "/about/mission-vision",
      isCurrent: true,
    },
  ];
  return (
    <>
      <Breadcrumbs
        breadcrumbs={breadcrumbs}
        backgroundImage="https://sainikschoolpunglwa.nic.in/images/princ.jpg"
      />
      <section className="min-h-screen text-white flex flex-col lg:flex-col bg-gray-100 m-4 lg:mt-2 mb-20 p-8 rounded-lg shadow-lg">
        <Title title="Mission & Vision" />
        {/* Mission Section */}
        <div className="bg-orange-800 text-white flex flex-col lg:flex-row items-center justify-center m-4 lg:m-4 p-4 rounded-lg shadow-lg">
          {/* Image Section */}
          <div className="lg:w-2/3 w-full mb-6 lg:mb-0 transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://sainikschoolpunglwa.nic.in/images/EAST%20ZONE%20CHAMPIONSHIP%202023%20copy.jpg"
              alt="Person"
              className="rounded-lg shadow-lg w-full h-auto object-cover lg:relative lg:-mt-24 lg:-mb-24"
            />
          </div>

          {/* Text Section */}
          <div className="bg-orange-800 text-white flex flex-col items-center justify-center p-6 lg:p-10 rounded-lg shadow-lg lg:w-1/2 w-full lg:pl-10 transition-transform duration-300 hover:bg-orange-900 hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Mission</h2>
            <blockquote className="text-xl font-light leading-relaxed mb-4 shadow-sm">
              Our mission at Sainik School Punglwa is to nurture young minds
              with a robust blend of academic excellence, military training, and
              character development, preparing them to serve the nation with
              distinction. We aim to develop disciplined, confident, and
              well-rounded individuals who are equipped to face challenges,
              demonstrate leadership, and uphold the highest values of
              integrity, patriotism, and dedication in both military and
              civilian roles. Through a comprehensive educational environment,
              we strive to enable our cadets to qualify for the National Defence
              Academy (NDA) and other premier defense institutions.
            </blockquote>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-orange-800 text-white flex flex-col lg:flex-row items-center justify-center m-8 lg:m-20 p-8 rounded-lg shadow-lg">
          {/* Text Section */}
          <div className="bg-orange-800 text-white flex flex-col items-center justify-center p-6 lg:p-10 rounded-lg shadow-lg lg:w-1/2 w-full lg:pl-10 transition-transform duration-300 hover:bg-orange-900 hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Vision</h2>
            <blockquote className="text-xl font-light leading-relaxed mb-4 shadow-sm">
              Our vision is to become a leading institution in producing future
              leaders for the Indian Armed Forces and the nation. We envision a
              school where students are inspired to achieve their full potential
              through holistic education, instilled with strong moral values,
              unwavering discipline, and an unshakable commitment to serve the
              country. Sainik School Punglwa aspires to cultivate responsible,
              ethical, and capable citizens who can contribute to national
              security and nation-building with honor and excellence.
            </blockquote>
          </div>

          {/* Image Section */}
          <div className="lg:w-2/3 w-full mb-6 lg:mb-0 transform transition-transform duration-300 hover:scale-105">
            <img
              src="https://sainikschoolpunglwa.nic.in/images/EAST%20ZONE%20CHAMPIONSHIP%202023%20copy.jpg"
              alt="Person"
              className="rounded-lg shadow-lg w-full h-auto object-cover lg:relative lg:-mt-24 lg:-mb-24"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SchoolInfo;
