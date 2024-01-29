import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import DropDownMenu from "./DropDownMenu";

interface LayoutProps {
  setDropdownMenu: (value: boolean) => void;
  dropdownMenu: boolean;
}

function Layout({dropdownMenu, setDropdownMenu} : LayoutProps) {
  return (
    <div className="main">
      <Header setDropdownMenu={setDropdownMenu} dropdownMenu={dropdownMenu}/>
      <Outlet />
      <DropDownMenu dropdownMenu={dropdownMenu} setDropdownMenu={setDropdownMenu}/>
    </div>
  );
}

export default Layout;
