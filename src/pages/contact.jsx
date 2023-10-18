import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useState } from 'react'

const contact = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    goal: '',
    details: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setFormData({
          fullName: '',
          email: '',
          goal: '',
          details: '',
        });
      } else {
        alert('Error sending email. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Header />
      <div className='w-screen relative h-max px-6 md:px-12 pt-10 pb-16  md:py-20 md:pb-28'>
        <div className='flex flex-col w-fit gap-y-4'>
          <h4 className='text-sm md:text-md text-[#878c8e] font-regular ml-1 '>LET&apos;S CHAT ABOUT YOUR GOALS</h4>
          <h1 className='text-4xl md:text-6xl font-light duration-300 md:hover:font-medium transition-all'>GET IN TOUCH</h1>
        </div>

        <form className='z-[30] mt-12 w-full md:w-[50%]  flex flex-col gap-y-8' onSubmit={handleSubmit}>

          <div className='flex flex-col md:flex-row gap-y-8 md:gap-y-0 items-start w-full gap-x-6'>
            <div className='flex flex-col w-full gap-y-3'>
              <label htmlFor="fullName" className='font-light text-md'>What&apos;s your name?<span className=' text-red-600'>*</span></label>
              <input required value={formData.fullName}
                onChange={handleChange} name='fullName' type="text" className='outline-none rounded-none hover:border border-[#17191b] py-4 text-[#17191b] px-3 font-light bg-[#878c8e27]' placeholder='Full Name' />
            </div>

            <div className='flex flex-col w-full gap-y-3'>
              <label htmlFor="fullName" className='font-light text-md'>Your email<span className=' text-red-600'>*</span></label>
              <input required value={formData.email}
                onChange={handleChange} name='email' type="text" className='outline-none rounded-none hover:border border-[#17191b] py-4 text-[#17191b] px-3 font-light bg-[#878c8e27]' placeholder='Email Address' />
            </div>
          </div>

          <div className='flex flex-col w-full gap-y-3'>
            <label htmlFor="fullName" className='font-light text-md'>Let us know your goal<span className=' text-red-600'>*</span></label>
            <input required value={formData.goal}
              onChange={handleChange} name='goal' type="text" className='outline-none rounded-none hover:border border-[#17191b] py-4 text-[#17191b] px-3 font-light bg-[#878c8e27]' placeholder='Your Goal' />
          </div>

          <div className='flex flex-col w-full gap-y-3'>
            <label htmlFor="fullName" className='font-light text-md'>We&apos;d like to know some details<span className=' text-red-600'>*</span></label>
            <textarea required value={formData.details}
              onChange={handleChange} name="details" id="" cols="30" rows="5" className='resize-none outline-none rounded-none hover:border border-[#17191b] py-4 text-[#17191b] px-3 font-light bg-[#878c8e27]' placeholder='Project Details'></textarea>
          </div>

          <div>
            <button className='bg-[#17191b] w-full py-4 font-light text-[#f1f2ee]'>Submit</button>
          </div>

        </form>
      </div>
      <Footer />
    </>
  )
}

export default contact