import React, { useEffect, useState } from "react";
import sanityClient from "../../client";
interface featured {
    mainImage: { asset: { url: string } };
    title: string;
}
const Featured = () => {
    const [featured, setFeatured] = useState([]);
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
            _id,
            title, 
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
    console.log(featured);
    return (
        <section className="px-5 md:px-8 lg:px-12">
            <h2 className="h2-title">Featured</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mb-10">
                {featured.map((item: featured) => {
                    return (
                        <article>
                            <div className="relative">
                                <img
                                    src={item.mainImage?.asset.url}
                                    alt={item.title}
                                    className="h-[130px] md:h-[160px] lg:h-[250px] w-full rounded-[10px] md:rounded-[40px] object-cover"
                                />
                                <p
                                    className="w-[90%] text-center bg-secondary h-[40px] md:h-[50px] lg:h-[70px] text-white rounded-full 
                                    text-[10px] md:text-sm lg:text-base flex justify-center items-center font-bold px-[20px] md:px-[35px] 
                                    absolute z-100 bottom-[-20px] md:bottom-[-25px] lg:bottom-[-35px] inset-x-0 mx-auto"
                                >
                                    {item.title}
                                </p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Featured;
