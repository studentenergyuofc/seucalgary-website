import { Link, useLocation } from "react-router-dom";

interface DropdownMenuProps {
  setDropdownMenu: (value: boolean) => void;
  dropdownMenu: boolean;
  setNavbar: (value: boolean) => void;
}

function DropDownMenu({
  dropdownMenu,
  setDropdownMenu,
  setNavbar,
}: DropdownMenuProps) {
  const location = useLocation();

  const atHome =
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname === "/contact";

  const handlePageChange = (destination: string) => {
    if (dropdownMenu) {
      setDropdownMenu(false);
      if (location.pathname !== destination) {
        if (atHome) {
          setNavbar(false);
        }
      } else {
        setNavbar(true);
      }
    }
  };

  return (
    <div>
      <div className={dropdownMenu ? "dropdown-menu active" : "dropdown-menu"}>
        <ul>
          <li className="dd-menu-optns">
            <Link
              className="dd-menu-nav"
              to="/"
              onClick={() => handlePageChange("/")}
            >
              HOME
            </Link>
          </li>
          <li className="dd-menu-optns">
            <Link
              className="dd-menu-nav"
              to="/about"
              onClick={() => handlePageChange("/about")}
            >
              ABOUT
            </Link>
          </li>
          <li className="dd-menu-optns">
            <Link
              className="dd-menu-nav"
              to="/blogs"
              onClick={() => handlePageChange("/blogs")}
            >
              ARTICLES
            </Link>
          </li>
          <li className="dd-menu-optns">
            <Link
              className="dd-menu-nav"
              to="/contact"
              onClick={() => handlePageChange("/contact")}
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropDownMenu;
