import classes from "./NoteNavLink.module.css";
import {Link} from "react-router-dom";
import {Note} from "../../model/note.model.ts";


function NoteNavLink(note: Note) {

    return (
        <li className={classes.noteNavLink}>
            <Link to={"" + note.fleeting_note_id}>
                {note.fleeting_note_title}
            </Link>
        </li>
    )
}

export default NoteNavLink;