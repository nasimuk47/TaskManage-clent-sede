import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;
