import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home/Home";
import Pdesk from "./components/Pdesk.jsx";
import PageNotFound from "./components/Page404/PageNotFound";
import Loading from "./components/Page404/Loading";


import AlumniForm from "./components/CadetsCorner/AlumniForm.jsx";


import MissionVision from "./components/AboutUs/MissionVision.jsx";
import Hero from "./components/Acadmics/Hero.jsx";
import ImageModal from "./components/Cards/ImgModal.jsx";
import Sports from "./components/PhotoGallery/Sports.jsx";
import About from "./components/AboutUs/About.jsx";
import LBA from "./components/AboutUs/LBA.jsx";

import FormerPPL from "./components/AboutUs/FormerPPL.jsx";
import SimpleGallery from "./components/PhotoGallery/SimpleGallery.jsx";
import History from "./components/AboutUs/History.jsx";


import Admin from "./components/Staff/Admin.jsx";
import Officer from "./components/Staff/Officer.jsx";
import Teachers from "./components/Staff/Teachers.jsx";
import General from "./components/Staff/General.jsx";
import NccPti from "./components/Staff/NccPti.jsx";
import WomenCell from "./components/Staff/WomenCell.jsx";

import Houses from "./components/Acadmics/Houses.jsx";
import Ncc from "./components/Acadmics/Ncc.jsx";
import Club from "./components/Acadmics/Club.jsx";
import SportsActivicty from "./components/Acadmics/SportsActivicty.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />

      <Route path="pdesk" element={<Pdesk />} />
      <Route path="/AlumniForm" element={<AlumniForm />} />

      <Route path="*" element={<PageNotFound />} />
      <Route path="/loader" element={<Loading />} />
      <Route path="/officer" element={<Officer />} />
      
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/lba" element={<LBA />} />
      <Route path="/gallery" element={<SimpleGallery />} />
      
      

      <Route path="/about" element={<Outlet />}>
        <Route index element={<About />} />
        <Route path="Mission-Vision" element={<MissionVision />} />
        <Route path="history" element={<History/>} />
        <Route path="lba" element={<LBA/>} />
        <Route path="former-ppl" element={<FormerPPL />} />
        {/* Use relative path here */}
      </Route>

      <Route path="/staff" element={<Outlet />}>
        <Route path="officer" element={<Officer />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="admin" element={<Admin />} />
        <Route path="ncc-pti" element={<NccPti/>} />
        <Route path="generalstaff" element={<General/>} />
        <Route path="womencell" element={<WomenCell />} />
      </Route>

      <Route path="/cadet-corner" element={<Outlet />} >
         <Route path="alumniform" element={<AlumniForm />} />
         <Route path="club" element={<Club />} />
         <Route path="ncc" element={<Ncc />} />
         <Route path="sports-activity" element={<SportsActivicty />} />
      </Route>


      <Route path="/academic" element={<Outlet />} >
         <Route index element={<Hero />} />
         <Route path="houses" element={<Houses />} />
         <Route path="club" element={<Club />} />
         <Route path="ncc" element={<Ncc />} />
         <Route path="sports-activity" element={<SportsActivicty />} />
      
      
      </Route>



    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ImageModal />
    <RouterProvider router={router} />
  </StrictMode>
);
