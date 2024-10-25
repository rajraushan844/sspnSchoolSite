import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumb"; // Adjust the path as necessary
import Card from "../Cards/StaffCards"; // Import the Card component
import Title from "../Cards/Title";

// CardGrid Component
const Admin = () => {
  const breadcrumbs = [
    { label: "Home", href: "/", isCurrent: false },
    { label: "Staff", href: "/staff", isCurrent: false },
    { label: "Administrative Staff", href: "/staff/admin", isCurrent: true },
  ];

  const cards = [
    {
      id: 1,
      name: "Col Arvind Nautiyal",
      designation: "Principal",
      education: "Sainik School Punglwa",
      image: "https://plus.unsplash.com/premium_photo-1682089789852-e3023ff6df24?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Col Arvind Nautiyal",
      designation: "Principal",
      education: "Sainik School Punglwa",
      image: "https://plus.unsplash.com/premium_photo-1682089789852-e3023ff6df24?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Col Arvind Nautiyal",
      designation: "Principal",
      education: "Sainik School Punglwa",
      image: "https://plus.unsplash.com/premium_photo-1682089789852-e3023ff6df24?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Col Arvind Nautiyal",
      designation: "Principal",
      education: "Sainik School Punglwa",
      image: "https://plus.unsplash.com/premium_photo-1682089789852-e3023ff6df24?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      name: "Col Arvind Nautiyal",
      designation: "Principal",
      education: "Sainik School Punglwa",
      image: "https://plus.unsplash.com/premium_photo-1682089789852-e3023ff6df24?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      name: "Col Arvind Nautiyal",
      designation: "Principal",
      education: "Sainik School Punglwa",
      image: "https://plus.unsplash.com/premium_photo-1682089789852-e3023ff6df24?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 7,
      name: "Col Arvind Nautiyal",
      designation: "Principal",
      education: "Sainik School Punglwa",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyyCSaoX601vTjynOhh1NSdcRdL8HgxSaEdQ&s",
    },
    {
      id: 8,
      name: "Col Arvind Nautiyal",
      designation: "Principal",
      education: "Sainik School Punglwa",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyyCSaoX601vTjynOhh1NSdcRdL8HgxSaEdQ&s",
    },
  ];

  return (
    <>
      <Breadcrumbs
        breadcrumbs={breadcrumbs}
        backgroundImage="https://sainikschoolpunglwa.nic.in/images/princ.jpg"
      />
      <div className="w-full bg-gray-100">
        
    
      <div className="w-full justify-center items-center p-10 mb-20 bg-gray-100">
      <Title title="Administrative Staff" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-white w-[100%] justify-items-center">
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
      </div>
      </div>

    </>
  );
};

export default Admin;
