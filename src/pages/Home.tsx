import { useEffect } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Featured from "../components/Featured/Featured";
import Gallery from "../components/Gallery/Gallery";
import MorePosts from "../components/MorePosts/MorePosts";

const Home = () => {
    useEffect(() => {
        document.title = "Agricola Oskar";
    }, []);
    return (
        <main className="">
            <AboutUs />
            <Gallery />
            <Featured />
            <MorePosts keyword="collection" />
            <MorePosts keyword="another" />
        </main>
    );
};

export default Home;
