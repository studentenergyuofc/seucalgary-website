import { Outlet } from "react-router-dom";
import Header from "@components/shared/AppHeader/AppHeader";
import DropDownMenu from "@components/shared/DropdownMenu/DropDownMenu";
import { useState } from "react";

function Layout() {
  const [navbar, setNavbar] = useState<boolean>(false);
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

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
