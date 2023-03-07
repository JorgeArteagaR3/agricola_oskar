import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const SubscribeBtn = ({
    showNotificationPopUp,
}: {
    showNotificationPopUp: () => void;
}) => {
    const [email, setEmail] = useState("");
    const publicKey = "GhtGl21PNs9VTfQFj";

    function validateEmail(text: string) {
        const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
        return emailPattern.test(text);
    }

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateEmail(email)) {
            emailjs
                .send(
                    "service_mo4yudm",
                    "template_itustla",
                    {
                        from_name: "Agricola OSKAR EIRL",
                        user_email: email,
                    },
                    publicKey
                )
                .then((res) => {
                    console.log(res.text);
                    if (res.status == 200) {
                        showNotificationPopUp();
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            alert("Email Incorrecto");
        }
    };

    return (
        <form
            className="mx-auto w-full flex h-[40px] w-[290px] absolute
                        bottom-[-20px] inset-x-0 shadow rounded-full justify-between py-[5px] md:py-[10px] pl-[20px] pr-[10px] md:inset-x-auto md:h-[60px]
                        md:bottom[-30px] md:w-[400px] "
            style={{ background: "white" }}
            onSubmit={sendEmail}
        >
            <input
                className="bg-red-400 focus:outline-none w-6/12 text-xs md:text-sm "
                placeholder="example@gmail.com"
                style={{ background: "none" }}
                value={email || ""}
                type="email"
                onChange={(e) => {
                    console.log(e.target.value);

                    setEmail(e.target.value.toLowerCase());
                }}
            />
            <button
                type="submit"
                className="bg-primary px-[10px] h-full font-bold text-white text-xs md:text-sm w-5/12 rounded-full"
            >
                Contact Us
            </button>
        </form>
    );
};
