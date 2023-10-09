import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'

const about = () => {
  return (
    <>
      <Header />
      <div className='h-max overflow-x-hidden w-screen relative p-0 flex flex-col justify-start gap-y-32 items-start'>
        <div className='pl-4 sm:pl-12 pt-20'>
          <h1 className='text-5xl gap-y-6 flex flex-col sm:gap-y-0 sm:text-6xl font-light hover:font-light sm:hover:font-medium leading-[40px] sm:leading-[90px] transition-all duration-300'>
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

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}><p className='mt-10  text-md text-[#878c8e] font-light'>We provide tailored services for businesses to succeed in the digital landscape.</p></motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 0.6 }} className='flex'>
          <div className='py-4 AboutSlider transition-all flex overflow-x-hidden sm:overflow-x-auto w-max sm:w-max items-center border-t border-b border-[#878c8e] gap-x-8'>
            <h1 className='text-[25px] sm:text-[48px] font-light text-[#878c8e] w-max'>WE LOVE <span className='text-[#17191b]'>QUALITY</span></h1>
            <div className='h-5 w-5 bg-[#17191b] flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>

            <h1 className='text-[25px] sm:text-[48px] font-light text-[#878c8e] w-max'>WE LOVE <span className='text-[#17191b]'>COLLABORATION</span></h1>
            <div className='h-5 w-5 bg-[#17191b] flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>

            <h1 className='text-[25px] sm:text-[48px] font-light text-[#878c8e] w-max'>WE LOVE <span className='text-[#17191b]'>SIMPLICITY</span></h1>
            <div className='h-5 w-5 bg-[#17191b] mr-8 flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>
          </div>

          <div className='py-4 AboutSlider transition-all flex overflow-x-hidden sm:overflow-x-auto w-max sm:w-max items-center border-t border-b border-[#878c8e] gap-x-8'>
            <h1 className='text-[25px] sm:text-[48px] font-light text-[#878c8e] w-max'>WE LOVE <span className='text-[#17191b]'>QUALITY</span></h1>
            <div className='h-5 w-5 bg-[#17191b] flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>

            <h1 className='text-[25px] sm:text-[48px] font-light text-[#878c8e] w-max'>WE LOVE <span className='text-[#17191b]'>COLLABORATION</span></h1>
            <div className='h-5 w-5 bg-[#17191b] flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>

            <h1 className='text-[25px] sm:text-[48px] font-light text-[#878c8e] w-max'>WE LOVE <span className='text-[#17191b]'>SIMPLICITY</span></h1>
            <div className='h-5 w-5 bg-[#17191b] mr-8 flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>
          </div>
        </motion.div>
      </div>


      <div className='h-max relative mt-28 w-screen p-4 py-14 sm:p-14 sm:py-44 flex flex-col bg-[#17191b]'>
        <div className='overflow-hidden'>
          <motion.div className='overflow-hidden' initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7 }}><h1 className=" overflow-hidden text-[38px] sm:text-5xl font-light text-[#f1f2ee]">ABOUT</h1></motion.div>
        </div>

        <div className="text-[18px] mt-20 hidden sm:flex gap-y-10 text-[#878c8e] sm:text-4xl font-light flex-col">
          <div className="overflow-hidden">
            <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.1 }}><h1 className="overflow-hidden uppercase">Unlock your brand&apos;s full potential with VIVA Versa,</h1></motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.1 }}><h1 className="overflow-hidden uppercase">your trusted Social Media Marketing Agency.</h1></motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.1 }}><h1 className="overflow-hidden uppercase">We specialize in crafting compelling social media</h1></motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.1 }}><h1 className="overflow-hidden uppercase">strategies and captivating content that drives results,</h1></motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.1 }}><h1 className="overflow-hidden uppercase">Let's elevate your online presence together!</h1></motion.div>
          </div>
        </div>

        <motion.div initial={{ y: 40 }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7 }} className='mt-10 flex sm:hidden'><h1 className=" text-[#878c8e] text-[22px] overflow-hidden uppercase leading-[44px]">Unlock your brand&apos;s full potential, with your trusted Social Media Marketing Agency. We specialize in crafting compelling social media strategies and captivating content that drives results, Let's elevate your online</h1></motion.div>

      </div>


      <div className='h-max relative w-screen mt-28 p-6 pt-0 flex flex-col gap-y-4 sm:gap-y-10 sm:px-12 bg-[#f1f2ee]'>

        <h1 className='text-[28px] sm:text-[38px] font-light ml-1 leading-[50px] sm:leading-[60px]'>VALUES FROM <br /> OUR EXPERIENCE</h1>

        <div className='flex flex-wrap justify-between gap-y-2 sm:gap-y-8'>
          <div className='flex w-full sm:max-w-[45%] flex-col py-8 gap-y-7'>
            <div className='w-full h-44 sm:h-72 bg-[#17191b]'></div>
            <h1 className='text-[25px] sm:text-[32px] font-light uppercase ml-1'>Thinking outside the box</h1>
            <p className='text-lg w-fit text-[#878c8e] font-light mt-0 sm:mt-4 ml-1'>We foster creativity and unconventional thinking, delivering unique strategies that set your brand apart and drive exceptional outcomes.</p>
          </div>

          <div className='flex w-full sm:max-w-[45%] flex-col py-8 gap-y-7'>
            <div className='w-full h-44 sm:h-72 bg-[#17191b]'></div>
            <h1 className='text-[25px] sm:text-[32px] font-light uppercase ml-1'>Innovation and Adaptability</h1>
            <p className='text-lg w-fit text-[#878c8e] font-light mt-0 sm:mt-4 ml-1'>We thrive on innovation and adapt to the ever-evolving digital landscape, ensuring your strategies remain fresh and effective.</p>
          </div>

          <div className='flex w-full sm:max-w-[45%] flex-col py-8 gap-y-7'>
            <div className='w-full h-44 sm:h-72 bg-[#17191b]'></div>
            <h1 className='text-[25px] sm:text-[32px] font-light uppercase ml-1'>Client-Centric Approach</h1>
            <p className='text-lg w-fit text-[#878c8e] font-light mt-0 sm:mt-4 ml-1'>Your success is our top priority. We focus on understanding your unique needs and delivering tailored solutions.</p>
          </div>

          <div className='flex w-full sm:max-w-[45%] flex-col py-8 gap-y-7'>
            <div className='w-full h-44 sm:h-72 bg-[#17191b]'></div>
            <h1 className='text-[25px] sm:text-[32px] font-light uppercase ml-1'>Collaborative Partnerships</h1>
            <p className='text-lg w-fit text-[#878c8e] font-light mt-0 sm:mt-4 ml-1'>We view our clients as partners, fostering collaboration and open communication to achieve shared goals.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default about
