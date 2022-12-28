import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url/";
import { getImageDimensions } from "@sanity/asset-utils";
import "./blog.css";
const Blog = (): any => {
    const [blogPost, setBlogPost] = useState<any>({});
    const { slug } = useParams();
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post" && slug.current == '${slug}'][0]{
         
            title,
            body,
            mainImage{
            asset->{
            url
                        }
                }
          }`
            )
            .then((data) => {
                setBlogPost(data);
            });
    }, []);
    console.log(blogPost);

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
    return (
        <div className="mx-auto blog flex flex-col gap-3 px-6">
            <PortableText
                value={blogPost.body}
                components={imageComponent}
            />
        </div>
    );
};

export default Blog;
