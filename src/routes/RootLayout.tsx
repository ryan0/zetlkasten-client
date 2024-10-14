import {Outlet} from "react-router-dom";
import classes from "./RootLayout.module.css";
import Header from "../components/header/Header.tsx";
import SideBar from "../components/side-bar/SideBar.tsx";
import SecondarySideBar from "../components/side-bar/SecondarySideBar.tsx";


function RootLayout() {
    return (
        <>
            <Header />
            <div className={classes.layout}>
                <SideBar />
                <SecondarySideBar />
                <div className={classes.mainContent}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default RootLayout;