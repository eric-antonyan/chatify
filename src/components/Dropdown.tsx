import React, { FC, useRef, useState, MouseEvent } from "react";
import { FaChevronDown, FaCircleDot, FaXmark } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

interface INavLink {
    content: string;
    to: string;
}

interface IDropdown {
    title: string;
    routes: INavLink[];
}

const Dropdown: FC<IDropdown> = ({ title, routes }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
    };

    return (
        <div>
            <div
                className="flex gap-3 items-center cursor-pointer"
                onClick={handleToggle}
            >
                <span className="hover:text-red-500 active:text-red-700 transition-all duration-300">
                    {title}
                </span>
                <FaChevronDown
                    className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all duration-300`}
                    size={16}
                />
            </div>
            <AnimatePresence>
                {isOpen ? (
                    <motion.div className="flex bg-black/50 items-center justify-center desktop:w-full desktop:h-screen desktop:fixed top-0 left-0">
                        <motion.ul
                            animate={{
                                opacity: 1,
                                height: "100%",
                                width: "100%",
                            }}
                            exit={{
                                height: "auto",
                                width: "auto",
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                            }}
                            className="flex flex-col items-center justify-center text-5xl gap-8 bg-white top-0 left-0 z-30"
                        >
                            <ul className="flex desktop:gap-16 phone:gap-2 phone:mt-3 phone:w-full desktop:items-center phone:flex-col tablet:flex-col">
                                {routes.map((route, index) => (
                                    <li key={index} className="cursor-pointer">
                                        <Link
                                            className="font-[600] hover:underline flex gap-3 opacity-1 items-center hover:bg-black rounded-3xl hover:text-white text-black hover:px-16 transition-all duration-500 text-3xl hover:py-5"
                                            to={route.to}
                                        >
                                            {route.content}
                                        </Link>
                                    </li>
                                ))}
                                <motion.button
                                    onClick={handleToggle}
                                    whileTap={{
                                        scale: 0.9,
                                    }}
                                    transition={{
                                        delay: 0,
                                    }}
                                    className="hover:bg-red-500 phone:hidden tablet:hidden opacity-1 rounded-full hover:text-white text-red-500 hover:px-5 transition-all duration-500 text-3xl hover:py-5"
                                >
                                    <FaXmark />
                                </motion.button>
                            </ul>
                        </motion.ul>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    );
};

export default Dropdown;
