import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/homepage.jsx";
import Project from "./pages/projectpage.jsx"

export default function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/project" element={<Project />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}