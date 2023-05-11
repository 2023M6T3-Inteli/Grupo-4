import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Perfil from "./pages/perfil";
import Feed from "./pages/feed";
import FeedProject from "./pages/feedProject";
import {Link, useLocation} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/login";
// import Home from './pages/home';
// Import other necessary components

const App = () => {

  const path = useLocation();

  const pathName = path.pathname;

  return (
      <>
      {
        pathName === "/" ? null : <Navbar/>
      }
        <Routes>
          {/* Add your other routes here */}
          <Route path="/" element={<Login/>} />
          <Route path="/profile" element={<Perfil />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/feedProject" element={<FeedProject/>} />
          {/* <Route path="/home" element={<Home/>} /> */}
      </Routes>
      </>
      
  );
};

export default App;
