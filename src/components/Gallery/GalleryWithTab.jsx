import { useState } from "react";
import React from "react";

// Component to render the images in a tab
const TabPanel = ({ images }) => {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {images?.map((image, index) => (
        <div key={index} className="relative group">
          {/* Image with hover effect */}
          <img
            className="h-48 w-full rounded-xl object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            src={image.imageLink}
            onClick={image.scaleUp}
            alt={`gallery-image-${index}`}
          />
        </div>
      ))}
    </div>
  );
};

// Component to render the tabs and handle active tab
const Tabs = ({ tabsData, activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-6 border-b-2 border-gray-200 py-4 p-6 shadow-lg">
      {tabsData.map((tab) => (
        <button
          key={tab.value}
          className={`px-4 py-2 font-semibold text-lg transition-colors duration-300 ease-in-out ${
            activeTab === tab.value
              ? "text-orange-600 border-b-4 border-orange-600"
              : "text-gray-600 hover:text-orange-600 hover:border-b-4 hover:border-orange-600"
          }`}
          onClick={() => setActiveTab(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

// Main Gallery component with tabs and images
const GalleryWithTab = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data[0]?.value);

  const activeTabData = data.find((tab) => tab.value === activeTab);

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      {/* Tabs navigation */}
      <Tabs tabsData={data} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Images corresponding to the active tab */}
      <div className="py-8">
        {activeTabData && <TabPanel images={activeTabData.images} />}
      </div>
    </div>
  );
};

export default GalleryWithTab;
