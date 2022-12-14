import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallery from "./components/Gallery/Gallery";
function App() {
    return (
        <BrowserRouter>
            <div className="App bg-mybg max-w-[1024px] mx-auto">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route />
                    <Route
                        path="/blog/:slug"
                        element={<Blog />}
                    />
                    <Route />
                    <Route
                        path="/about"
                        element={<AboutUs />}
                    />
                    <Route />
                    <Route
                        path="/gallery"
                        element={<Gallery />}
                    />
                    <Route />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
