import { NavLink, Link, useLocation } from "react-router-dom";
import "../style/navbar.css";
import { useState } from "react";

import projectsIcon from "../assets/icons/projects.png";
import experienceIcon from "../assets/icons/experience.png";
import aboutIcon from "../assets/icons/about.png";
import artIcon from "../assets/icons/art.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header ">
      <div className="logo">
        <NavLink to={"/"}>
          KR<span>.work</span>
        </NavLink>
      </div>

      {/* Desktop Nav */}
      <nav className="nav desktop-nav">
        <NavLink
          to="/uxui-projects"
          className={({ isActive }) =>
            isActive ? "nav-link nav-active" : "nav-link"
          }
        >
          UXUI Projects
        </NavLink>
        <span className="separator">│</span>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            isActive ? "nav-link nav-active" : "nav-link"
          }
        >
          Experience
        </NavLink>
        <span className="separator">│</span>
        <NavLink
          to="/art-corner"
          className={({ isActive }) =>
            isActive ? "nav-link nav-active" : "nav-link"
          }
        >
          Art Corner
        </NavLink>
        <span className="separator">│</span>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link nav-active" : "nav-link"
          }
        >
          About Me
        </NavLink>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        className={`mobile-menu-overlay ${isOpen ? "open" : ""}`}
        onClick={closeMenu}
      >
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={closeMenu}>
            ×
          </button>
          <div className="mobile-menu-item">
            <div className="mbl-links">
              {" "}
              <img src={projectsIcon} alt="Projects" className="menu-icon" />
              <NavLink to="/uxui-projects" onClick={closeMenu}>
                Projects
              </NavLink>
            </div>
            <hr />
          </div>

          <div className="mobile-menu-item">
            <div className="mbl-links">
              <img
                src={experienceIcon}
                alt="Experience"
                className="menu-icon"
              />
              <NavLink to="/experience" onClick={closeMenu}>
                Experience
              </NavLink>
            </div>
            <hr />
          </div>

          <div className="mobile-menu-item">
            <div className="mbl-links">
              <img src={aboutIcon} alt="About Me" className="menu-icon" />
              <NavLink to="/about" onClick={closeMenu}>
                About Me
              </NavLink>
            </div>

            <hr />
          </div>

          <div className="mobile-menu-item">
            <div className="mbl-links">
              <img src={artIcon} alt="Art Corner" className="menu-icon" />
              <NavLink to="/art-corner" onClick={closeMenu}>
                Art Corner
              </NavLink>
            </div>

            <hr />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
