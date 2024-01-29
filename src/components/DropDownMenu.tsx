
import { Link } from "react-router-dom";

interface DropdownMenuProps {
    setDropdownMenu: (value: boolean) => void;
    dropdownMenu: boolean;
  }

function DropDownMenu({dropdownMenu, setDropdownMenu} : DropdownMenuProps) {
    console.log("dropdownMenu: ", dropdownMenu);

    const handlePageChange = () => {
        console.log("clicked")
        if (dropdownMenu) {
          setDropdownMenu(false);
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