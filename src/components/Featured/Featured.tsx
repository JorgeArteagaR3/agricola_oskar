import { useEffect, useState } from "react";
import sanityClient from "../../client";
import { featured } from "../../types";
import { reduceText } from "../../utils/utils";
import { Link } from "react-router-dom";
import "./style.css";
const Featured = () => {
    const [featured, setFeatured] = useState([]);
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post" && "Featured" in categories[]->title]{
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
                setFeatured(data);
            });
    }, []);

    return (
        <section className="px-5 md:px-8 lg:px-12 lg:mb-[90px] mt-[40px]">
            <h2 className="h2-title">Featured</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 md:gap-y-[37px] lg:gap-y-[70px] lg:gap-x-10 mb-10">
                {featured.map((item: featured) => {
                    return (
                        <Link
                            to={`/blog/${item.slug.current}`}
                            key={item._id}
                            className="first:col-start-1 first:col-end-3 md:first:col-end-1 md:first:row-start-1 md:first:row-end-3 post-article md:hover:scale-110 duration-300"
                            onClick={() => {
                                window.scrollTo(0, 0);
                            }}
                        >
                            <article>
                                <div className="relative">
                                    <img
                                        src={item.mainImage?.asset.url}
                                        alt={item.title}
                                        className="h-[130px] md:h-[160px] lg:h-[250px] w-full rounded-[10px] md:rounded-[40px] object-cover "
                                    />
                                    <p
                                        className="w-[90%] leading-[11px] text-center bg-secondary h-[40px] md:h-[50px] lg:h-[70px] text-white rounded-full 
                                    text-[10px] md:text-sm lg:text-base flex justify-center items-center font-bold px-[20px] 
                                    absolute z-100 bottom-[-20px] md:bottom-[-25px] lg:bottom-[-35px] inset-x-0 mx-auto first:w-[50%] "
                                    >
                                        {reduceText(item.title)}
                                    </p>
                                </div>
                            </article>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Featured;
