import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./routes/RootLayout.tsx";
import FleetingNotes, {loader as fleetingLoader} from "./routes/FleetingNotes.tsx";
import LiteratureNotes from "./routes/LiteratureNotes.tsx";
import PermanentNotes from "./routes/PermanentNotes.tsx";
import ViewNote from "./components/ViewNote.tsx";
import ViewDefault from "./components/ViewDefault.tsx";

const router = createBrowserRouter([
    { path: '/', element: <RootLayout />, children: [
        {id: 'fleeting', path: '/fleeting-notes', element: <FleetingNotes />, loader: fleetingLoader, children: [
            {path: '', element: <ViewDefault />},
            {path: ':id', element: <ViewNote />}
        ]},
        {path: '/literature-notes', element: <LiteratureNotes /> },
        {path: '/permanent-notes', element: <PermanentNotes /> },
    ]}
]);

function App() {

  return <RouterProvider router={router} />
}

export default App
