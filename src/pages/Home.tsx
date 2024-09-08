import React, { useState } from "react";
import Header from "../components/Header";
import { FaLock, FaRegUser, FaUser } from "react-icons/fa6";
import { motion } from "framer-motion";
import ArmenianFlag from "../components/ArmenianFlag";

const Home = () => {
    const [isTransparent, setIsTransparent] = useState(true);
    const headerClasses = {
        background: isTransparent ? "bg-white" : "bg-black",
        title: !isTransparent ? "text-white" : "text-black",
        paragraph: !isTransparent ? "text-slate-500" : "text-black",
    };

    const data = [
        {
            title: "About US",
            Icon: FaUser,
            animation: true,
            content: (
                <p>
                    Welcome to <span className="text-red-500">chatify</span>
                    —where innovation meets excellence, and our commitment to
                    you drives everything we do. Our journey began with a vision
                    to make a difference, and today, we stand as a testament to
                    our dedication, expertise, and passion. Who We Are At{" "}
                    <span className="text-red-500">chatify</span>, we are a
                    dynamic team of professionals united by a common purpose: to
                    deliver exceptional solutions and services that exceed
                    expectations. Our diverse team brings together a wealth of
                    experience, creativity, and technical prowess, allowing us
                    to tackle challenges from multiple perspectives and deliver
                    outstanding results. Our Mission Our mission is simple yet
                    profound: to provide innovative and effective solutions that
                    address the needs of our clients and contribute to their
                    success. We are committed to fostering growth, driving
                    progress, and setting new standards in our industry. Our
                    client-centric approach ensures that every solution we offer
                    is tailored to meet your unique needs and objectives.
                </p>
            ),
        },
        {
            title: "We are strong! 💪",
            Icon: null,
            animation: true,
            content: (
                <p>
                    At <span className="text-red-500">chatify</span>, we embody
                    strength in every aspect of our work. Our unwavering
                    commitment to excellence, resilience in the face of
                    challenges, and relentless pursuit of innovation define who
                    we are and how we operate.
                </p>
            ),
        },
        {
            title: "Performance and security!",
            Icon: FaLock,
            animation: true,
            content: (
                <p>
                    Welcome to <span className="text-red-500">chatify</span>,
                    where we prioritize delivering a fast, responsive, and
                    secure messaging experience. Our chat application is
                    designed to ensure that your conversations are smooth,
                    efficient, and protected.
                </p>
            ),
        },
        {
            Icon: ArmenianFlag,
            animation: false,
            title: "Stand with Armenia and Artsakh",
            content: (
                <p>
                    At <span className="text-red-500">chatify</span>, we stand
                    in solidarity with Armenia and Artsakh during these
                    challenging times. Our hearts are with the people of Armenia
                    and Artsakh as they face significant challenges and seek to
                    uphold their rights, heritage, and sovereignty. Our
                    Commitment We believe in the fundamental principles of
                    justice, peace, and human dignity. The rich cultural
                    heritage and resilient spirit of Armenia and Artsakh inspire
                    us, and we are committed to supporting their right to
                    self-determination and peace.
                </p>
            ),
        },
    ];
    return (
        <>
            <Header
                isTransparent={isTransparent}
                setIsTransparent={setIsTransparent}
            />
            {data.map((item, index) => (
                <div
                    className={`container p-3 mx-auto ${headerClasses.background} transition-all duration-300`}
                >
                    <h2
                        className={`text-3xl font-bold flex items-center justify-start gap-3 ${headerClasses.title}`}
                    >
                        {item.title}
                        <motion.div
                            className="-y-6 inline-flex text-red-500"
                            animate={
                                item?.animation
                                    ? {
                                          scale: [
                                              0.6, 1, 0.7, 0.7, 1, 0.6, 0.6,
                                              0.6, 0.6,
                                          ],
                                          rotate: [0, 0, 360, 0],
                                      }
                                    : {}
                            }
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                            }}
                        >
                            {item.Icon ? (
                                <item.Icon isTransparent={isTransparent} />
                            ) : null}
                        </motion.div>
                    </h2>
                    <p className={`text-sm mt-5 ${headerClasses.paragraph}`}>
                        {item.content}
                    </p>
                </div>
            ))}
        </>
    );
};

export default Home;
