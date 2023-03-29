import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import CustomNav from "./components/CustomNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <CustomNav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
