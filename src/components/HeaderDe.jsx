import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Headroom from 'react-headroom'

const HeaderDe = () => {

  const router = useRouter()

  const [menuToggle, setmenuToggle] = useState(false)
  const [langMenu, setlangMenu] = useState(false)
  const [menuArrow, setmenuArrow] = useState(false)

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

  const handleLangMenu = () => {
    langMenu ? setlangMenu(false) : setlangMenu(true);
    menuArrow ? setmenuArrow(false) : setmenuArrow(true);

  }

  return (
    <>
      <Headroom>
        <div className='bg-[#f1f2ee] border-0 transition-all relative top-0 z-[9999] mx-auto py-2  md:py-4 px-4 md:px-12 flex w-full justify-between items-center'>

          <div className='flex md:hidden items-center justify-between w-full gap-x-2'>
            <Image
              onClick={() => router.push("/")}
              src="/BlackLogo.svg"
              width={55}
              height={55}
              alt=''
              priority={true}

            />


            <div className='flex md:hidden'>
              <svg onClick={handleMenuToggle} width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 12H19.5" stroke="#17191b" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M4.5 17.7692H19.5" stroke="#17191b" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M4.5 6.23077H19.5" stroke="#17191b" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
              </svg>

            </div>
          </div>

          <Image className='cursor-pointer hidden md:flex'
            onClick={() => router.push("/")}
            src="/BlackLogo.svg"
            width={55}
            height={55}
            alt=''
            priority={true}
          />

          <div className='hidden md:flex md:absolute left-[50%] translate-x-[-50%] gap-x-12 items-center ml-16 md:ml-0'>
            <h2 onClick={() => router.push("/de/home")} className='unbounded hover:text-[#17191b] duration-200 hover:font-medium transition-all cursor-pointer font-light text-[#878c8e] text-lg'>heim</h2>
            <h2 onClick={() => router.push("/de/about")} className='unbounded hover:text-[#17191b] duration-200 hover:font-medium transition-all cursor-pointer font-light text-[#878c8e] text-lg'>über uns</h2>
            <h2 onClick={() => router.push("/de/services")} className='unbounded hover:text-[#17191b] duration-200 hover:font-medium transition-all cursor-pointer font-light text-[#878c8e] text-lg'>dienste</h2>
            <h2 onClick={() => router.push("/de/contact")} className='unbounded hover:text-[#17191b] duration-200 hover:font-medium transition-all cursor-pointer font-light text-[#878c8e] text-lg'>kontakt</h2>
          </div>

          <div className='hidden md:block'>
            <div onClick={handleLangMenu} className='select-none w-max relative border border-[#878c8e47] bg-[#f1f2ee] rounded-xl h-max px-4 cursor-pointer py-2'>
              <div className='flex justify-center w-full gap-x-3  items-center'>
                <Image src='/de.png' alt='' priority='true' className='w-7' width={60} height={60} />
                {langMenu ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 15.5831L13.4134 8.9964C13.0367 8.62509 12.529 8.41693 12 8.41693C11.471 8.41693 10.9633 8.62509 10.5866 8.9964L4 15.5831" stroke="#878c8e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg> : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8.41693L10.5866 15.0037C10.9633 15.375 11.471 15.5831 12 15.5831C12.529 15.5831 13.0367 15.375 13.4134 15.0037L20 8.41693" stroke="#878c8e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>}
              </div>

              {langMenu && (<motion.div className='absolute w-44 right-0 bg-[#f1f2ee]' initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} >
                <div className='absolute border border-[#878c8e47] bg-[#f1f2ee] overflow-hidden right-0 w-full left-0 mt-5 rounded-xl'>
                  <div onClick={() => router.push('/')} className='flex items-center gap-x-3 py-2 hover:bg-[#878c8e47] transition-all px-4'>
                    <Image src='/en.png' alt='' priority='true' className='w-7' width={60} height={60} />Englisch</div>
                  <div className='w-full h-[1px] bg-[#878c8e47]'></div>
                  <div onClick={() => router.push('/de/home')} className='flex items-center gap-x-3 py-2 hover:bg-[#878c8e47] transition-all px-4'>
                    <Image src='/de.png' alt='' priority='true' className='w-7' width={60} height={60} />
                    Deutsch</div>
                </div>
              </motion.div>)}
            </div>
          </div>

          <div className='flex md:hidden'></div>

        </div>
      </Headroom>

      {menuToggle && <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.8 }} className=' origin-bottom z-[999] flex flex-col md:hidden fixed w-screen h-screen p-4 bg-[#17191b] top-0 left-0'>

        {menuToggle && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className='w-full flex justify-between items-center'>
          <Image
            src="/WhiteLogo.svg"
            width={55}
            height={55}
            alt=''
            priority={true}
          />

          <svg onClick={handleMenuToggle} width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 5L5 19" stroke="#f1f2ee" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
            <path d="M19 19L5 5" stroke="#f1f2ee" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
          </svg>

        </motion.div>}


        <div className='mt-12 ml-1 gap-y-8 flex flex-col'>
          {menuToggle && <motion.div variants={navLinks} initial="initial" animate="animate" transition={{ delay: 0.5 }}><h2 onClick={() => router.push("/de/home")} className='unbounded hover:text-[#878c8e] uppercase duration-200 hover:font-medium transition-all cursor-pointer font-light text-[#f1f2ee] text-4xl'>heim</h2></motion.div>}
          {menuToggle && <motion.div variants={navLinks} initial="initial" animate="animate" transition={{ delay: 0.65 }}><h2 onClick={() => router.push("/de/about")} className='unbounded hover:text-[#878c8e] uppercase duration-200 hover:font-medium transition-all cursor-pointer font-light text-[#f1f2ee] text-4xl'>über uns</h2></motion.div>}
          {menuToggle && <motion.div variants={navLinks} initial="initial" animate="animate" transition={{ delay: 0.75 }}><h2 onClick={() => router.push("/de/services")} className='unbounded hover:text-[#878c8e] uppercase duration-200 hover:font-medium transition-all cursor-pointer font-light text-[#f1f2ee] text-4xl'>dienste</h2></motion.div>}
          {menuToggle && <motion.div variants={navLinks} initial="initial" animate="animate" transition={{ delay: 0.85 }}><h2 onClick={() => router.push("/de/contact")} className='unbounded hover:text-[#878c8e] uppercase duration-200 hover:font-medium transition-all cursor-pointer font-light text-[#f1f2ee] text-4xl'>kontakt</h2></motion.div>}
        </div>

        {menuToggle && <motion.div variants={navLinks} initial="initial" animate="animate" transition={{ delay: 0.95 }} className='block md:hidden mt-10 ml-1'>
          <div onClick={handleLangMenu} className=' select-none w-max relative border border-[#f1f2eeb8] bg-[#17191b] rounded-xl h-max cursor-pointer '>
            <div className='active:bg-[#f1f2ee71] transition-all flex justify-center w-full gap-x-12  items-center rounded-xl py-4 px-4'>
              <h2 className='text-xl text-[#f1f2ee] font-light'>Sprache</h2>
              {langMenu ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 15.5831L13.4134 8.9964C13.0367 8.62509 12.529 8.41693 12 8.41693C11.471 8.41693 10.9633 8.62509 10.5866 8.9964L4 15.5831" stroke="#878c8e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg> : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8.41693L10.5866 15.0037C10.9633 15.375 11.471 15.5831 12 15.5831C12.529 15.5831 13.0367 15.375 13.4134 15.0037L20 8.41693" stroke="#878c8e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>}
            </div>

            {langMenu && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
              <div className='absolute text-[#f1f2ee] border  border-[#f1f2eeb8] w-full overflow-hidden left-0 mt-5 rounded-xl'>
                <div onClick={() => router.push('/')} className='flex items-center gap-x-3 py-4  text-xl font-light active:bg-[#f1f2ee71] transition-all pl-5'>
                  <Image src='/en.png' alt='' priority='true' className='w-7' width={60} height={60} />Englisch</div>
                <div className='w-full h-[1px] bg-[#878c8e47]'></div>
                <div onClick={() => router.push('/de/home')} className='flex items-center gap-x-3 py-4 text-xl font-light active:bg-[#f1f2ee71] transition-all pl-5'>
                  <Image src='/de.png' alt='' priority='true' className='w-7' width={60} height={60} />Deutsch</div>
              </div>
            </motion.div>)}
          </div>
        </motion.div>}

      </motion.div>}
    </>
  )
}

export default HeaderDe



