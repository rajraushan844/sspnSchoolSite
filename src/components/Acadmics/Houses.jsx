import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumb";
import Title from "../Cards/Title";

import ContentWithTab from "../ContentWithTab";

const Houses = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Academics", href: "/academic" },
    { label: "Houses", href: "/academic/houses", isCurrent: true },
  ]
  const tabData = [
    {
      value: "tab1",
      label: "Doyang House",
      heading: "Doyang House",
      imageUrl:
        "https://nagalandtribune.in/wp-content/uploads/2024/04/20240407_194648.jpeg",
      content: `Doyang House is one of the residential houses at Sainik School Punglwa, named after the Doyang River in Nagaland. The school focuses on preparing students for entry into the Indian Armed Forces through a disciplined and holistic education.`,
      tabColors: {
        activeTabColor: "red",
        inactiveTabColor: "red-500",
      },
      contentColors: {
        headingColor: "red",
        textColor: "white",
        bgColor: "red",
      },
    },
    {
      value: "tab2",
      label: "Japfu House",
      heading: "Japfu House",
      imageUrl:
        "https://nagalandtribune.in/wp-content/uploads/2024/04/20240407_194648.jpeg",
      content: `Japfü Peak in Nagaland, India, is the second-highest peak in the state, standing at 3,015 meters (9,891 feet) and located near Kohima. This mountain is part of the Naga Hills and holds cultural importance for the local Angami Naga tribe. The Angami people traditionally build morungs, communal houses used for gatherings and cultural activities, and house names are often tied to clan heritage or inspired by nature and the land.

Though no famous house is specifically named on Japfü, many Angami houses carry names reflecting nature, ancestors, or local history. Japfü is also a popular trekking destination, surrounded by rich biodiversity, including the world’s tallest rhododendron tree. From its summit, visitors enjoy panoramic views of valleys, hills, and even distant Mount Saramati.

If you were naming a house on Japfü, names like "Japfü Heights" or "Rhododendron Haven" could be fitting, reflecting the mountain’s majestic presence and the region’s deep connection to nature and culture.`,
      tabColors: {
        activeTabColor: "blue",
        inactiveTabColor: "blue-500",
      },
      contentColors: {
        headingColor: "blue",
        textColor: "white",
        bgColor: "blue",
      },
    },
    {
      value: "tab3",
      label: "Patkai House",
      heading: "Patkai House",
      imageUrl:
        "https://nagalandtribune.in/wp-content/uploads/2024/04/20240407_194648.jpeg",
      content: `Patkai House, named after the Patkai mountain range, is one of the key residential houses at Sainik School Punglwa. It embodies values of teamwork, discipline, and leadership. The house actively participates in various sports, cultural events, and academic competitions, fostering a spirit of healthy competition and camaraderie among students. Members of Patkai House are encouraged to excel academically while celebrating the rich heritage of Nagaland. Through these activities, Patkai House plays a crucial role in developing integrity, resilience, and mutual respect among its members, preparing them for future challenges and leadership roles.`,
      tabColors: {
        activeTabColor: "orange",
        inactiveTabColor: "orange-500",
      },
      contentColors: {
        headingColor: "orange",
        textColor: "black",
        bgColor: "orange",
      },
    },
    {
      value: "tab4",
      label: "Saramati House",
      heading: "Saramati House",
      imageUrl:
        "https://nagalandtribune.in/wp-content/uploads/2024/04/20240407_194648.jpeg",
      content: `Saramati House, named after the Saramati mountain, the highest peak in Nagaland, is one of the distinguished residential houses at Sainik School Punglwa. It embodies values of camaraderie, discipline, and excellence. Members of Saramati House actively participate in various sports, cultural events, and academic competitions, fostering teamwork and a competitive spirit among students. The house emphasizes the importance of academic achievement while promoting the rich cultural heritage of Nagaland. Through its various activities, Saramati House nurtures qualities such as leadership, integrity, and resilience, preparing its members for future challenges and roles as responsible leaders.`,
      tabColors: {
        activeTabColor: "Yellow",
        inactiveTabColor: "yellow-500",
      },
      contentColors: {
        headingColor: "yellow",
        textColor: "black",
        bgColor: "yellow",
      },
    },
  ];
  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs}
        backgroundImage="https://sainikschoolpunglwa.nic.in/images/princ.jpg" />
      <div className="m-10">
        <Title title="Houses" />
      </div>
      <ContentWithTab data={tabData} />
    </div>
  );
};

export default Houses;
