import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import MagneticHover from './MagneticHover'

const Header = () => {


  const router = useRouter()

  const [menuToggle, setmenuToggle] = useState(false)

  const handleMenuToggle = () => {
    menuToggle ? setmenuToggle(false) : setmenuToggle(true);
  }

  const navLinks = {
    initial: {
      y: 80,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className='bg-transparent relative top-0 z-50 mx-auto pt-4 sm:pt-6 px-4 sm:px-12 flex w-full justify-between items-center'>

      <div className='flex sm:hidden items-center justify-between w-full gap-x-2'>
        <Image
          src="/BlackLogo.svg"
          width={55}
          height={55}
          alt=''

        />


        <div className='flex sm:hidden'>
          <svg onClick={handleMenuToggle} width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 12L11.5 12" stroke="#17191b" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M19.5 5.75L4.5 5.75" stroke="#17191b" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
            <path d="M19.5 18.25L4.5 18.25" stroke="#17191b" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <Image className='cursor-pointer hidden sm:flex'
        onClick={() => router.push("/")}
        src="/BlackLogo.svg"
        width={55}
        height={55}
        alt=''
      />

      <div className='hidden sm:flex gap-x-10 items-center ml-16'>
        <h2 onClick={() => router.push("/")} className='unbounded hover:text-[#17191b] duration-200 hover:font-medium transition-all cursor-pointer font-light text-[#878c8e] text-lg'>home</h2>
        <h2 onClick={() => router.push("/about")} className='unbounded hover:text-[#17191b] duration-200 hover:font-medium transition-all cursor-pointer font-light text-[#878c8e] text-lg'>about</h2>
        <h2 onClick={() => router.push("/services")} className='unbounded hover:text-[#17191b] duration-200 hover:font-medium transition-all cursor-pointer font-light text-[#878c8e] text-lg'>services</h2>
        <h2 onClick={() => router.push("/contact")} className='unbounded hover:text-[#17191b] duration-200 hover:font-medium transition-all cursor-pointer font-light text-[#878c8e] text-lg'>contact</h2>
      </div>


      {menuToggle && <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.8 }} className=' origin-bottom flex flex-col sm:hidden fixed w-screen h-screen p-4 bg-[#17191b] top-0 left-0'>

        {menuToggle && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className='w-full flex justify-between items-center'>
          <Image
            src="/WhiteLogo.svg"
            width={55}
            height={55}
            alt=''
            priority={true}
          />

          <svg onClick={handleMenuToggle} width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 5L5 19" stroke="#f1f2ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 19L5 5" stroke="#f1f2ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>}


        <div className='mt-12 ml-1 gap-y-6 flex flex-col'>
          {menuToggle && <motion.div variants={navLinks} initial="initial" animate="animate" transition={{ delay: 0.5 }}><h2 onClick={() => router.push("/")} className='unbounded hover:text-[#878c8e] uppercase duration-200 hover:font-medium transition-all cursor-pointer font-light text-[#f1f2ee] text-4xl'>home</h2></motion.div>}
          {menuToggle && <motion.div variants={navLinks} initial="initial" animate="animate" transition={{ delay: 0.65 }}><h2 onClick={() => router.push("/about")} className='unbounded hover:text-[#878c8e] uppercase duration-200 hover:font-medium transition-all cursor-pointer font-light text-[#f1f2ee] text-4xl'>about</h2></motion.div>}
          {menuToggle && <motion.div variants={navLinks} initial="initial" animate="animate" transition={{ delay: 0.75 }}><h2 onClick={() => router.push("/services")} className='unbounded hover:text-[#878c8e] uppercase duration-200 hover:font-medium transition-all cursor-pointer font-light text-[#f1f2ee] text-4xl'>services</h2></motion.div>}
          {menuToggle && <motion.div variants={navLinks} initial="initial" animate="animate" transition={{ delay: 0.85 }}><h2 onClick={() => router.push("/contact")} className='unbounded hover:text-[#878c8e] uppercase duration-200 hover:font-medium transition-all cursor-pointer font-light text-[#f1f2ee] text-4xl'>contact</h2></motion.div>}
        </div>

      </motion.div>}

      <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
        <MagneticHover>
          <button className='hidden sm:flex unbounded text-[#17191b] font-regular transition-all cursor-pointer text-md'>Let&apos;s Talk!</button>
        </MagneticHover>
      </motion.div>

    </div >
  )
}

export default Header



