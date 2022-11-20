import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallery from "./components/Gallery/Gallery";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App bg-mybg overflow-hidden">
            <Navbar />
            <main className="w-full">
                <AboutUs />
                <Gallery />
            </main>
        </div>
    );
}

export default App;
