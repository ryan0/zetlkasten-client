import classes from "./SecondarySideBar.module.css"
import { MdEditNote } from "react-icons/md";
import { MdSort } from "react-icons/md";

function SecondarySideBar() {
    return (
        <div className={classes.secondarySideBar}>
            <ul className={classes.iconList}>
                <li>
                    <MdSort size={45}/>
                </li>
                <li>
                    <MdEditNote size={45}/>
                </li>
            </ul>
            <h3>Notes</h3>
            <ul>

            </ul>

        </div>
    );
}

export default SecondarySideBar;