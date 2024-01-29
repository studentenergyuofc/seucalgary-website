
import { Link } from "react-router-dom";

interface DropdownMenuProps {
    setDropdownMenu: (value: boolean) => void;
    dropdownMenu: boolean;
    setNavbar: (value: boolean) => void;
  }

function DropDownMenu({dropdownMenu, setDropdownMenu, setNavbar} : DropdownMenuProps) {
    const atHome =
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname === "/contact";

    const handlePageChange = () => {
        if (dropdownMenu) {
          setDropdownMenu(false);
          if (atHome) {
            setNavbar(false);
          }
        }
      };

    return (
        <div>
            <div className={dropdownMenu ? "dropdown-menu active" : "dropdown-menu"}>
                <ul>
                    <li className="dd-menu-optns">
                        <Link className="dd-menu-nav" to="/" onClick={handlePageChange}>HOME</Link> 
                    </li>
                    <li className="dd-menu-optns">
                        <Link className="dd-menu-nav" to="/about" onClick={handlePageChange}>ABOUT</Link>
                    </li>
                    <li className="dd-menu-optns">
                        <Link className="dd-menu-nav" to="/blogs" onClick={handlePageChange}>BLOGS</Link>
                    </li>
                    <li className="dd-menu-optns">
                        <Link className="dd-menu-nav" to="/contact" onClick={handlePageChange}>CONTACT US</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DropDownMenu;