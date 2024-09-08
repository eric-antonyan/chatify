import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaChevronDown, FaRegComment, FaXmark } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import Dropdown from "./Dropdown";

interface IHeader {
    setIsTransparent: any;
    isTransparent: boolean;
}

const Header: FC<IHeader> = ({ setIsTransparent, isTransparent }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsTransparent(false);
        } else {
            setIsTransparent(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = [
        {
            content: "Contact Us📧",
            to: "",
        },
        {
            content: "Report Us❗",
            to: "",
        },
        {
            content: "Support💪",
            to: "",
        },
        {
            content: "Getting started!",
            to: "",
            dropdown: true,
            dropdownItems: [
                {
                    id: 0,
                    content: "Register",
                    to: "",
                },
                {
                    id: 2,
                    content: "Login",
                    to: "",
                },
            ],
        },
    ];

    const headerClasses = isTransparent
        ? "bg-white text-black"
        : "bg-black shadow-0 text-white";

    return (
        <header
            className={`p-4 z-50 transition-all duration-200 sticky top-0 ${headerClasses}`}
        >
            <div
                className={`header container mx-auto flex items-center justify-between`}
            >
                <div className="flex items-center gap-2">
                    <motion.div
                        animate={{
                            marginLeft: [0, 20, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3,
                        }}
                    >
                        <FaRegComment size={"20px"} className="text-red-600" />
                    </motion.div>
                    <p className="font-bold text-2xl">
                        chatify
                        <motion.span
                            className="text-red-600"
                            animate={{
                                opacity: [0, 0.4, 1, 0.7, 0.4, 0.7, 0.4, 1, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                            }}
                        >
                            !
                        </motion.span>
                    </p>
                    <motion.div
                        animate={{
                            opacity: [0, 0.4, 1, 0.7, 0.4, 0.7, 0.4, 1, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                        }}
                        className={`bg-red-600 rounded-lg phone:hidden text-white ml-5 after:bg-red-600 after:rotate-45 pl-4 relative after:absolute after:-left-[5px] after:translate-y-1/2 after:w-[10px] after:h-[10px] p-1 px-2 text-sm`}
                    >
                        start your first chat!
                    </motion.div>
                </div>
                <AnimatePresence mode="wait">
                    {/iPad|iPhone|iPod/i.test(navigator.userAgent) ? (
                        isOpen ? (
                            <motion.ul
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5 }}
                                className={`flex tablet:w-full h-screen overflow-y-hidden tablet:left-0 phone:w-full phone:left-0 p-4 items-center phone:fixed tablet:fixed gap-6 top-[63.98px] phone:flex-col ${headerClasses}`}
                            >
                                {navLinks.map((navLink, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{
                                            delay: index * 0.1,
                                            duration: 0.5,
                                        }} // Adjust delay if needed
                                        className="flex justify-start phone:w-full phone:text-3xl font-bold"
                                    >
                                        {!navLink.dropdown ? (
                                            <Link
                                                to={navLink.to}
                                                className="hover:text-red-500 items-center flex gap-5 active:text-red-700 transition-all duration-300"
                                            >
                                                {navLink.content}{" "}
                                                {navLink.dropdown ? (
                                                    <FaChevronDown size={20} />
                                                ) : null}
                                            </Link>
                                        ) : (
                                            <Dropdown
                                                title={navLink.content}
                                                routes={navLink.dropdownItems}
                                            />
                                        )}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        ) : null
                    ) : (
                        <motion.ul
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                            className={`flex tablet:w-full overflow-y-hidden tablet:left-0 phone:w-full phone:left-0 p-4 items-center phone:fixed tablet:fixed gap-6 top-[63.98px] phone:flex-col ${headerClasses}`}
                        >
                            {navLinks.map((navLink, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.5,
                                    }} // Adjust delay if needed
                                    className="flex justify-start phone:w-full phone:text-3xl font-bold"
                                >
                                    {!navLink.dropdown ? (
                                        <Link
                                            to={"/contact"}
                                            className="hover:text-red-500 active:text-red-700 transition-all duration-300"
                                        >
                                            {navLink.content}
                                        </Link>
                                    ) : (
                                        <Dropdown
                                            title={navLink.content}
                                            routes={navLink.dropdownItems}
                                        />
                                    )}
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>

                <div
                    onClick={handleToggle}
                    className="text-red-500 desktop:hidden tablet:hidden"
                >
                    <AnimatePresence>
                        {isOpen ? (
                            <motion.div
                                initial={{ rotate: 0, opacity: 1 }}
                                whileTap={{ rotate: 45, opacity: 0 }}
                                exit={{ rotate: 0, opacity: 1 }}
                            >
                                <FaXmark
                                    className="desktop:hidden tablet:hidden cursor-pointer"
                                    size={25}
                                />
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ rotate: 0, opacity: 1 }}
                                whileTap={{ rotate: 90, opacity: 0 }}
                                exit={{ rotate: 0, opacity: 1 }}
                            >
                                <FaBars
                                    className="desktop:hidden tablet:hidden cursor-pointer"
                                    size={25}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

// ✅

export default Header;
