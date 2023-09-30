import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='relative bottom-0 hidden sm:flex flex-col w-screen h-max py-20  pb-8 px-12 bg-[#17191b]'>
            <div className='flex w-full justify-between items-center'>
                <h1 className='unbounded text-[30px] font-light text-[#f1f2ee]'>DON’T LET YOUR IDEA STAY A DREAM.</h1>
                <Image
                    src="/White.png"
                    width={100}
                    height={100}
                    alt=''
                    priority={true}
                />
            </div>

            <div className='flex items-center gap-x-4 mt-24'>
                <h1 className='unbounded text-[16px] text-[#f1f2ee]'>CONTACT US</h1>
                <span className='unbounded text-[#878c8e] '>or</span>
                <h1 className='unbounded text-[16px] text-[#f1f2ee]'>SCHEDULE A CALL</h1>
            </div>

            <div className='mt-14 w-[70%] h-[1px] bg-[#878c8e3a]'></div>

            <div className='flex mt-14 justify-start items-start gap-x-[30px]'>
                <div className='flex flex-col gap-x-[20px] gap-y-[20px]'>
                    <h4 className='unbounded text-[14px] text-[#878c8e]'>General</h4>
                    <h4 className='unbounded text-[14px] font-light text-[#f1f2ee]'>vivaversagency@gmail.com</h4>
                </div>

                <div className='flex flex-col gap-x-[20px] gap-y-[20px]'>
                    <h4 className='unbounded text-[14px] text-[#878c8e]'>Business</h4>
                    <h4 className='unbounded text-[14px] font-light text-[#f1f2ee]'>info@vivaversa.com</h4>
                </div>
            </div>

            <div className='flex mt-14 justify-start items-start gap-x-[30px]'>
                <div className='flex flex-col gap-x-[20px] gap-y-[20px]'>
                    <h4 className='unbounded text-[14px] text-[#878c8e]'>Socials</h4>
                    <div className='flex items-center gap-x-[20px]'>
                        <h4 className='unbounded text-[15px] font-light text-[#f1f2ee]'>Instagram</h4>
                        <h4 className='unbounded text-[15px] font-light text-[#878c8e]'>Facebook</h4>
                        <h4 className='unbounded text-[15px] font-light text-[#f1f2ee]'>X (Twitter)</h4>
                        <h4 className='unbounded text-[15px] font-light text-[#878c8e]'>Linked In</h4>
                    </div>
                </div>
            </div>

            <div className='mt-14 w-[70%] h-[1px] bg-[#878c8e3a]'></div>

            <div className='mt-14'>
                <div className='flex items-center gap-x-[20px]'>
                    <h4 className='unbounded text-[15px] font-light text-[#f1f2ee]'>Home</h4>
                    <h4 className='unbounded text-[15px] font-light text-[#878c8e]'>About</h4>
                    <h4 className='unbounded text-[15px] font-light text-[#f1f2ee]'>Services</h4>
                    <h4 className='unbounded text-[15px] font-light text-[#878c8e]'>Contact</h4>
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