"use client";

import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import logo from "/logo3.png";
import logotitle from "/logotitle.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  setDropdownMenu: (value: boolean) => void;
  dropdownMenu: boolean;
  navbar: boolean;
  setNavbar: (value: boolean) => void;
}

function Header({setDropdownMenu, dropdownMenu, navbar, setNavbar} : HeaderProps) {
  const location = useLocation();
  const isWindow = useMediaQuery("(max-width: 800px)");
  const atHome =
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname === "/contact";

    useEffect(() => {

      const changeBackground = () => {
        if (window.scrollY >= 10 ) {
          setNavbar(true);
        } else {
          setNavbar(false);
          if (dropdownMenu) {
            setDropdownMenu(false);
          }
        }
        
      };

    // Register the event listener
    window.addEventListener("scroll", changeBackground);

    // Return a cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", changeBackground);
    }, [setNavbar, setDropdownMenu, dropdownMenu]);

  const showDropdown = () => {
    setDropdownMenu(!dropdownMenu);
  };

  useEffect(() => {
    if (dropdownMenu) {
      setNavbar(true);
    } 
  }, [dropdownMenu, setNavbar]);

  useEffect(() => {
    if (!isWindow && dropdownMenu) {
      setDropdownMenu(false);
    }
  }, [isWindow, dropdownMenu, setDropdownMenu]);

  return (
    <div className={navbar || !atHome ? "header active" : "header"}>
      <div className="head-center container d-flex">
        <Link to="/">
          <div className="logo">
            <img className="logo-img" src={logo} />
            <img className="logo-title" src={logotitle} />
          </div>
        </Link>
        <div className="navigation">
          {!isWindow ? (
            <ul className="nav-list d-flex">
              <li className="nav-item">
                <Link to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs">ARTICLES</Link>
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
