import React, { FC } from 'react'
import { motion } from 'framer-motion'

interface IArmenianFlag {
    isTransparent: boolean;
}

const ArmeinanFlag: FC<IArmenianFlag> = ({ isTransparent }) => {
    const headerClasses = {
        background: isTransparent ? "bg-white" : "bg-black",
        title: !isTransparent ? "text-white" : "text-black",
        paragraph: !isTransparent ? "text-slate-500" : "text-black",
    };

    return (
        <div>
            <motion.div animate={{
                x: [-20, 0, 20, 0, 0, 0, 0, -20],
                y: [0, 0, 0, 0, 0, 5, 0, 0]
            }} transition={{
                duration: 2,
                repeat: Infinity
            }} className='h-[10px] w-[40px] bg-red-500 rounded-t-lg'></motion.div>
            <div className='h-[10px] w-[40px] relative bg-blue-500'>
            </div>
            <motion.div animate={{
                x: [20, 0, -20, 0, 0, 0, , 0, 20],
                y: [0, 0, 0, 0, 0, -5, 0, 0]
            }} transition={{
                duration: 2,
                repeat: Infinity
            }} className='h-[10px] w-[40px] bg-orange-500 rounded-b-lg'></motion.div>
            <span className={`text-[8px] line-clamp-1 text-white w-full ${headerClasses.title}`}>Artsakh</span>
        </div>
    )
}

export default ArmeinanFlag