import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { motion } from 'framer-motion'

const services = () => {
  return (
    <>
      <Header />
      <div className='relative pb-12 md:pb-24 w-screen md:h-max h-max flex-col  flex justify-start items-center'>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}>
          <div className='mt-10 p-6 md:px-12'>
            <h1 className='flex md:hidden font-light text-center text-[#17191b] text-4xl md:text-7xl leading-[60px] md:leading-[95px]'>TAKE AIM AT SUCCESS WITH OUR PRECISION</h1>
            <h1 className='hidden md:flex font-light text-center text-[#17191b] text-4xl md:text-7xl leading-[60px] md:leading-[95px]'>TAKE AIM AT SUCCESS <br /> WITH OUR PRECISION</h1>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }} className='relative text-[#17191b] text-center w-full mt-3 md:mt-5 font-normal md:w-full lowercase text-3xl md:text-6xl leading-[45px] md:leading-[95px]'>DIGITAL SOLUTIONS</motion.div>
          </div>
        </motion.div>

        <div className='h-80 md:h-[30rem] w-full flex justify-center items-start md:w-full relative bottom-20 md:bottom-32 bg-transparent mt-1'>

          <div className='gradient2 w-full h-[1px] bg-[#17191b]  absolute top-[50%] translate-y-[-50%]'></div>
          <div className='gradient w-[1px] bottom-0 h-full bg-[#17191b]  absolute left-[50%] translate-x-[-50%]'></div>

          <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-16 h-16 bg-[#878c8e] flex justify-center items-center'>
            <div className='w-12 h-12 bg-[#17191b] flex items-center justify-center'>
              <div className='w-6 h-6 bg-[#f1f2ee]'></div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-0  w-screen relative h-full gap-y-16 sm:gap-y-20 flex flex-col bg-[#17191b] p-8 sm:py-44 sm:p-12 py-28 sm:pr-16">

        <div className="flex flex-col">
          <div className="w-full justify-between gap-y-8 sm:gap-y-0 flex flex-col-reverse sm:flex-row sm:items-center">

            <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} ><div>
              <h1 className="text-[32px] sm:text-[38px] font-light text-[#f1f2ee]">OUR APPROACH</h1>
            </div></motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}  ><p className=" mt-10  text-[16px] text-[#878c8e]">We provide tailored services for businesses to succeed in the digital landscape.</p></motion.div>
        </div>

        <div className='mt-16'>
          <div>
            <div className="border-[#f1f2ee]">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}><h1 className="text-2xl sm:text-[32px] text-[#f1f2ee]  font-light hover:font-light sm:hover:font-medium transition-all duration-300 gap-x-4 uppercase flex items-center w-full"><span className="text-[#878c8e]">01</span> COMPREHENSIVE ANALYSIS</h1></motion.div>
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} ><p className='text-md text-[#f1f2eea7] mt-10'>We begin by thoroughly analyzing your current online presence, including your website's performance and your social media profiles.</p></motion.div>
              <motion.div initial={{ x: -40 }} whileInView={{ x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="origin-left w-full h-[2px] bg-[#f1f2ee] my-10"></motion.div>
            </div>
          </div>

          <div>
            <div className=" border-[#f1f2ee]">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}><h1 className="text-2xl sm:text-[32px] text-[#f1f2ee]  font-light hover:font-light sm:hover:font-medium transition-all duration-300 gap-x-4 uppercase flex items-center w-full"><span className="text-[#878c8e]">02</span> Customized Strategies</h1></motion.div>
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} ><p className='text-md text-[#f1f2eea7] mt-10'>Tailoring our approach to your unique business goals, we develop customized digital marketing and social media strategies.</p></motion.div>
              <motion.div initial={{ x: -40 }} whileInView={{ x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="origin-left w-full h-[2px] bg-[#f1f2ee] my-10"></motion.div>
            </div>
          </div>

          <div>
            <div className=" border-[#f1f2ee]">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}><h1 className="text-2xl sm:text-[32px] text-[#f1f2ee]  font-light hover:font-light sm:hover:font-medium transition-all duration-300 gap-x-4 uppercase flex items-center w-full"><span className="text-[#878c8e]">03</span> Content Creation</h1></motion.div>
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} ><p className='text-md text-[#f1f2eea7] mt-10'>We create high-quality, engaging content that resonates with your audience, both on your website and across social media platforms.</p></motion.div>
              <motion.div initial={{ x: -40 }} whileInView={{ x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="origin-left w-full h-[2px] bg-[#f1f2ee] my-10"></motion.div>
            </div>
          </div>

          <div>
            <div className=" border-[#f1f2ee]">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}><h1 className="text-2xl sm:text-[32px] text-[#f1f2ee]  font-light hover:font-light sm:hover:font-medium transition-all duration-300 gap-x-4 uppercase flex items-center w-full"><span className="text-[#878c8e]">04</span> Social Media Management</h1></motion.div>
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} ><p className='text-md text-[#f1f2eea7] mt-10'>We manage and grow your social media presence by crafting compelling posts, running targeted ads, and engaging with your audience.</p></motion.div>
              <motion.div initial={{ x: -40 }} whileInView={{ x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="origin-left w-full h-[2px] bg-[#f1f2ee] my-10"></motion.div>
            </div>
          </div>

          <div>
            <div className=" border-[#f1f2ee]">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}><h1 className="text-2xl sm:text-[32px] text-[#f1f2ee]  font-light hover:font-light sm:hover:font-medium transition-all duration-300 gap-x-4 uppercase flex items-center w-full"><span className="text-[#878c8e]">05</span> Website Development</h1></motion.div>
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} ><p className='text-md text-[#f1f2eea7] mt-10'>If needed, we design and develop websites that are user-friendly, responsive, and visually appealing to enhance your online presence.</p></motion.div>
              <motion.div initial={{ x: -40 }} whileInView={{ x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="origin-left w-full h-[2px] bg-[#f1f2ee] my-10"></motion.div>
            </div>
          </div>

          <div>
            <div className=" border-[#f1f2ee]">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}><h1 className="text-2xl sm:text-[32px] text-[#f1f2ee]  font-light hover:font-light sm:hover:font-medium transition-all duration-300 gap-x-4 uppercase flex items-center w-full"><span className="text-[#878c8e]">06</span> Data-Driven Insights</h1></motion.div>
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} ><p className='text-md text-[#f1f2eea7] mt-10'>We continuously monitor and analyze data to refine strategies and achieve better results.</p></motion.div>
              <motion.div initial={{ x: -40 }} whileInView={{ x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="origin-left w-full h-[2px] bg-[#f1f2ee] my-10"></motion.div>
            </div>
          </div>

        </div>
      </div>

      <div className='h-max flex flex-col md:flex-row justify-between items-start bg-[#f1f2ee] w-screen px-6 md:px-12 py-28 md:py-44'>
        <motion.div className="md:px-0 relative md:sticky md:top-10" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} >
          <div className=" relative md:sticky md:top-10">
            <h1 className=" text-[20px] md:text-[28px] font-light text-[#878c8e]">SERVICES</h1>
            <h1 className=" text-[34px] md:text-[42px] font-light text-[#17191b] mt-1">WHAT WE&apos;RE <br /> OFFERING</h1>
          </div>
        </motion.div>

        <div className='w-full md:w-[65%] flex flex-col gap-y-10 md:mt-0 mt-20'>
          <div className='pb-28  border-b border-[#17191b83] flex-col md:flex-row flex justify-start md:gap-y-0 gap-y-10 items-start'>
            <motion.div initial={{ opacity: 0, scale: 1.2 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className='text-2xl md:w-[50%] md:text-4xl leading-[40px] md:leading-[60px] font-light text-[#17191b]'>SOCIAL MEDIA <br />  MARKETING</motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}><ul className='md:ml-28 text-[#17191b] flex flex-col gap-y-10 md:gap-y-14 text-md '>
              <li>&#8226; Organic Advertising;</li>
              <li>&#8226; Paid Advertising;</li>
              <li>&#8226; Strategy Development;</li>
              <li>&#8226; Content Creation;</li>
              <li>&#8226; Profile Optimization;</li>
            </ul></motion.div>
          </div>

          <div className='pb-28  border-b border-[#17191b83] flex-col md:flex-row flex justify-start md:gap-y-0 gap-y-10 items-start'>
            <motion.div initial={{ opacity: 0, scale: 1.2 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className='text-2xl md:w-[50%] md:text-4xl leading-[40px] md:leading-[60px] font-light text-[#17191b]'>WEBSITE <br />  DEVELOPMENT</motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}><ul className='md:ml-28 text-[#17191b] flex flex-col gap-y-10 md:gap-y-14 text-md '>
              <li>&#8226; Front-End Development;</li>
              <li>&#8226; Back-End Development;</li>
              <li>&#8226; Full-Stack Development;</li>
              <li>&#8226; Responsive Web Design;</li>
              <li>&#8226; Complex Animations;</li>
              <li>&#8226; Website Maintenance;</li>
              <li>&#8226; Custom Illustrations;</li>
            </ul></motion.div>
          </div>

          <div className='pb-28 border-b border-[#17191b83] flex-col md:flex-row flex justify-start md:gap-y-0 gap-y-10 items-start'>
            <motion.div initial={{ opacity: 0, scale: 1.2 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className='text-2xl md:w-[50%] md:text-4xl leading-[40px] md:leading-[60px] font-light text-[#17191b]'>WEBSITE DESIGN</motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}><ul className='md:ml-28 text-[#17191b] flex flex-col gap-y-10 md:gap-y-14 text-md '>
              <li>&#8226; UI/UX Design;</li>
              <li>&#8226; Industry Competitors Research;</li>
              <li>&#8226; Wireframing and Prototyping;</li>
              <li>&#8226; Custom Illustrations;</li>
            </ul></motion.div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default services