import { useEffect, useState } from "react";
import { getAllBlogs as getAllBlogsService } from "../services/blog";

export const useGetAllBlogs = () => {
    const [allBlogs, setAllsBlogs] = useState([]);
    useEffect(() => {
        getAllBlogs();
    }, []);
    const getAllBlogs = async () => {
        try {
            const data = await getAllBlogsService();
            setAllsBlogs(data);
        } catch (e: unknown) {
            if (e instanceof Error) console.log(e);
        }
    };
    return allBlogs;
};
