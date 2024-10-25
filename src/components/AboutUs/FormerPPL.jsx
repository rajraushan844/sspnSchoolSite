import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumb";
import Title from "../Cards/Title";
import Card from "../Cards/StaffCards"; // Import the Card component
import ppl1 from "../../assets/formerPrincipal/ppl1.jpg";
import ppl2 from "../../assets/formerPrincipal/ppl2.jpg";
import ppl3 from "../../assets/formerPrincipal/ppl3.jpg";
import ppl4 from "../../assets/formerPrincipal/ppl4.jpg";
import ppl5 from "../../assets/formerPrincipal/ppl5.jpg";
import ppl6 from "../../assets/formerPrincipal/ppl6.jpg";
import ppl7 from "../../assets/formerPrincipal/ppl7.jpg";
import ppl8 from "../../assets/formerPrincipal/ppl8.jpg";


const FormerPPL = () => {
  const cards = [
    {
      id: 1,
      name: "Col BS Rathore",
      designation: "Principal of Sainik School Punglwa",
      education: "20 Nov 2006 - 24 Apr 2008",
      image:ppl1,
    },
    {
      id: 2,
      name: "Gp Capt B Janardhanan",
      designation: "Principal of Sainik School Punglwa",
      education: "25 Apr 2008 - 11 Nov 2010",
      image:ppl2
    },
    {
      id: 3,
      name: "Col R Alagarraj",
      designation: "Principal of Sainik School Punglwa",
      education: "11 Dec 2010 - 18 Oct 2013",
      image:ppl3
    },
    {
      id: 4,
      name: "Capt(IN) Kanchan Mukharjee",
      designation: "Principal of Sainik School Punglwa",
      education: "28 Jul 2014 - 07 Jun 2015",
      image:ppl4
   },
    {
      id: 5,
      name: "Gp Capt Sanjay Gaekwad",
      designation: "Principal of Sainik School Punglwa",
      education: "08 Jun 2015 - 23 Nov 2017",
      image:ppl5
     },
    {
      id: 6,
      name: "Gp Capt Sharad R Keskar",
      designation: "Principal of Sainik School Punglwa",
      education: "24 Nov 2017 - 17 May 2019",
      image:ppl6
    },
    {
      id: 7,
      name: "Gp Capt Prasun Basu",
      designation: "Principal of Sainik School Punglwa",
      education: "03 Jul 2019 - 24 Sep 2021",
      image:ppl7
    },
    {
      id: 8,
      name: "Gp Capt RK Yadav",
      designation: "Principal of Sainik School Punglwa",
      education: "14 Sep 2021 - 20 Jul 2023",
      image:ppl8
    },
  ];

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Home", href: "/", isCurrent: false },
          { label: "About", href: "/about", isCurrent: false },
          { label: "Former Principals", href: "/about/former-ppl", isCurrent: true },
        ]}
        backgroundImage="https://sainikschoolpunglwa.nic.in/images/princ.jpg"
      />

      <div className="w-full justify-center items-center p-10 mb-4 bg-gray-100">
        <Title title="Former Principals" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-white w-[100%] h[100%] justify-items-center lg:p-20 items-center sm:mb-20 bg-cover">
        {cards.map((card) => {
          const { id, image, name, education, designation } = card;
          return (
            <Card
              key={id}
              image={image}
              name={name}
              education={education}
              designation={designation}
            />
          );
        })}
      </div>
    </>
  );
};

export default FormerPPL;
