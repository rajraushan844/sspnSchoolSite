// src/App.jsx
import React from 'react';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';


import './index.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App flex flex-col min-h-screen min-w-screen bg-gray-100">
      
      <Navbar />
    
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
