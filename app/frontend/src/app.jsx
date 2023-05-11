import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedProject from "./pages/feedProject";
// import Home from './pages/home';
// Import other necessary components

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Add your other routes here */}
        <Route path="/" element={<div>LOGIN</div>} />
        <Route path="/feedProject" element={<FeedProject/>} />
        {/* <Route path="/home" element={<Home/>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
