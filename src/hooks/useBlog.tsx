import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import { getBlogBySlug } from "../services/blog";
import { useGetAllBlogs } from "./useGetAllBlogs";

export const useBlog = () => {
    const [blogPost, setBlogPost] = useState<any>({});
    const [error, setError] = useState("");
    const featuredBlogs = useGetAllBlogs();

    const { slug } = useParams();

    useEffect(() => {
        getBlog();
    }, []);

    const getBlog = async () => {
        try {
            const data = await getBlogBySlug(slug!);
            setBlogPost(data);
            document.title = data.title;
        } catch (e: unknown) {
            if (e instanceof Error) setError(e.message);
        }
    };

    const SampleImageComponent = ({
        value,
        isInline,
    }: {
        value: any;
        isInline: boolean;
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

    const blog = {
        date: dateToString(blogPost.publishedAt),
        title: blogPost.title,
        body: blogPost.body,
    };
    return { imageComponent, blog, featuredBlogs, error };
};
