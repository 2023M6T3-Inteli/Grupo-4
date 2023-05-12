import React from "react";
import {Route, Routes } from "react-router-dom";
import Perfil from "./pages/perfil";
import Feed from "./pages/feed";
import { useLocation} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/login";
import VisualizeProject from "./pages/visualizeProject";
// import Home from './pages/home';
// Import other necessary components

const App = () => {
  const path = useLocation();

  const pathName = path.pathname;

  return (
    <>
      {pathName === "/" ? null : <Navbar />}
      <Routes>
        {/* Add your other routes here */}
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Perfil />} />
        <Route path="/feed/contents" element={<Feed showContent={true} />} />
        <Route path="/feed/projects" element={<Feed showProject={true} />} />
        <Route path="/visualizeproject" element={<VisualizeProject/>} />
        {/* <Route path="/home" element={<Home/>} /> */}
      </Routes>
    </>
  );
};

export default App;
