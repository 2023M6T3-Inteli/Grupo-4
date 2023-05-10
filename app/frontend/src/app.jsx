import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from './pages/home';
// Import other necessary components

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Add your other routes here */}
        <Route path="/" element={<div>LOGIN</div>} />
        {/* <Route path="/home" element={<Home/>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
