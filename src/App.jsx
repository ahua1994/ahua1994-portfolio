import "./App.css";
import Home from "./pages/Home";
import Certs from "./pages/Certs";
import Error from "./pages/Error";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import CustomNav from "./components/CustomNav";
import CVContextProvider from "./contexts/CVContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <CVContextProvider>
                    <CustomNav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/certifications" element={<Certs />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="*" element={<Error />}></Route>
                    </Routes>
                </CVContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
