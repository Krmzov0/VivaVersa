import React from 'react'
import { motion } from 'framer-motion'

const AnimatedH1 = () => {
    return (
        <div className='flex h1div flex-col justify-center items-center text-center'>
            <div className="flex items-center gap-x-2 md:gap-x-6">
                <div className='h1class transition-all flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 }}>D</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>S</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>G</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>N</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}>N</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36 }}>G</motion.div>
                </div>


            </div>

            <div className="flex md:hidden items-center gap-x-2 md:gap-x-6">
                <div className='h1class transition-all flex md:hidden  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.40 }}>F</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.44 }}>O</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 }}>R</motion.div>
                </div>

                <div className='h1class transition-all flex md:hidden  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52 }}>T</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.56 }}>H</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>E</motion.div>
                </div>
            </div>

            <div className="flex items-center gap-x-2 md:gap-x-6">
                <div className='h1class transition-all hidden md:flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.40 }}>F</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.44 }}>O</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 }}>R</motion.div>
                </div>

                <div className='h1class transition-all hidden md:flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52 }}>T</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.56 }}>H</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>E</motion.div>
                </div>

                <div className='h1class transition-all flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.64 }}>H</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68 }}>U</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72 }}>M</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.76 }}>A</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>N</motion.div>
                </div>

                <div className='h1class transition-all flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>T</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.84 }}>O</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.88 }}>U</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.92 }}>C</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.96 }}>H</motion.div>
                </div>

            </div>


            <div className="flex items-center gap-x-2 md:gap-x-6">
                <div className='h1class transition-all flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.04 }}>N</motion.div>
                </div>

                <div className='h1class transition-all flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.08 }}>A</motion.div>
                </div>

                <div className='h1class transition-all flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.22 }}>D</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.26 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}>G</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.34 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.38 }}>T</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.42 }}>A</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.46 }}>L</motion.div>
                </div>

                <div className='h1class transition-all hidden md:flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>W</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.54 }}>O</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.58 }}>R</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.62 }}>L</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.66 }}>D</motion.div>
                </div>

            </div>

            <div className="flex md:hidden items-center gap-x-2 md:gap-x-6">
                <div className='h1class transition-all flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>W</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.54 }}>O</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.58 }}>R</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.62 }}>L</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.66 }}>D</motion.div>
                </div>
            </div>

        </div>
    )
}

export default AnimatedH1