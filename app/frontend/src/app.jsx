import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewProject from './pages/NewProject';
import NewContent from "./pages/NewContent";
import {Route, Routes } from "react-router-dom";
import Perfil from "./pages/perfil";
import Feed from "./pages/feed";
import { useLocation} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/login";
import Ranking from "./pages/ranking";
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
        <Route path="/" element={<div>LOGIN</div>} />
        <Route path="/newproject" element={<NewProject />} />
        <Route path="/newcontent" element={<NewContent />} />
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Perfil />} />
        <Route path="/feed/contents" element={<Feed showContent={true} showProject={false}/>} />
        <Route path="/feed/projects" element={<Feed showProject={true} showContent={false} />} />
        <Route path="/ranking" element={<Ranking />} />
        {/* <Route path="/home" element={<Home/>} /> */}
      </Routes>
    </>
  );
};

export default App;
