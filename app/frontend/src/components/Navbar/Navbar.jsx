import s from "./Navbar.module.scss";
import { useRef } from "react";
import { TbLayoutDashboard } from "react-icons/tb";
// import { HiOutlineHome } from "react-icons/hi";
import { FiPlusSquare } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const nav = useRef();
  const dropdownFeed = useRef();
  const dropdownCreation = useRef();
  const navigate = useNavigate();

  const toggleNav = (e) => {
    e?.preventDefault();
    window.scrollTo(0, 0)
    nav.current.classList.toggle(s.active);
    window.document.body.classList.toggle(s.overflowHidden)
  };

  const toggleDropdownFeed = (e) => {
    e.preventDefault();
    dropdownFeed.current.classList.toggle(s.active);
    console.log(dropdownFeed.current);
  };

  const toggleDropdownCreation = (e) => {
    e.preventDefault();
    dropdownCreation.current.classList.toggle(s.active);
    console.log(dropdownCreation.current);
  };

  const navigateHandler = (route) => {
    toggleNav()
    navigate(route)
  } 

  return (
    <>
      <nav className={s.Navbar}>
        <button onClick={toggleNav}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <button>
          <i className="fa-solid fa-bell fa-shake"></i>
        </button>
      </nav>
      <div className={s.behind}></div>

      <div ref={nav} className={s.navigation}>
        <ul>
          {/* <li>
            <a href="./home">
              <label>
                <HiOutlineHome />
                <h1>HOME</h1>
              </label>
            </a>
          </li> */}
          <li>
            <label onClick={toggleDropdownFeed}>
              <TbLayoutDashboard />
              <h1>FEED</h1>
            </label>
            <ul>
              <li ref={dropdownFeed} >
                <button onClick={() => navigateHandler("/feed/contents")}>
                  <h2>CONTENTS</h2>
                </button>
                <button  onClick={() => navigateHandler("/feed/projects")}>
                  <h2>PROJECTS</h2>
                </button>
              </li>
            </ul>
          </li>
          <li>
            <label onClick={toggleDropdownCreation}>
              <FiPlusSquare />
              <h1>CREATION</h1>
            </label>

            <ul>
              <li ref={dropdownCreation}>
                <h2>PROJECTS</h2>
                <h2>CONTENTS</h2>
              </li>
            </ul>
          </li>
          <li>
            <label>
              <button className={s.profile} onClick={() => navigateHandler("/profile")}>
                <IoPersonOutline />
                <h1>PROFILE</h1>
              </button>
            </label>
          </li>
          <li>
            <label>
              <button className={s.profile} onClick={() => navigateHandler("/ranking")}>
                <AiOutlineStar />
                <h1>RANKING</h1>
              </button>
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
