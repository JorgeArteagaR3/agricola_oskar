import { useEffect, useState } from "react";
import { getBlogs } from "../../services/getBlogs";
import { featured } from "../../types";
import { reduceText } from "../../utils/utils";
import { Link } from "react-router-dom";
export const Blogs = () => {
    const [blogArticles, setBlogArticles] = useState([]);
    useEffect(() => {
        getBlogs().then((data) => {
            setBlogArticles(data);
        });
    }, []);

    return (
        <div className="px-5 md:px-8 lg:px-12 min-h-[1000px]">
            <h2 className="text-center h2-title">Articles</h2>
            <div className="grid gap-4 md:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
                {blogArticles.map((blog: featured) => (
                    <Link
                        to={"/blog/" + blog.slug.current}
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                        className="md:hover:scale-110 duration-300"
                        key={blog._id}
                    >
                        <article
                            key={blog._id}
                            className="flex flex-col gap-2.5 custom-article"
                        >
                            <img
                                src={blog.mainImage.asset.url}
                                alt={blog.title}
                                className="h-[235px] md:h-[180px] lg:h-[280px] rounded-[40px] object-cover"
                            />
                            <p className="text-center text-base">
                                {reduceText(blog.title)}
                            </p>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
};
