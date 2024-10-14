import classes from "./SideBar.module.css"
import { MdLibraryBooks } from "react-icons/md";
import { MdInventory } from "react-icons/md";
import { MdStickyNote2 } from "react-icons/md";
import {Link} from "react-router-dom";


function SideBar() {
    return (
        <div className={classes.sideBar}>
            <ul>
                <li>
                    <Link to="/fleeting-notes">
                        <MdStickyNote2 size={45}/>
                    </Link>
                </li>
                <li>
                    <Link to="/literature-notes">
                        <MdLibraryBooks size={45}/>
                    </Link>
                </li>
                <li>
                    <Link to="/permanent-notes">
                        <MdInventory size={45}/>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;