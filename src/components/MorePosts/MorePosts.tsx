import React, { useEffect, useState } from "react";
import sanityClient from "../../client";
import { featured } from "../../types";
import { reduceText } from "../../utils/utils";
import "./morePosts.css";
const MorePosts = ({ keyword }: { keyword: string }) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post" && "${keyword}" in categories[]->title]{
                    _id,
                              title, 
                              mainImage{
                              asset->{
                              url
                            }
                        }
                  }    
              `
            )
            .then((data) => {
                setPosts(data);
            });
    }, []);

    return (
        <section className="px-5 md:px-8 lg:px-12 mb-7 md:mb-10">
            <h2 className="h2-title">{keyword}</h2>
            <div className="grid md:grid-cols-3 gap-y-6 gap-x-6 md:gap-y-[37px] lg:gap-[60px] ">
                {posts.map((post: featured) => (
                    <article
                        key={post._id}
                        className="flex flex-col gap-2.5 custom-article"
                    >
                        <img
                            src={post.mainImage.asset.url}
                            alt={post.title}
                            className="h-[235px] md:h-[180px] lg:h-[280px] rounded-[40px] object-cover"
                        />
                        <p className="text-center text-base">
                            {reduceText(post.title)}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default MorePosts;
