import { Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { featured } from "../../types";
import "./blog.css";
import { useBlog } from "../../hooks/useBlog";

const Blog = (): any => {
    const { blog, imageComponent, featuredBlogs, error } = useBlog();

    if (error)
        return (
            <p className="opacity-50 w-full h-[400px] grid place-items-center font-bold text-2xl">
                {error}
            </p>
        );

    return (
        <section className="mb-10 blog-container">
            <div className="mx-auto blog flex flex-col gap-3 px-6 min-h-[800px] mb-5">
                <div>
                    <p className="opacity-50">{blog.date}</p>
                    <h2 className="font-bold text-lg md:text-2xl lg:text-4xl">
                        {blog.title}
                    </h2>
                </div>
                <PortableText value={blog.body} components={imageComponent} />
            </div>
            <div className="mx-auto blog px-6">
                <h3 className="font-bold text-2xl mb-5">Featured</h3>
                <div className="flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-1">
                    {featuredBlogs.map((item: featured) => (
                        <Link
                            to={`/blog/${item.slug.current}`}
                            key={item._id}
                            className="md:hover:scale-90 duration-300"
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                        >
                            <article className="flex items-center gap-5 w-full">
                                <img
                                    src={item.mainImage.asset.url}
                                    alt={item.title}
                                    className="w-[150px] object-cover"
                                />
                                <p className="text-base font-bold">
                                    {item.title}
                                </p>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
