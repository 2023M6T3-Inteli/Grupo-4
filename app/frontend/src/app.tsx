import React from 'react';
import './App.css';
import NewProject from './pages/NewProject';
import NewContent from './pages/NewContent';

const App: React.FC = () => {
  return (
    <div className="App">
      
      <NewContent/>
      <NewProject/>
      
    </div>
  );
};

export default App;
