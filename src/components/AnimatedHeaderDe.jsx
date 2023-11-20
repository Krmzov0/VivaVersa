import React from 'react'
import { motion } from 'framer-motion'

const AnimatedH1De = () => {
    return (
        <div className='flex h1div flex-col justify-center items-center text-center'>
            <div className="flex items-center gap-x-2 md:gap-x-6">
                <div className='h1class transition-all flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 }}>G</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>S</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>T</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>A</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>L</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}>T</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}>U</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36 }}>N</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>G</motion.div>
                </div>

                <div className='h1class transition-all hidden md:flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.56 }}>F</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>Ü</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.64 }}>R</motion.div>
                </div>

                <div className='h1class transition-all hidden md:flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68 }}>D</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.76 }}>E</motion.div>
                </div>

                <div className='h1class transition-all flex md:hidden  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.56 }}>F</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>Ü</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.64 }}>R</motion.div>
                </div>

            </div>

            <div className="flex md:hidden items-center gap-x-2 md:gap-x-6">


                <div className='h1class transition-all flex md:hidden  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68 }}>D</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.76 }}>E</motion.div>
                </div>

                <div className='h1class transition-all flex md:hidden  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>M</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.84 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.88 }}>N</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.92 }}>S</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.96 }}>C</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>H</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.04 }}>L</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.08 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.12 }}>C</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.16 }}>H</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>E</motion.div>
                </div>
            </div>

            <div className="flex items-center gap-x-2 md:gap-x-6">


                <div className='h1class transition-all hidden md:flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>M</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.84 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.88 }}>N</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.92 }}>S</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.96 }}>C</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>H</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.04 }}>L</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.08 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.12 }}>C</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.16 }}>H</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>E</motion.div>
                </div>

                <div className='h1class transition-all flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.24 }}>B</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.28 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.32 }}>R</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.36 }}>Ü</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}>H</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.44 }}>R</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.48 }}>U</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.52 }}>N</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.56 }}>G</motion.div>
                </div>

                <div className='h1class transition-all flex md:hidden  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.64 }}>N</motion.div>
                </div>
            </div>

            <div className="flex items-center gap-x-2 md:gap-x-6">
                <div className='h1class transition-all hidden md:flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.64 }}>N</motion.div>
                </div>
                <div className='h1class transition-all flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.68 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.72 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.76 }}>N</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.84 }}>R</motion.div>
                </div>

                <div className='h1class transition-all flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.88 }}>D</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.72 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.76 }}>G</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }}>I</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.84 }}>T</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.88 }}>A</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.92 }}>L</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.96 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }}>N</motion.div>
                </div>

                <div className='h1class transition-all hidden md:flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.04 }}>W</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.08 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.12 }}>L</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.16 }}>T</motion.div>
                </div>

            </div>

            <div className="flex md:hidden items-center gap-x-2 md:gap-x-6">
                <div className='h1class transition-all flex  justify-center items-center leading-[45px] md:leading-[65px] xl:leading-[90px] text-3xl md:text-5xl xl:text-7xl duration-300 text-[#17191b] text-center unbounded font-light'>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.16 }}>W</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2 }}>E</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.24 }}>L</motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.28 }}>T</motion.div>
                </div>
            </div>

        </div>
    )
}

export default AnimatedH1De