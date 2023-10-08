import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'

const about = () => {
  return (
    <>
      <Header />
      <div className='h-screen overflow-x-hidden  w-screen relative p-0 flex flex-col items-start'>
        <div className='mt-14 sm:mt-20 pl-4 sm:pl-12'>
          <h1 className='unbounded text-5xl gap-y-6 flex flex-col sm:gap-y-0 sm:text-6xl font-light hover:font-light sm:hover:font-medium leading-[40px] sm:leading-[90px] transition-all duration-300'>
            <div className='flex gap-x-2 sm:gap-x-4 overflow-hidden'>
              <motion.div className='overflow-hidden' initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.1 }} ><h1 className='overflow-hidden'>WE</h1></motion.div>
              <motion.div className='overflow-hidden' initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.2 }} ><h1 className='overflow-hidden'>ARE</h1></motion.div>
              <motion.div className='overflow-hidden hidden sm:flex' initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.3 }} ><h1 className='overflow-hidden'>VIVA</h1></motion.div>
              <motion.div className='overflow-hidden hidden sm:flex' initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.4 }} ><h1 className='overflow-hidden'>VERSA</h1></motion.div>
            </div>

            <div className='flex sm:hidden gap-x-2 overflow-hidden'>
              <motion.div className='overflow-hidden' initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.3 }} ><h1 className='overflow-hidden'>VIVA</h1></motion.div>
              <motion.div className='overflow-hidden' initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.4 }} ><h1 className='overflow-hidden'>VERSA</h1></motion.div>
            </div>

            <div className='overflow-hidden'>
              <motion.div className='overflow-hidden' initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.5 }}><h1 className='overflow-hidden'>AGENCY</h1></motion.div>
            </div>
          </h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}><p className='mt-10 unbounded text-md text-[#878c8e] font-light'>We provide tailored services for businesses to succeed in the digital landscape.</p></motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 0.6 }} className='flex'>
          <div className='py-4 AboutSlider transition-all mt-20 flex overflow-x-hidden sm:overflow-x-auto w-max sm:w-max items-center border-t border-b border-[#878c8e] gap-x-8'>
            <h1 className='unbounded text-[25px] sm:text-[40px] font-light text-[#878c8e] w-max'>WE LOVE <span className='text-[#17191b]'>QUALITY</span></h1>
            <div className='h-5 w-5 bg-[#17191b] flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>

            <h1 className='unbounded text-[25px] sm:text-[40px] font-light text-[#878c8e] w-max'>WE LOVE <span className='text-[#17191b]'>COLLABORATION</span></h1>
            <div className='h-5 w-5 bg-[#17191b] flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>

            <h1 className='unbounded text-[25px] sm:text-[40px] font-light text-[#878c8e] w-max'>WE LOVE <span className='text-[#17191b]'>SIMPLICITY</span></h1>
            <div className='h-5 w-5 bg-[#17191b] mr-8 flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>
          </div>

          <div className='py-4 AboutSlider transition-all mt-20 flex overflow-x-hidden sm:overflow-x-auto w-max sm:w-max items-center border-t border-b border-[#878c8e] gap-x-8'>
            <h1 className='unbounded text-[25px] sm:text-[40px] font-light text-[#878c8e] w-max'>WE LOVE <span className='text-[#17191b]'>QUALITY</span></h1>
            <div className='h-5 w-5 bg-[#17191b] flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>

            <h1 className='unbounded text-[25px] sm:text-[40px] font-light text-[#878c8e] w-max'>WE LOVE <span className='text-[#17191b]'>COLLABORATION</span></h1>
            <div className='h-5 w-5 bg-[#17191b] flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>

            <h1 className='unbounded text-[25px] sm:text-[40px] font-light text-[#878c8e] w-max'>WE LOVE <span className='text-[#17191b]'>SIMPLICITY</span></h1>
            <div className='h-5 w-5 bg-[#17191b] mr-8 flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>
          </div>
        </motion.div>

      </div>

      <div className='h-screen w-screen pt-8'>

      </div>
    </>
  )
}

export default about