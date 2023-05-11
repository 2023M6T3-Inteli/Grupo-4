import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Perfil from "./pages/perfil";
import Feed from "./pages/feed";
// import Home from './pages/home';
// Import other necessary components

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Add your other routes here */}
        <Route path="/" element={<div>LOGIN</div>} />
        <Route path="/profile" element={<Perfil />} />
        <Route path="/feed/content" element={<Feed showContent={true} />} />
        <Route path="/feed/project" element={<Feed showProject={true} />} />
        {/* <Route path="/home" element={<Home/>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
