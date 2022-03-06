import "./App.css";

import Landing from "./components/Landing";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<Landing />} />
            </Routes>
        </div>
    );
}

export default App;
