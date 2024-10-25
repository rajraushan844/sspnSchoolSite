// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    
<footer class="bg-gradient-to-tr from-orange-600 to-gray-600">
  <div class="container mx-auto px-6">
    <div class="text-center rounded-lg relative -mt-16 mx-auto shadow-white-lg bg-orange-900 text-white py-4 mb-8 z-10 hover:bg-orange-800 shadow-lg">
      <h2 class="text-2xl font-bold mb-2">Don't Miss Our Updates</h2>
      <p class="mb-4">Subscribe our Newsletter to get latest updates of Sainik School Punglwa.</p>
      <div class="flex justify-center">
        <input
          type="email"
          class="px-4 py-2 rounded-l-md focus:outline-none"
          placeholder="Enter your email"
        />
        <button className="bg-gray-700 text-white px-6 py-2 rounded-r-md hover:bg-gray-800">Subscribe</button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
      
      <div >
        <div className='container mx-auto flex justify-between items-center'>
        <img src="Sainik-School-Punglwa-removebg-preview.png" alt="School Logo" className="h-16 w-16" />
        <h4 class="text-lg font-bold">SAINIK SCHOOL PUNGLWA</h4>
        </div>
        <p>(Ministry of Defence)</p>
        <p class="mt-2">Nagaland, India</p>
        <p>+91-XXXXXX1234</p>
        <p>sainikschoolpunglwa@gmail.com</p>
      </div>

      
      <div>
        <h4 class="font-bold mb-2">Useful Links</h4>
        <ul>
          <li><a href="#" class="hover:underline">About School</a></li>
          <li><a href="#" class="hover:underline">Disclaimer</a></li>
          <li><a href="#" class="hover:underline">Terms & Conditions</a></li>
          <li><a href="#" class="hover:underline">Refund Policy</a></li>
          <li><a href="#" class="hover:underline">Tenders</a></li>
        </ul>
      </div>

    
      <div>
        <h4 class="font-bold mb-2">Quick Links</h4>
        <ul>
          <li><a href="#" class="hover:underline">Infrastructure</a></li>
          <li><a href="#" class="hover:underline">Cadets</a></li>
          <li><a href="#" class="hover:underline">Photo Gallery</a></li>
          <li><a href="#" class="hover:underline">Admin Staff</a></li>
          <li><a href="#" class="hover:underline">Contact Us</a></li>
        </ul>
      </div>

      
      <div>
        <h4 class="font-bold mb-2">Page Links</h4>
        <ul>
          <li><a href="#" class="hover:underline">School Publications</a></li>
          <li><a href="#" class="hover:underline">CBSE Compliance</a></li>
          <li><a href="#" class="hover:underline">Syllabus</a></li>
          <li><a href="#" class="hover:underline">Registration Link</a></li>
          <li><a href="#" class="hover:underline">Online Fees Payment</a></li>
        </ul>
      </div>
    </div>

   
    <div class="border-t border-white mt-8 py-4 text-center">
      <p class="text-sm">&copy; 2024 Sainik School Punglwa, All rights reserved. Designed by <a href="https://www.linkedin.com/in/rajraushansingh" class="hover:underline"> Raj Raushan Singh</a></p>
      <div class="flex justify-center space-x-6">
        <a href="#" class="hover:underline">Terms of Service</a>
        <a href="#" class="hover:underline">Privacy Policy</a>
        <a href="#" class="hover:underline">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
