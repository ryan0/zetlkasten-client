import classes from "./SideBar.module.css"
import { MdLibraryBooks } from "react-icons/md";
import { MdInventory } from "react-icons/md";
import { MdStickyNote2 } from "react-icons/md";


function SideBar() {
    return (
        <div className={classes.sideBar}>
            <ul>
                <li>
                    <MdStickyNote2 size={45}/>
                </li>
                <li>
                    <MdInventory size={45}/>
                </li>
                <li>
                    <MdLibraryBooks size={45}/>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;