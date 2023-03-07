import React, { useEffect, useState } from "react";
import Logo from "../../assests/images/logo.png";
import Hero from "../Hero/Hero";
import { Link } from "react-router-dom";
import "./navbar.css";
import { SubscribeBtn } from "../SubscribeBtn/SubscribeBtn";
import { NotificationPopUp } from "../NotificationPopUp/NotificationPopUp";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isNotificationShowing, setIsNotificationShowing] = useState(true);

    const showNotificationPopUp = () => {
        setIsNotificationShowing(true);
        setTimeout(() => {
            setIsNotificationShowing(false);
        }, 4000);
    };
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Gallery", path: "/gallery" },
        { name: "Blog", path: "/blog" },
    ];
    useEffect(() => {
        isOpen
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "");
    }, [isOpen]);

    const handleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="relative bg-myblack h-[300px] md:h-[450px] lg:h-[600px] p-[20px] md:px-[70px] rounded-b-[40px] lg:rounded-b-[70px] mb-[50px] md:mb-[90px]">
            <NotificationPopUp
                isNotificationShowing={isNotificationShowing}
                setIsNotificationShowing={setIsNotificationShowing}
            />
            <nav className="flex items-center justify-between mb-[10px] md:mb-[30px]">
                <Link
                    to={"/"}
                    className="hover:scale-125 duration-300"
                >
                    <img
                        src={Logo}
                        className="h-[30px] md:h-[60px] z-40"
                        alt="logo"
                    />
                </Link>
                <ul
                    className={
                        isOpen
                            ? "list-none fixed w-screen h-screen overflow-hidden left-0 top-0 text-left bg-mybg flex items-center justify-center flex-col gap-5 text-2xl z-30"
                            : "hidden lg:block lg:flex lg:gap-16 text-base justify-self-center"
                    }
                >
                    {navLinks.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className={
                                    isOpen
                                        ? ""
                                        : "text-white md:hover:text-2xl duration-300"
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    className={
                        isOpen
                            ? "menu flex w-[20px] h-[15px] md:w-[30px] md:h-[22.5px] flex effect z-40"
                            : "menu flex w-[20px] h-[15px] md:w-[30px] md:h-[22.5px] flex z-20 lg:invisible"
                    }
                    onClick={handleModal}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
            <Hero />
            <SubscribeBtn showNotificationPopUp={showNotificationPopUp} />
        </header>
    );
};

export default Navbar;
