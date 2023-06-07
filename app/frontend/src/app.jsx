import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewProject from "./pages/NewProject";
import NewContent from "./pages/NewContent";
import Perfil from "./pages/perfil";
import Feed from "./pages/feed";
import { useLocation} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/login";
import Ranking from "./pages/ranking";
import Home from "./pages/home";
import RouteWithNavBar from "./route";
import NavLayout from "./route";
import Admin from "./pages/admin";
// import Home from './pages/home';
// Import other necessary components

const App = () => {
  const path = useLocation();

  const pathName = path.pathname;

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="/home" element={<NavLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/newproject" element={<NavLayout />}>
          <Route index element={<NewProject />} />
        </Route>
        <Route path="/newcontent" element={<NavLayout />}>
          <Route index element={<NewContent />} />
        </Route>
        <Route path="/profile" element={<NavLayout />}>
          <Route index element={<Perfil />} />
        </Route>
        <Route path="/feed/projects" element={<NavLayout />}>
          <Route index element={<Feed showProject={true} showContent={false} />} />
        </Route>
        <Route path="/feed/contents" element={<NavLayout />}>
          <Route index element={<Feed showContent={true} showProject={false}/>} />
        </Route>
        <Route path="/ranking" element={<NavLayout />}>
          <Route index element={<Ranking />} />
        </Route>
        <Route path="/admin" element={<NavLayout />}>
          <Route index element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
