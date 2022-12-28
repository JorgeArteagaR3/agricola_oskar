import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
    const socialIcons = [FaFacebookF, AiOutlineTwitter, FaInstagram];
    return (
        <footer className="bg-myblack">
            <div className="flex flex-col items-center justify-center py-[50px]">
                <div className="flex flex-col items-center justify-center gap-5 md:w-[70%]">
                    <h3 className="text-mybg text-2xl md:text-[28px] lg:text-[32px] font-bold tracking-[2px]">
                        Follow Us
                    </h3>
                    <div className="flex items-center justify-center gap-5">
                        {socialIcons.map((Icon, index) => {
                            return (
                                <Icon
                                    key={index}
                                    className="w-auto h-5 md:h-[25px] lg:h-[30px] fill-mybg"
                                />
                            );
                        })}
                    </div>
                    <div className="border-b border-mybg w-[80%]"></div>
                    <p className="text-mybg font-bold text-xs md:text-sm lg:text-base tracking-[2px]">
                        Copyright © 2022 Agricola Oskar - Perú
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
