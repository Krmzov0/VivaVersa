import { motion } from 'framer-motion';
import Image from 'next/image';

const Footer = () => {

    return (
        <div className='relative bottom-0  flex flex-col w-screen h-max py-20  pb-8 px-6 sm:px-12 bg-[#17191b]'>
            <div className='flex w-full flex-col sm:flex-row justify-between items-start gap-y-4 sm:gap-y-0 sm:items-center'>
                <h1 className='unbounded text-[24px] sm:text-[30px] font-light text-[#f1f2ee]'>DON’T LET YOUR IDEA STAY A DREAM.</h1>
                <Image
                    className='flex w-20 sm:w-fit'
                    src="/White.png"
                    width={100}
                    height={100}
                    alt=''
                    priority={true}
                />
            </div>

            <div className='flex items-start sm:items-center flex-col sm:flex-row gap-y-4 sm:gap-y-0 gap-x-0 sm:gap-x-4 mt-16 sm:mt-24'>
                <h1 className='unbounded relative footerButtons text-[16px] sm:text-[16px] text-[#f1f2ee]'>CONTACT US</h1>
                <span className='unbounded text-[#878c8e] '>or</span>
                <h1 className='unbounded relative footerButtons text-[16px] sm:text-[16px] text-[#f1f2ee]'>SCHEDULE A CALL</h1>
            </div>

            <div className='mt-10 sm:mt-14 w-full sm:w-[70%] h-[1px] bg-[#878c8e3a]'></div>

            <div className='flex mt-10 sm:mt-14 justify-start flex-col sm:flex-row items-start gap-x-0 gap-y-[30px] sm:gap-y-0 sm:gap-x-[30px]'>
                <div className='flex flex-col gap-x-[20px] gap-y-[20px]'>
                    <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}><h4 className='unbounded text-[16px] sm:text-[14px] text-[#878c8e]'>General</h4></motion.div>
                    <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} ><h4 className='unbounded  text-lg sm:text-[15px] font-light text-[#f1f2ee]'>vivaversagency@gmail.com</h4></motion.div>
                </div>

                <div className='flex flex-col gap-x-[20px] gap-y-[20px]'>
                    <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} ><h4 className='unbounded text-[16px] sm:text-[14px] text-[#878c8e]'>Business</h4></motion.div>
                    <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} ><h4 className='unbounded  text-lg sm:text-[15px] font-light text-[#f1f2ee]'>info@vivaversa.com</h4></motion.div>
                </div>
            </div>

            <div className='flex mt-10 sm:mt-14 justify-start items-start gap-x-[30px]'>
                <div className='flex flex-col sm:gap-x-[20px] gap-y-[20px]'>
                    <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} ><h4 className='unbounded text-[16px] sm:text-[14px] text-[#878c8e]'>Socials</h4></motion.div>
                    <div className='flex sm:items-center flex-col justify-start items-start sm:flex-row gap-y-[20px] gap-x-0 sm:gap-y-0 sm:gap-x-[20px]'>
                        <div className='flex flex-row gap-x-[20px] '>
                            <motion.div initial={{ opacity: 0 }} whileInView={{  opacity: 1 }} transition={{ delay: 0.2 }} ><h4 className='unbounded text-lg sm:text-[15px] font-light hover:text-[#878c8e] transition-all cursor-pointer text-[#f1f2ee]'>Instagram</h4></motion.div>
                            <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} ><h4 className='unbounded text-lg sm:text-[15px] hover:text-[#f1f2ee] transition-all cursor-pointer font-light text-[#878c8e]'>Facebook</h4></motion.div>
                        </div>
                        <div className='flex flex-row gap-x-[20px] '>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} ><h4 className='unbounded text-lg sm:text-[15px] font-light hover:text-[#878c8e] transition-all cursor-pointer text-[#f1f2ee]'>X (Twitter) </h4></motion.div>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} ><h4 className='unbounded text-lg sm:text-[15px] font-light text-left hover:text-[#f1f2ee] transition-all cursor-pointer text-[#878c8e]'>Linked in</h4></motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-10 sm:mt-14 w-full sm:w-[70%] h-[1px] bg-[#878c8e3a]'></div>

            <div className='mt-10 sm:mt-14' >
                <div className='flex sm:items-center flex-col justify-start items-start sm:flex-row gap-y-[20px] gap-x-0 sm:gap-y-0 sm:gap-x-[20px]'>
                    <div className='flex flex-row gap-x-[20px] '>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} ><h4 className='unbounded text-lg sm:text-[15px] font-light hover:text-[#878c8e] transition-all cursor-pointer text-[#f1f2ee]'>Home</h4></motion.div>
                        <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} ><h4 className='unbounded text-lg sm:text-[15px] font-light hover:text-[#f1f2ee] transition-all cursor-pointer text-[#878c8e]'>About</h4></motion.div>
                    </div>

                    <div className='flex flex-row gap-x-[20px] '>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} ><h4 className='unbounded text-lg sm:text-[15px] font-light hover:text-[#878c8e] transition-all cursor-pointer text-[#f1f2ee]'>Services</h4></motion.div>
                        <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} ><h4 className='unbounded text-lg sm:text-[15px] font-light hover:text-[#f1f2ee] transition-all cursor-pointer text-[#878c8e]'>Contact</h4></motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

//128
//75
//25
//30