import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./routes/RootLayout.tsx";

const router = createBrowserRouter([
    { path: '/', element: <RootLayout />}
]);

function App() {

  return <RouterProvider router={router} />
}

export default App
