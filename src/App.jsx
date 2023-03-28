import "./App.css";
import Home from "./pages/Home";
import CustomNav from "./components/CustomNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <CustomNav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
