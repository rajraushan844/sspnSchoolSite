import React from 'react';
import Navbar from './Header/Navbar';
import Footer from './Footer/Footer';

const CaseStudy = () => {
  return (
    <>
      <Navbar />
    <div className="min-h-screen flex flex-row p-8 sm:p-16 md:p-24 justify-center bg-white">
      {/* Themes: blue, purple, and teal */}
      <div data-theme="teal" className="mx-auto max-w-6xl">
        <h2 className="sr-only">Featured case study</h2>
        <section className="font-sans text-black">
          <div className="lg:flex lg:items-center fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right">
            <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
              <div className="h-full">
                <article className="h-full">
                  <div className="h-full">
                    <img
                      className="h-full object-cover"
                      src="https://sainikschoolpunglwa.nic.in/images/princ.jpg"
                      width="733"
                      height="412"
                      alt="Img"
                    />
                  </div>
                </article>
              </div>
            </div>
            <div className="p-6 bg-grey">
              <div className="leading-relaxed">
                <h2 className="leading-tight text-4xl font-bold">
                Principal's Message
                </h2>
                <p className="mt-4">
                  "We learn, we serve." The motto itself says for Sainik School Punglwa, the 'Pride of Nagaland'. I find myself blessed to get the opportunity to serve as the ninth principal of this school and prepare the school cadets to become military leaders of tomorrow. As this school is really making a difference in people's lives all over Nagaland, our goal is to build a sense of community and trust between cadets, parents, and staff.
                </p>
                <p className="mt-4">
                    The school is located in the lush green valley of Punglwa, and cadets learn to be sensitive and appreciate the needs and beauty of nature and contribute towards a clean and healthy environment. The objective of this school is to impart academic training of the highest quality, enable cadets to achieve requisite physical and mental endurance standards, proficiency in team games, and develop moral values and principles keeping pace with the advancement in technology and globalization.
                  </p>
                  <p className="mt-4">
                      Challenges in the future are immense. The ultimate role of the school will be to motivate and empower its cadets to be lifelong learners, critical thinkers, and productive members of an ever-challenging global society.
                    </p>
                    <p className="mt-4">
                      I would also like to say that teachers have an influencing role in the student's life. They mold us and, in the process, shape our future. What we learn from our teachers remains with us throughout our lives. Teachers do need encouragement and support from the community to feel that their efforts are being recognized. We acknowledge their efforts and join hands with them to continue with the efforts to take our school to greater heights.
                    </p>
                    <p className="mt-4">
                      I assure you that the team SSPN will continue this journey on the road to excellence as we stand committed to ensuring the development of each cadet as a good human being and a better citizen dedicated to the nation.
                    </p>
                    <p className="mt-4">Jai Sainik School Punglwa. Jai Hind.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default CaseStudy;
