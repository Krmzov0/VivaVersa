import React from 'react'
import { motion } from 'framer-motion'

const AnimatedH1De = () => {
    return (
        <div className='flex h1div flex-col justify-center items-center text-center'>
            <div className="flex items-center gap-x-2 sm:gap-x-6">
                <div className='h1class transition-all flex  justify-center items-center leading-[45px] sm:leading-[90px] duration-300 text-3xl sm:text-7xl text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 }}>D</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>S</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>C</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>H</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}>G</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}>N</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>C</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.44 }}>H</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 }}>N</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52 }}>G</motion.div>
                </div>



            </div>

            <div className="flex sm:hidden items-center gap-x-2 sm:gap-x-6">
                <div className='h1class transition-all flex sm:hidden  justify-center items-center leading-[45px] sm:leading-[90px] duration-300 text-3xl sm:text-7xl text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.56 }}>F</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>Ü</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.64 }}>R</motion.div>
                </div>

                <div className='h1class transition-all flex sm:hidden  justify-center items-center leading-[45px] sm:leading-[90px] duration-300 text-3xl sm:text-7xl text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68 }}>D</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.76 }}>E</motion.div>
                </div>

                <div className='h1class transition-all flex sm:hidden  justify-center items-center leading-[45px] sm:leading-[90px] duration-300 text-3xl sm:text-7xl text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>M</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.84 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.88 }}>N</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.92 }}>S</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.96 }}>C</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>H</motion.div>
                </div>
            </div>

            <div className="flex items-center gap-x-2 sm:gap-x-6">

                <div className='h1class transition-all hidden sm:flex  justify-center items-center leading-[45px] sm:leading-[90px] duration-300 text-3xl sm:text-7xl text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.56 }}>F</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>Ü</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.64 }}>R</motion.div>
                </div>

                <div className='h1class transition-all hidden sm:flex  justify-center items-center leading-[45px] sm:leading-[90px] duration-300 text-3xl sm:text-7xl text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68 }}>D</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.76 }}>E</motion.div>
                </div>

                <div className='h1class transition-all hidden sm:flex  justify-center items-center leading-[45px] sm:leading-[90px] duration-300 text-3xl sm:text-7xl text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>M</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.84 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.88 }}>N</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.92 }}>S</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.96 }}>C</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>H</motion.div>
                </div>

                <div className='h1class transition-all flex  justify-center items-center leading-[45px] sm:leading-[90px] duration-300 text-3xl sm:text-7xl text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.04 }}>B</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.08 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.12 }}>R</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.16 }}>Ü</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>H</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.24 }}>R</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.28 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.32 }}>N</motion.div>
                </div>

            </div>


            <div className="flex items-center gap-x-2 sm:gap-x-6">
                <div className='h1class transition-all flex  justify-center items-center leading-[45px] sm:leading-[90px] duration-300 text-3xl sm:text-7xl text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.36 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}>N</motion.div>
                </div>

                <div className='h1class transition-all flex  justify-center items-center leading-[45px] sm:leading-[90px] duration-300 text-3xl sm:text-7xl text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.44 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.48 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.52 }}>N</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.56 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }}>R</motion.div>
                </div>

                <div className='h1class transition-all flex  justify-center items-center leading-[45px] sm:leading-[90px] duration-300 text-3xl sm:text-7xl text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.64 }}>D</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.68 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.72 }}>G</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.76 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }}>T</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.84 }}>A</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.88 }}>L</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.92 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.96 }}>N</motion.div>
                </div>

                <div className='h1class transition-all hidden sm:flex  justify-center items-center leading-[45px] sm:leading-[90px] duration-300 text-3xl sm:text-7xl text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }}>W</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.04 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.08 }}>L</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.12 }}>T</motion.div>
                </div>

            </div>

            <div className="flex sm:hidden items-center gap-x-2 sm:gap-x-6">
                <div className='h1class transition-all flex  justify-center items-center leading-[45px] sm:leading-[90px] duration-300 text-3xl sm:text-7xl text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.16 }}>W</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2 }}>O</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.24 }}>R</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.28 }}>L</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.32 }}>D</motion.div>
                </div>
            </div>

        </div>
    )
}

export default AnimatedH1De