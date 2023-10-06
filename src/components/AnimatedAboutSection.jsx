import React from 'react'
import { motion } from 'framer-motion'

const AnimatedAboutSection = () => {
    return (
        <div className="unbounded text-[16px] flex sm:hidden  sm:text-[#17191b] gap-y-2 text-[#878c8e] sm:text-4xl font-light flex-col">
            <div className="overflow-hidden"><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}><h1 className="overflow-hidden">VIVAVERSA, A DIGITAL DESIGN</h1></motion.div></div>

            <div className='overflow-hidden'><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}><h1 className="overflow-hidden">AGENCY WITH GLOBAL CLIENTS</h1></motion.div></div>
            <div className='overflow-hidden'><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}><h1 className="overflow-hidden">WORLDWIDE, KNOWS THAT </h1></motion.div></div>
            <div className='overflow-hidden'><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}><h1 className="overflow-hidden">PRODUCT DESIGN ISN&apos;T JUST</h1></motion.div></div>
            <div className='overflow-hidden'><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}><h1 className="overflow-hidden">ABOUT AESTHETICS</h1></motion.div></div>

            <div className='overflow-hidden'><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}><h1 className="mt-8 overflow-hidden">IT&apos;S ABOUT CRAFTING SOLUTIONS</h1></motion.div></div>
            <div className='overflow-hidden'><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}><h1 className="overflow-hidden">THAT GIVE YOU A COMPETITIVE EDGE</h1></motion.div></div>
            <div className='overflow-hidden'><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}><h1 className="overflow-hidden">BY ENHANCING CONVERSION RATES,</h1></motion.div></div>
            <div className='overflow-hidden'><motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}><h1 className="overflow-hidden">USER ENGAGEMENT, AND BRAND PERCEPTION</h1></motion.div></div>

        </div>
    )
}

export default AnimatedAboutSection