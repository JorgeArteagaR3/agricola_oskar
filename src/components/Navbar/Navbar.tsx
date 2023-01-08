import React, { useEffect, useState } from "react";
import Logo from "../../assests/images/logo.png";
import Hero from "../Hero/Hero";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/" },
        { name: "Gallery", path: "/" },
        { name: "Blog", path: "/blog" },
    ];
    useEffect(() => {
        isOpen
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "");
    }, [isOpen]);
    return (
        <header
            className="bg-myblack h-[300px] md:h-[450px] lg:h-[600px] p-[20px] md:px-[70px] relative 
        rounded-b-[40px] lg:rounded-b-[70px] mb-[50px] md:mb-[90px]"
        >
            <nav className="flex items-center justify-between mb-[10px] md:mb-[30px]">
                <img
                    src={Logo}
                    className="h-[30px] md:h-[60px] z-40"
                    alt="logo"
                />
                <ul
                    className={
                        isOpen
                            ? "list-none fixed w-screen h-screen overflow-hidden left-0 top-0 text-left bg-mybg flex items-center justify-center flex-col gap-5 text-2xl z-30"
                            : "hidden lg:block lg:flex lg:gap-16 text-base justify-self-center"
                    }
                >
                    {navLinks.map((item) => (
                        <Link
                            to={item.path}
                            key={item.name}
                            className={isOpen ? "" : "text-white"}
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </ul>

                <div
                    className={
                        isOpen
                            ? "menu flex w-[20px] h-[15px] md:w-[30px] md:h-[22.5px] flex effect z-40"
                            : "menu flex w-[20px] h-[15px] md:w-[30px] md:h-[22.5px] flex z-20 lg:invisible"
                    }
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            <Hero />
            <div
                className="mx-auto w-full flex h-[40px] w-[290px] absolute
            bottom-[-20px] inset-x-0 shadow rounded-full justify-between py-[5px] md:py-[10px] pl-[20px] pr-[10px] md:inset-x-auto md:h-[60px]
            md:bottom[-30px] md:w-[400px] "
                style={{ background: "white" }}
            >
                <input
                    className="bg-red-400 focus:outline-none w-6/12 text-xs md:text-sm "
                    placeholder="example@gmail.com"
                    style={{ background: "none" }}
                    type="email"
                />
                <button className="bg-primary px-[10px] h-full font-bold text-white text-xs md:text-sm w-5/12 rounded-full">
                    Contact Us
                </button>
            </div>
        </header>
    );
};

export default Navbar;
