import { Outlet } from "react-router-dom";
import Header from "../AppHeader/AppHeader";
import DropDownMenu from "../DropdownMenu/DropDownMenu";
import { useState } from "react";

interface LayoutProps {
  setDropdownMenu: (value: boolean) => void;
  dropdownMenu: boolean;
}

function Layout({ dropdownMenu, setDropdownMenu }: LayoutProps) {
  const [navbar, setNavbar] = useState<boolean>(false);

  return (
    <div className="main">
      <Header
        setDropdownMenu={setDropdownMenu}
        dropdownMenu={dropdownMenu}
        navbar={navbar}
        setNavbar={setNavbar}
      />
      <Outlet />
      <DropDownMenu
        dropdownMenu={dropdownMenu}
        setDropdownMenu={setDropdownMenu}
        setNavbar={setNavbar}
      />
    </div>
  );
}

export default Layout;
