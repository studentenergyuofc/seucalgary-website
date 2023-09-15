import {Outlet} from "react-router-dom";

function Layout(){
    return(
        <div className="main">
            <Outlet />
        </div>
    )
};

export default Layout;

