"use client"

import {Link} from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';
import logo from '../assets/logo3.png';
import logotitle from '../assets/logotitle.png';
import {useState} from "react";


function Header(){
    const [navbar, setNavbar] = useState<boolean>(false);

    const isWindow = useMediaQuery("(min-width: 800px)");

    const changeBackground = () => {
        if(window.scrollY >= 10){
            setNavbar(true);
        } else{
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);


    return(
        
        <div className={navbar ? 'header active' : 'header'}>
            <div className="head-center container d-flex">
                <div className="logo">
                    <img className="logo-img" src={logo} />
                    <img className="logo-title" src={logotitle} />
                </div>
                <div className="navigation">
                    {isWindow ? (
                        <ul className="nav-list d-flex">
                        <li className="nav-item"><Link to="/">HOME</Link></li>
                        <li className="nav-item"><Link to="/about">ABOUT</Link></li>
                        <li className="nav-item"><Link to="/team">TEAM</Link></li>
                        <li className="nav-item"><Link to="/getinvolved">GET INVOLVED</Link></li>
                        <li className="nav-item"><Link to="/contact">CONTACT US</Link></li>
                    </ul>
                    ) : (
                        <p>&#9776;</p>
                    )}
                </div>
            </div>
        </div>
    )

}

export default Header;

