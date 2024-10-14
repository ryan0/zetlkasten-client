import classes from "./SecondarySideBar.module.css"
import { MdEditNote } from "react-icons/md";
import { MdSort } from "react-icons/md";
import {useLoaderData} from "react-router-dom";
import {Note} from "../../model/note.model.ts";
import NoteNavLink from "./NoteNavLink.tsx";

function SecondarySideBar() {

    const notes = useLoaderData() as Note[];

    const titles = notes.map((note) => <NoteNavLink key={note.fleeting_note_id} {...note}></NoteNavLink>);

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
                {titles}
            </ul>
        </div>
    );
}

export default SecondarySideBar;