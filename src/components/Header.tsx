
import {Link} from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';

function Header(){

    const isWindow = useMediaQuery("(min-width: 800px)");

    return(
        
        <div className="header">
            <div className="head-center container d-flex">
                <div className="logo">
                    <div className="logo-img"></div>
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

