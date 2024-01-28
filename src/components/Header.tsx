"use client";

import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import logo from "/logo3.png";
import logotitle from "/logotitle.png";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Header({ setDropdownMenu, dropdownMenu} : {setDropdownMenu: any, dropdownMenu: boolean}) {
  const [navbar, setNavbar] = useState<boolean>(false);
  const location = useLocation();
  const isWindow = useMediaQuery("(min-width: 800px)");
  const atHome =
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname === "/contact";

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const showDropdown = () => {
    setDropdownMenu(!dropdownMenu);
  };

  useEffect(() => {
    if (dropdownMenu) {
      setNavbar(true);
    } else {
      setNavbar(false);
        }
  }, [dropdownMenu]);

  useEffect(() => {
    if (isWindow && dropdownMenu) {
      setDropdownMenu(false);
    }
  }, [isWindow, dropdownMenu]);

  return (
    <div className={navbar || !atHome ? "header active" : "header"}>
      <div className="head-center container d-flex">
        <div className="logo">
          <img className="logo-img" src={logo} />
          <img className="logo-title" src={logotitle} />
        </div>
        <div className="navigation">
          {isWindow ? (
            <ul className="nav-list d-flex">
              <li className="nav-item">
                <Link to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs">BLOGS</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">CONTACT US</Link>
              </li>
            </ul>
          ) : (
            <p className="hamburger-menu" onClick={() => showDropdown()}>&#9776;</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
