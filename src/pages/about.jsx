import Image from 'next/image'
import React from 'react'

const about = () => {
  return (
    <>
      <div className='h-screen w-screen relative p-4 sm:p-12 flex flex-col items-start'>
        <div className='mt-14 sm:mt-20'>
          <h1 className='unbounded text-3xl sm:text-7xl font-light hover:font-medium leading-[40px] sm:leading-[90px] transition-all duration-300'>WE ARE VIVA VERSA <br /> AGENCY</h1>

          <p className='mt-20 unbounded text-md font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Corporis est dolorum, quam excepturi sint cupiditate? <br /> Aspernatur quam laudantium facere eos?</p>
        </div>




        <div className='flex absolute bottom-0 sm:bottom-[-10rem] right-[0]'>
          <Image
            className='hidden sm:flex'
            src='/Outline2.svg'
            alt=''
            width={740}
            height={740}
          />
        </div>
      </div>

      <div className='h-screen w-screen pt-8'>
        <div className='py-4 flex overflow-x-auto w-max items-center border-t border-b border-[#878c8e] gap-x-8'>
            <h1 className='unbounded text-[40px] font-light text-[#878c8e] w-max'>WE LOVE <span className='text-[#17191b]'>QUALITY</span></h1>
            <div className='h-5 w-5 bg-[#17191b] flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>

            <h1 className='unbounded text-[40px] font-light text-[#878c8e] w-max'>WE LOVE <span className='text-[#17191b]'>COLLABORATION</span></h1>
            <div className='h-5 w-5 bg-[#17191b] flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>

            <h1 className='unbounded text-[40px] font-light text-[#878c8e] w-max'>WE LOVE <span className='text-[#17191b]'>SIMPLICITY</span></h1>
            <div className='h-5 w-5 bg-[#17191b] flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default about