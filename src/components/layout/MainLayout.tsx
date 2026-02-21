import { Outlet } from "react-router";
import SideMenu from "./SideMenu";

function MainLayout() {
    return (
    <div className="flex">
        <SideMenu />
        <div className="w-10/12">
            <Outlet />
        </div>
    </div>);
}

export default MainLayout;