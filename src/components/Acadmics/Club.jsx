import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumb";
import Title from "../Cards/Title";
import ContentWithTab from "../ContentWithTab";

const Club = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Academics", href: "/academic" },
        { label: "Club", href: "/academic/club", isCurrent: true },
    ];
  const tabData = [
    {
      value: "tab1",
      label: "Riding",
      heading: "Capt BS Rathore Riding Club",
      imageUrl:
      "https://sainikschoolpunglwa.nic.in/images/riding%20club.jpg",
      content: `The Horse Riding Club at Sainik School Punglwa is a prestigious extracurricular group that promotes equestrian skills and a love for horseback riding among students. The club provides training in various riding techniques, focusing on building confidence, discipline, and teamwork. Members participate in regular riding sessions, competitions, and events that showcase their skills and foster a sense of camaraderie.

The Horse Riding Club emphasizes the importance of responsibility and care for the horses, instilling values such as empathy and respect for animals. Through these activities, the club not only enhances students' physical fitness and coordination but also encourages a deeper connection with nature and the local culture of Nagaland. Overall, the Horse Riding Club plays a vital role in the holistic development of students, preparing them for challenges both in and out of the saddle.`,
      tabColors: {
        activeTabColor: "orange",
        inactiveTabColor: "black",
      },
      contentColors: {
        headingColor: "orange",
        textColor: "black",
        bgColor: "white",
      },
    },
    {
      value: "tab2",
      label: "Hindi",
      heading: "Hindi Literary Club",
      imageUrl:
        "https://sainikschoolpunglwa.nic.in/images/HINDICLUB.jpg",
      content: `Japfü Peak in Nagaland, India, is the second-highest peak in the state, standing at 3,015 meters (9,891 feet) and located near Kohima. This mountain is part of the Naga Hills and holds cultural importance for the local Angami Naga tribe. The Angami people traditionally build morungs, communal houses used for gatherings and cultural activities, and house names are often tied to clan heritage or inspired by nature and the land.

Though no famous house is specifically named on Japfü, many Angami houses carry names reflecting nature, ancestors, or local history. Japfü is also a popular trekking destination, surrounded by rich biodiversity, including the world’s tallest rhododendron tree. From its summit, visitors enjoy panoramic views of valleys, hills, and even distant Mount Saramati.

If you were naming a house on Japfü, names like "Japfü Heights" or "Rhododendron Haven" could be fitting, reflecting the mountain’s majestic presence and the region’s deep connection to nature and culture.`,
tabColors: {
    activeTabColor: "orange",
    inactiveTabColor: "black",
  },
  contentColors: {
    headingColor: "orange",
    textColor: "black",
    bgColor: "white",
  },
    },
    {
      value: "tab3",
      label: "Ramanujan",
      heading: "Ramanujan Club",
      imageUrl:
        "https://sainikschoolpunglwa.nic.in/images/MUSIC%20CLUB.jpg",
      content: `Japfü Peak in Nagaland, India, is the second-highest peak in the state, standing at 3,015 meters (9,891 feet) and located near Kohima. This mountain is part of the Naga Hills and holds cultural importance for the local Angami Naga tribe. The Angami people traditionally build morungs, communal houses used for gatherings and cultural activities, and house names are often tied to clan heritage or inspired by nature and the land.

Though no famous house is specifically named on Japfü, many Angami houses carry names reflecting nature, ancestors, or local history. Japfü is also a popular trekking destination, surrounded by rich biodiversity, including the world’s tallest rhododendron tree. From its summit, visitors enjoy panoramic views of valleys, hills, and even distant Mount Saramati.

If you were naming a house on Japfü, names like "Japfü Heights" or "Rhododendron Haven" could be fitting, reflecting the mountain’s majestic presence and the region’s deep connection to nature and culture.`,
tabColors: {
    activeTabColor: "orange",
    inactiveTabColor: "black",
  },
  contentColors: {
    headingColor: "orange",
    textColor: "black",
    bgColor: "white",
  },
    },
    {
      value: "tab4",
      label: "Rifle",
      heading: "Rifle Club",
      imageUrl:
        "https://sainikschoolpunglwa.nic.in/images/rifle.jpg",
      content: `Japfü Peak in Nagaland, India, is the second-highest peak in the state, standing at 3,015 meters (9,891 feet) and located near Kohima. This mountain is part of the Naga Hills and holds cultural importance for the local Angami Naga tribe. The Angami people traditionally build morungs, communal houses used for gatherings and cultural activities, and house names are often tied to clan heritage or inspired by nature and the land.

Though no famous house is specifically named on Japfü, many Angami houses carry names reflecting nature, ancestors, or local history. Japfü is also a popular trekking destination, surrounded by rich biodiversity, including the world’s tallest rhododendron tree. From its summit, visitors enjoy panoramic views of valleys, hills, and even distant Mount Saramati.

If you were naming a house on Japfü, names like "Japfü Heights" or "Rhododendron Haven" could be fitting, reflecting the mountain’s majestic presence and the region’s deep connection to nature and culture.`,
tabColors: {
    activeTabColor: "orange",
    inactiveTabColor: "black",
  },
  contentColors: {
    headingColor: "orange",
    textColor: "black",
    bgColor: "white",
  },
    },
  ];
  return (
    <div>
        <Breadcrumbs breadcrumbs={breadcrumbs} 
        backgroundImage="https://sainikschoolpunglwa.nic.in/images/princ.jpg" />
        <div className=" m-10">
        <Title title="Club" />
        </div>
      
      <ContentWithTab data={tabData} />
    </div>
  );
};

export default Club;

