import { useEffect } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import MorePosts from "../components/MorePosts/MorePosts";

const Home = () => {
    useEffect(() => {
        document.title = "Agricola Oskar";
    }, []);
    return (
        <main className="w-full ">
            <AboutUs />
            <Gallery />
            <Featured />
            <MorePosts keyword="collection" />
            <MorePosts keyword="another" />
        </main>
    );
};

export default Home;
