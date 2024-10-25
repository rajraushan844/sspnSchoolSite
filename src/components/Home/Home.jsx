import React from 'react';
import NoticeBoard from './Main-NoticeBoard';
import Alert from './Alert-Main';
import Carousel from './Home-image-change';
import NdaCadets from './NdaCadets';
import Pdesk from '../Pdesk';
import LinkCards from '../Cards/LinkCard';




const HomePage = () => {
  return (
    <div>
      
      <Carousel />
      <div className='p-2 w-[100%]'>
      <Alert />
      

      </div>
    <div className="min-h-screen bg-gray-300 flex p-2 flex-col items-center">
      {/* Header */}
      

      <div className="w-full flex flex-col lg:flex-row justify-between mt-2 px-2 bg-white">
        {/* Left Section - Quick Launch */}
        <div className="bg-white p-2 shadow-lg rounded-lg lg:w-1/4 w-full mb-4 lg:mb-0">
          
        <h2 className="bg-orange-600 p-2 text-white text-2xl font-bold text-center mb-4">Quick Launch</h2>
        <ul className="space-y-3 text-blue-600 bg-white shadow-lg rounded-lg max-w-sm mx-auto">
            <li className="hover:bg-blue-100 p-2 rounded transition duration-300 ease-in-out">
              <a href="/pay-fees-online" target="_blank" rel="noopener noreferrer" className="block text-base font-medium hover:text-blue-800">
                Pay Fees Online
              </a>
            </li>
            <li className="hover:bg-blue-100 p-2 rounded transition duration-300 ease-in-out">
              <a href="/admission-notice" target="_blank" rel="noopener noreferrer" className="block text-base font-medium hover:text-blue-800">
                Admission Notice
              </a>
            </li>
            <li className="hover:bg-blue-100 p-2 rounded transition duration-300 ease-in-out">
              <a href="/tender-notice" target="_blank" rel="noopener noreferrer" className="block text-base font-medium hover:text-blue-800">
                Tender Notice
              </a>
            </li>
            <li className="hover:bg-blue-100 p-2 rounded transition duration-300 ease-in-out">
              <a href="/vacancy" target="_blank" rel="noopener noreferrer" className="block text-base font-medium hover:text-blue-800">
                Vacancy
              </a>
            </li>
            <li className="hover:bg-blue-100 p-2 rounded transition duration-300 ease-in-out">
              <a href="/right-to-information" target="_blank" rel="noopener noreferrer" className="block text-base font-medium hover:text-blue-800">
                Right to Information
              </a>
            </li>
            <li className="hover:bg-blue-100 p-2 rounded transition duration-300 ease-in-out">
              <a href="/mandatory-public-disclosure" target="_blank" rel="noopener noreferrer" className="block text-baseg font-medium hover:text-blue-800">
                Mandatory Public Disclosure
              </a>
            </li>
</ul>


          
        </div>
        

        {/* Middle Section - Scrollable Cards with Cadet Photos */}
        <div className="lg:w-2/4 w-full p-2 bg-white shadow-lg rounded-lg">
        
       
        <header className="bg-white p-4 text-gray-600 text-2xl rounded-md shadow-lg font-bold text-center mb-4">
        154 NDA & 116 NA (UPSC) WRITTEN EXAM 2024
      </header>
          
          <NdaCadets />
        </div>
        <NoticeBoard />
      </div>

    

      {/* Footer */}
      <Pdesk/>

      <div className='w-full p-2 mb-10'>
      <h2 className="bg-white text-gray-600 w-[100%] h-[100%] rounded-md hover:shadow-lg font-bold text-2xl text-center p-3">Quick Links</h2>
      <div className='w-full flex flex-col lg:flex-row justify-between mt-2 px-2 shadow-lg py-2 mb-10'>
      
        <LinkCards/>

      </div>
      </div>
      
      
    </div>
    
    
    
  
    </div>
  );
};

export default HomePage;
