import {useParams, useRouteLoaderData} from "react-router-dom";
import {Note} from "../model/note.model.ts";


function ViewNote() {
    const id = +(useParams().id as string)
    const notes = useRouteLoaderData('fleeting') as Note[];
    const activeNote = notes[id - 1];

    return (
        <>
            <h2>{activeNote.fleeting_note_title}</h2>
            <p>{activeNote.fleeting_note_text}</p>
        </>
    );
}

export default ViewNote;