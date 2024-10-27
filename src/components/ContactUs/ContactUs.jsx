import React, { useState } from "react";

const ContactUs = () => {
  // Define the contact details for different persons
  const contacts = {
    principal: {
      name: "Principal John Doe",
      phone: "123-456-7890",
      email: "principal@school.edu",
      officeHours: "9:00 AM - 5:00 PM",
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    teacher1: {
      name: "Mrs. Jane Smith",
      phone: "234-567-8901",
      email: "jane.smith@school.edu",
      officeHours: "10:00 AM - 4:00 PM",
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    teacher2: {
      name: "Mr. Mike Johnson",
      phone: "345-678-9012",
      email: "mike.johnson@school.edu",
      officeHours: "8:00 AM - 2:00 PM",
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    // Add more contacts as needed
  };

  const [selectedContact, setSelectedContact] = useState("principal");

  // Social media links
  const socialMediaLinks = [
    { platform: "Facebook", url: "https://facebook.com", icon: "🌐" },
    { platform: "Twitter", url: "https://twitter.com", icon: "🐦" },
    { platform: "LinkedIn", url: "https://linkedin.com", icon: "🔗" },
    { platform: "Instagram", url: "https://instagram.com", icon: "📸" },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-stretch min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1600x900')" }}>
      {/* Left Side: Map and Social Media Links */}
      <div className="flex flex-col w-full lg:w-1/2 space-y-8 mb-8 lg:mb-0 lg:pr-4">
        {/* Google Map */}
        <div className="w-full h-64 lg:h-1/2 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5695.88720753427!2d93.8361706!3d25.6593948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37460232b70e0ee5%3A0xdc47f182e1e67b9c!2sSainik%20School%2C%20Punglwa!5e1!3m2!1sen!2sin!4v1730061727284!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-evenly items-center bg-white rounded-lg shadow-lg p-6 space-y-4 lg:space-y-0">
          {socialMediaLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-800 hover:text-orange-600 transition-colors duration-300"
            >
              <span className="text-2xl">{link.icon}</span>
              <span>{link.platform}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Right Side: Contact Info */}
      <div className="flex flex-col w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>

        {/* Dropdown for Selecting Contact */}
        <label htmlFor="contact-select" className="text-lg font-semibold text-gray-600 mb-2">
          Choose a Contact:
        </label>
        <select
          id="contact-select"
          value={selectedContact}
          onChange={(e) => setSelectedContact(e.target.value)}
          className="mb-6 p-2 border border-gray-300 rounded-lg"
        >
          {Object.keys(contacts).map((key) => (
            <option key={key} value={key}>
              {contacts[key].name}
            </option>
          ))}
        </select>

        {/* Display Selected Contact Info */}
        <div className="text-gray-700 space-y-4 flex items-center">
          <img
            src={contacts[selectedContact].image}
            alt={contacts[selectedContact].name}
            className="w-24 h-24 rounded-full border-2 border-orange-500 mr-4"
          />
          <div>
            <p>
              <strong>Name:</strong> {contacts[selectedContact].name}
            </p>
            <p>
              <strong>Phone:</strong> {contacts[selectedContact].phone}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contacts[selectedContact].email}`} className="text-blue-500">
                {contacts[selectedContact].email}
              </a>
            </p>
            <p>
              <strong>Office Hours:</strong> {contacts[selectedContact].officeHours}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
