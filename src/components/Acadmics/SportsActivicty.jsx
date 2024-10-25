import GalleryWithTab from "../Gallery/GalleryWithTab";

const SportsActivicty = () => {
  const sportsData = [
    {
      label: "Hocky",
      value: "Hocky",
      images: [
        { imageLink: "https://nagalandpost.com/wp-content/uploads/2023/07/Punglwa-lift-inter.jpg" },
        { imageLink: "https://nagalandpost.com/wp-content/uploads/2023/07/Punglwa-lift-inter.jpg" },
      ],
    },
    {
      label: "FootBall",
      value: "FootBall",
      images: [
        { imageLink: "https://sainikschoolpunglwa.nic.in/images/ez21.jpg" },
        { imageLink: "https://sainikschoolpunglwa.nic.in/images/ez21.jpg" },
      ],
    },
  ];

  return (
    <div className="py-10 px-aout bg-white h-full w-full">
      <h1 className="text-4xl font-bold text-center text-orange-800">Sports</h1>
      <GalleryWithTab data={sportsData} />
    </div>
  );
};

export default SportsActivicty;
