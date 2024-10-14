import classes from "./FleetingNotes.module.css"
import SecondarySideBar from "../components/side-bar/SecondarySideBar.tsx";
import {Outlet} from "react-router-dom";

function FleetingNotes() {
    return (
        <>
            <SecondarySideBar />
            <div className={classes.mainContent}>
                <Outlet />
            </div>
        </>
    );
}

export default FleetingNotes;

export async function loader() {
    const response = await fetch('http://localhost:8080/fleeting-notes');
    const data = await response.json();
    return data;
}