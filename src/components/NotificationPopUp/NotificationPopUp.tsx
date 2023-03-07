import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { SetStateAction } from "react";
import clsx from "clsx";

export const NotificationPopUp = ({
    isNotificationShowing,
    setIsNotificationShowing,
}: {
    isNotificationShowing: boolean;
    setIsNotificationShowing: (prevState: SetStateAction<boolean>) => void;
}) => {
    return (
        <div
            className={clsx(
                "bg-secondary w-[220px] fixed right-5 px-4 py-2 text-sm z-30 flex items-center gap-4 justify-center rounded text-white transition-all duration-300",
                isNotificationShowing ? "opacity-1 block" : "opacity-0 hidden"
            )}
        >
            <AiOutlineCheckCircle
                size={26}
                className="text-white"
                fill="white"
            />
            <div className="text-white">
                <strong className="text-white text-xs">Success</strong>
                <p className="text-white text-xs">Thank's for subscribing!</p>
            </div>
            <IoIosClose
                className="absolute right-2 top-2 cursor-pointer"
                size={16}
                onClick={() => {
                    setIsNotificationShowing(false);
                }}
            />
        </div>
    );
};
