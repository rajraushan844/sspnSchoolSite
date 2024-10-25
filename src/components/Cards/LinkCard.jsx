// CardGrid.js
import React from 'react';
const CardGrid = () => {
    const cards = [
      {
        image: 'https://dhurina.net/en/wp-content/uploads/2024/07/desktop-wallpaper-upsc-logo-upsc.jpg',
        title: 'Visit UPSC!',
        link: 'https://upsc.gov.in/',
      },
      {
        image: 'https://nanbanjobs.com/wp-content/uploads/2024/01/National-Defence-Academy.jpeg', // Replace with actual NDA image
        title: 'Visit NDA!',
        link: 'https://nda.nic.in/',
      },
      {
        image: 'https://www.naukariexam.in/wp-content/uploads/2024/01/Indian-Naval-Academy-INA-Examination.jpg',
        title: 'Visit INA!',
        link: 'https://www.joinindiannavy.gov.in/en/about-us/training-centers.html',
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyyCSaoX601vTjynOhh1NSdcRdL8HgxSaEdQ&s', // Replace with actual image
        title: 'Visit Pariksha Pe Charcha 2024!',
        link: 'https://innovateindia.mygov.in/hi/ppc-2024/',
      },
      {
        image: 'https://tourism.nagaland.gov.in/wp-content/uploads/2020/07/tourism-logo.jpg', // Replace with actual image
        title: 'Visit Nagaland Tourism!',
        link: 'https://tourism.nagaland.gov.in/',
      },


    ];
  
const Card = ({ image, title, link }) => {
  return (
    <div className="relative group w-48 h-40 bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
      />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50"
      >
        <h2 className="text-lg font-bold text-center">{title}</h2>
      </a>
    </div>
  );
};


  return (
    <div className="w-full mx-auto mt-10 grid max-w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:justify-evenly">
        
      {cards.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} link={card.link} />
      ))}
    </div>
  );
};

export default CardGrid;
