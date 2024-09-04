import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegComment, FaXmark } from "react-icons/fa6"
import { motion } from "framer-motion"

const Header = () => {
    return (
        <header className='p-4 shadow-2xl'>
            <div className='header container mx-auto bg-white flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <motion.div animate={{
                        marginLeft: [0, 20, 0],
                        opacity: [0, 1, 0]
                    }}

                        transition={{
                            repeat: Infinity,
                            duration: 3
                        }}>
                        <FaRegComment size={"20px"} className='text-red-600' />
                    </motion.div>
                    <p className='font-bold text-2xl'>chatify!</p>
                    <motion.div animate={{
                        opacity: [0, 0.4, 1, 0.7, 0.4, 0.7, 0.4, 1, 0]
                    }}

                        transition={{
                            repeat: Infinity
                        }} className='bg-red-600 rounded-lg phone:hidden text-white ml-5 after:bg-red-600 after:rotate-45 pl-4 relative after:absolute after:-left-[5px] after:translate-y-1/2 after:w-[10px] after:h-[10px] p-1 px-2 text-sm'>start your first chat!</motion.div>
                </div>
                <ul className='flex tablet:w-full tablet:left-0 phone:w-full phone:left-0 p-4 items-center phone:fixed tablet:fixed bg-white gap-6 top-[63.98px] phone:flex-col'>
                    <li className='flex justify-start w-full text-3xl font-bold'>
                        <Link to={"/contact"} className='hover:text-red-500 active:text-red-700 transition-all duration-300'>Contact Us📧</Link>
                    </li>
                    <li className='flex justify-start w-full font-bold'>
                        <Link to={"/report"} className='hover:text-red-500 text-3xl active:text-red-700 transition-all duration-300'>Report Us❗</Link>
                    </li>
                    <li className='flex justify-start w-full font-bold'>
                        <Link to={"/support"} className='hover:text-red-500 text-3xl active:text-red-700 transition-all duration-300'>Support💪</Link>
                    </li>
                    <li className='flex justify-start w-full font-bold'>
                        <Link to={"/getting-started"} className='hover:text-red-500 text-3xl active:text-red-700 transition-all duration-300'>Getting started!🚀</Link>
                    </li>
                </ul>
                <FaXmark className='desktop:hidden tablet:hidden' size={25} />
            </div>
        </header>
    )
}

// ✅

export default Header