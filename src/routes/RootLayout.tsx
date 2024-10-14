import {Outlet} from "react-router-dom";
import classes from "./RootLayout.module.css";
import Header from "../components/header/Header.tsx";
import SideBar from "../components/side-bar/SideBar.tsx";


function RootLayout() {
    return (
        <>
            <Header />
            <div className={classes.layout}>
                <SideBar />
                <Outlet />
            </div>
        </>
    );
}

export default RootLayout;