import { useState } from "react";
import React from "react";

// Component to render the content for each tab
const TabContent = ({ heading, imageUrl, content, headingColor, textColor, bgColor }) => {
  return (
    <div className="text-center bg-gray-200 rounded-lg p-8 mb-8 shadow-lg"style={{ backgroundColor: bgColor }}>
      {/* Heading with dynamic color */}
      <h2 className="text-3xl font-bold p-4 mb-4 shadow-lg rounded-lg bg-white" style={{ color: headingColor}}>
        {heading}
      </h2>

      {/* Image */}
      <div className="w-full h-full mb-6">
        <img
          className="w-full rounded-xl object-cover object-center mx-auto"
          src={imageUrl || "House image"} // Handle missing image with a fallback
          alt={heading}
        />
      </div>

      {/* Content with dynamic color */}
      <div className="text-lg leading-relaxed" style={{ color: textColor }}>
        {content}
      </div>
    </div>
  );
};

// Component to render the tabs and handle active tab
const Tabs = ({ tabsData, activeTab, setActiveTab, activeTabColor, inactiveTabColor }) => {
  return (
    <div className="flex space-x-6 border-b-2 border-gray-200 py-4 p-6 shadow-lg">
      {tabsData.map((tab) => (
        <button
          key={tab.value}
          className="px-4 py-2 font-semibold text-lg transition-colors duration-300 ease-in-out border-b-4" // Always include border-b-4
          style={{
            color: activeTab === tab.value ? activeTabColor : inactiveTabColor,
            borderColor: activeTab === tab.value ? activeTabColor : 'transparent', // Set border color dynamically
          }}
          onClick={() => setActiveTab(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};


// Main component with tabs and corresponding content for each tab
const GalleryWithTabContent = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data[0]?.value);

  // Find the active tab's data
  const activeTabData = data.find((tab) => tab.value === activeTab);

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      {/* Tabs navigation on top */}
      <Tabs
        tabsData={data}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeTabColor={activeTabData?.tabColors?.activeTabColor}
        inactiveTabColor={activeTabData?.tabColors?.inactiveTabColor}
      />

      {/* Display content corresponding to the active tab with dynamic heading and text colors */}
      <div className="py-8">
        {activeTabData ? (
          <TabContent
            heading={activeTabData.heading}
            imageUrl={activeTabData.imageUrl}
            content={activeTabData.content}
            headingColor={activeTabData.contentColors?.headingColor}
            textColor={activeTabData.contentColors?.textColor}
            bgColor={activeTabData.contentColors?.bgColor}
          />
        ) : (
          <p className="text-center text-gray-500">No content available for the selected tab.</p>
        )}
      </div>
    </div>
  );
};

export default GalleryWithTabContent;
