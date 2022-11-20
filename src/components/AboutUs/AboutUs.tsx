import React from "react";
import AboutSecondPic from "../../assests/images/about-2.png";
import AboutThirdPic from "../../assests/images/about-3.jpg";

const AboutUs = () => {
    return (
        <section className="mb-32 md:mb-52 lg:mb-72">
            <div
                className="py-5 px-[50px] md:px-[10%] md:justify-center w-[350px] h-[350px] md:w-[600px] md:h-[600px] lg:w-[900px] lg:h-[900px] bg-white rounded-full -translate-x-10 flex 
                items-center flex-col gap-[15px] md:gap-[30px] lg:gap-[50px]  text-center relative"
            >
                <h2 className="text-primary font-bold text-lg md:text-2xl mt-[20px] lg:text-4xl">
                    About Us
                </h2>
                <h3 className="text-secondary font-bold text-2xl md:text-[40px] md:leading-[44px] lg:text-6xl">
                    We are a mango exporter company located on Yautan, Casma
                </h3>
                <p className="text-xs md:text-base lg:text-2xl lg:leading-9">
                    We are an exporting company with experience in Mango and
                    Avocado production from Casma Valley. Our goal is to bring
                    high-quality fruits to international markets.
                </p>
                <div className="absolute w-[30%] h-[30%] top-2 right-[-30px] md:right-[-50px]">
                    <img
                        className=" w-full h-full rounded-[20px] rotate-[-20deg]"
                        src="https://agricola-oskar-8kgw8mwnj.now.sh/static/images/chankillofarmersmangokent2.jpg"
                    />
                </div>
                <div className="absolute w-[25%] h-[35%] bottom-[-25%] left-16 md:left-24">
                    <img
                        className=" w-full h-full rounded-[20px] rotate-[5deg]"
                        src={AboutSecondPic}
                    />
                </div>
                <div className="absolute w-[40%] h-[20%] -bottom-[10%] -right-5">
                    <img
                        className=" w-full h-full rounded-[10px] "
                        src={AboutThirdPic}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
