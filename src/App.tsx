import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App bg-mybg">
            <Navbar />
            <main className="w-full">
                <AboutUs />
            </main>
        </div>
    );
}

export default App;
