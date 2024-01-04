
import { Link } from "react-router-dom";

function DropDownMenu({dropdownMenu} : {dropdownMenu: boolean}) {
    console.log("dropdownMenu: ", dropdownMenu);

    return (
        <div>
            <div className={dropdownMenu ? "dropdown-menu active" : "dropdown-menu"}>
                <ul>
                    <li className="dd-menu-optns">
                        <Link className="dd-menu-nav" to="/">HOME</Link> 
                    </li>
                    <li className="dd-menu-optns">
                        <Link className="dd-menu-nav" to="/about">ABOUT</Link>
                    </li>
                    <li className="dd-menu-optns">
                        <Link className="dd-menu-nav" to="/blogs">BLOGS</Link>
                    </li>
                    <li className="dd-menu-optns">
                        <Link className="dd-menu-nav" to="/contact">CONTACT US</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DropDownMenu;