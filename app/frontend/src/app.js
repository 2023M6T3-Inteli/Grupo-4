import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewProject from './pages/NewProject';
// Import other necessary components

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Add your other routes here */}
        <Route path="/new-project" component={NewProject} />
      </Routes>
    </Router>
  );
};

export default App;