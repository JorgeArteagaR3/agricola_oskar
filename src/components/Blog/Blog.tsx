import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import sanityClient from "../../client";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url/";
import { getImageDimensions } from "@sanity/asset-utils";
import { featured } from "../../types";
import "./blog.css";
const Blog = (): any => {
    const [blogPost, setBlogPost] = useState<any>({});
    const [extraPosts, setExtraPosts] = useState([]);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post" && slug.current == '${slug}'][0]{
            title,
            body,
            publishedAt, 
            mainImage{
            asset->{
            url
                        }
                }
          }`
            )
            .then((data) => {
                setBlogPost(data);
                document.title = data.title;
            });
    }, [slug]);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
            _id,
            title,
            slug,
            mainImage{
            asset->{
            url
                        }
                }
          }`
            )
            .then((data) => {
                setExtraPosts(data);
            });
    }, []);
    const SampleImageComponent = ({
        value,
        isInline,
    }: {
        value: any;
        isInline: any;
    }) => {
        const { width, height } = getImageDimensions(value);
        return (
            <img
                src={urlBuilder(sanityClient)
                    .image(value)
                    .width(isInline ? 100 : 800)
                    .fit("max")
                    .auto("format")
                    .url()}
                alt={value.alt || " "}
                loading="lazy"
                style={{
                    // Display alongside text if image appears inside a block text span
                    display: isInline ? "inline-block" : "block",

                    // Avoid jumping around with aspect-ratio CSS property
                    aspectRatio: width / height,
                }}
            />
        );
    };
    const imageComponent = {
        types: {
            image: SampleImageComponent,
            // Any other custom types you have in your content
            // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
        },
    };
    const dateToString = (text: string) => {
        const d = new Date(text).toString();
        const newarr = d.split(" ").slice(1, 4);
        const [a, b, c] = newarr;
        const mydate = `${a} ${b}, ${c}`;

        return mydate.toUpperCase();
    };
    dateToString(blogPost.publishedAt);

    return (
        <section className="mb-10 blog-container">
            <div className="mx-auto blog flex flex-col gap-3 px-6 min-h-[800px] mb-5">
                <div>
                    <p className="opacity-50">
                        {dateToString(blogPost.publishedAt)}
                    </p>
                    <h2 className="font-bold text-lg md:text-2xl lg:text-4xl">
                        {blogPost.title}
                    </h2>
                </div>
                <PortableText
                    value={blogPost.body}
                    components={imageComponent}
                />
            </div>
            <div className="mx-auto blog px-6">
                <h3 className="font-bold text-2xl mb-5">Featured</h3>
                <div className="flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-1">
                    {extraPosts.map((item: featured) => (
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
