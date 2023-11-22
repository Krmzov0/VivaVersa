import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contact = () => {

  const { register, handleSubmit, reset } = useForm();

  const [loading, setloading] = useState(false)

  const onSubmit = async (data) => {
    loading ? setloading(false) : setloading(true)
    try {
      await emailjs.send(
        'service_5b9z8dy',
        'template_hl86y2s',
        data,
        '6Cn-NsSrQ2dxKRsbA'
      );

      setloading(false);
      toast("Email sent!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast("Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <Header />
      <div className='w-screen relative h-max px-6 md:px-12 pt-10 pb-16  md:py-20 md:pb-28'>
        <div className='flex flex-col w-fit gap-y-4'>
          <h4 className='text-sm md:text-md text-[#878c8e] font-regular ml-1 '>LET&apos;S CHAT ABOUT YOUR GOALS</h4>
          <h1 className='text-4xl md:text-5xl font-light duration-300 md:hover:font-medium transition-all'>GET IN TOUCH</h1>
        </div>

        <form className='z-[30] mt-12 w-full md:w-[50%]  flex flex-col gap-y-8' onSubmit={handleSubmit(onSubmit)}>

          <div className='flex flex-col md:flex-row gap-y-8 md:gap-y-0 items-start w-full gap-x-6'>
            <div className='flex flex-col w-full gap-y-3'>
              <label htmlFor="fullName" className='font-light text-md'>What&apos;s your name?<span className=' text-red-600'>*</span></label>
              <input required
                {...register('name', { required: true })} name='fullName' type="text" autoComplete='off' className='outline-none rounded-none hover:border border-[#17191b] py-4 text-[#17191b] px-3 font-light bg-[#878c8e27]' placeholder='Full Name' />
            </div>

            <div className='flex flex-col w-full gap-y-3'>
              <label htmlFor="fullName" className='font-light text-md'>Your email<span className=' text-red-600'>*</span></label>
              <input
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })} name='email' type="text" autoComplete='off' className='outline-none rounded-none hover:border border-[#17191b] py-4 text-[#17191b] px-3 font-light bg-[#878c8e27]' placeholder='Email Address' />
            </div>
          </div>

          <div className='flex flex-col w-full gap-y-3'>
            <label htmlFor="fullName" className='font-light text-md'>Let us know your goal<span className=' text-red-600'>*</span></label>
            <input 
              {...register('goal', { required: true })} name='goal' type="text" autoComplete='off' className='outline-none rounded-none hover:border border-[#17191b] py-4 text-[#17191b] px-3 font-light bg-[#878c8e27]' placeholder='Your Goal' />
          </div>

          <div className='flex flex-col w-full gap-y-3'>
            <label htmlFor="fullName" className='font-light text-md'>We&apos;d like to know some details<span className=' text-red-600'>*</span></label>
            <textarea
              {...register('message', { required: true })} name="details" id="" cols="30" rows="5" className='resize-none outline-none rounded-none hover:border border-[#17191b] py-4 text-[#17191b] px-3 font-light bg-[#878c8e27]' placeholder='Project Details'></textarea>
          </div>

          <motion.div transition={{ type: "spring", stiffness: 130, duration: 0.1 }} initial={{ scale: 1 }} whileHover={{ scale: 1.02 }} whileTap={{ y: 2.5 }}>
            <button type="submit" className='bg-[#17191b] flex w-full py-4 font-light text-[#f1f2ee] justify-center'>{loading ? (<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className='w-max flex items-center gap-x-3'>Sending <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.39234 10.8835L3.18925 6.28081C2.96536 5.88278 2.87317 5.42415 2.92575 4.97053C2.97833 4.5169 3.17304 4.09154 3.48204 3.75532C3.79104 3.41909 4.19848 3.18921 4.64614 3.09859C5.09367 3.00797 5.55849 3.06123 5.97397 3.25077L19.9987 9.94573C20.3725 10.1197 20.6889 10.3967 20.9106 10.7444C21.1322 11.0921 21.25 11.4958 21.25 11.908C21.25 12.3204 21.1322 12.7241 20.9106 13.0717C20.6889 13.4193 20.3725 13.6965 19.9987 13.8703L5.77193 20.7673C5.36546 20.9427 4.91492 20.9893 4.48107 20.9006C4.04722 20.812 3.65107 20.5924 3.34603 20.2717C3.04087 19.9508 2.84147 19.5441 2.77473 19.1064C2.70798 18.6687 2.77713 18.221 2.97281 17.8238L6.39233 13.0624C6.59245 12.7342 6.69833 12.3573 6.69833 11.973C6.69833 11.5886 6.59245 11.2117 6.39234 10.8835Z" stroke="#f1f2ee" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.4047 12.0523L6.68092 12.0523" stroke="#f1f2ee" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </motion.div>) : (<p>Submit</p>)}</button>
          </motion.div>

        </form>
      </div>
      <Footer />
    </>
  )
}

export default Contact