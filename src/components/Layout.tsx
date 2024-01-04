import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import DropDownMenu from "./DropDownMenu";

function Layout({dropdownMenu, setDropdownMenu} : {dropdownMenu: boolean, setDropdownMenu: any}) {
  return (
    <div className="main">
      <Header setDropdownMenu={setDropdownMenu} dropdownMenu={dropdownMenu}/>
      <Outlet />
      <DropDownMenu dropdownMenu={dropdownMenu}/>
    </div>
  );
}

export default Layout;
