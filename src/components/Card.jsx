import React from 'react'
import { motion } from "motion/react"
function card({ carddata, refrence }) {
    return (
        <>
            <motion.div
                drag dragConstraints={refrence}
                whileTap={{ scale: 0.9, rotate: 10 }}
                dragElastic={0.55}
                dragTransition={{ bounceStiffness: 10, bounceDamping: 10 }}
                id='Card'
                className='absolute flex items-center justify-center border-2 border-gray-500 overflow-hidden w-[180px] h-[250px] rounded-[30px] drop-shadow-[0px_0px_5px_rgba(0,0,1,.4)] bg-black'>
                <img className='w-full pr-2 scale-110 bg-contain' src={carddata.heroimage} alt="" />
            </motion.div>

        </>
    )
}

export default card