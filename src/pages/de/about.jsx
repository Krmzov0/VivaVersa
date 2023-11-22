import React from 'react'
import { motion } from 'framer-motion'
import FooterDe from '@/components/FooterDe'
import HeaderDe from '@/components/HeaderDe'

const About = () => {
  return (
    <>
      <HeaderDe />
      <div className='h-screen mb-[-15rem] sm:mb-0 overflow-x-hidden w-screen relative p-0 flex flex-col justify-start gap-y-32 items-start'>
        <div className='pl-4 sm:pl-12 pt-20'>
          <h1 className='text-[2.5rem] gap-y-6 flex flex-col sm:gap-y-0 sm:text-6xl font-light hover:font-light sm:hover:font-medium leading-[40px] sm:leading-[90px] transition-all duration-300'>
            <div className='flex gap-x-2 sm:gap-x-4 overflow-hidden'>
              <motion.div className='overflow-hidden' initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.1 }} ><h1 className='overflow-hidden'>WIR</h1></motion.div>
              <motion.div className='overflow-hidden' initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.2 }} ><h1 className='overflow-hidden'>SIND</h1></motion.div>
              <motion.div className='overflow-hidden' initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.3 }} ><h1 className='overflow-hidden'>DIE</h1></motion.div>
              <motion.div className='overflow-hidden hidden sm:flex' initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.4 }} ><h1 className='overflow-hidden'>VIVA</h1></motion.div>
              <motion.div className='overflow-hidden hidden sm:flex' initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.5 }} ><h1 className='overflow-hidden'>VERSA</h1></motion.div>
            </div>

            <div className='flex sm:hidden gap-x-2 overflow-hidden'>
              <motion.div className='overflow-hidden' initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.4 }} ><h1 className='overflow-hidden'>VIVA</h1></motion.div>
              <motion.div className='overflow-hidden' initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.5 }} ><h1 className='overflow-hidden'>VERSA</h1></motion.div>
            </div>

            <div className='overflow-hidden'>
              <motion.div className='overflow-hidden' initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.6 }}><h1 className='overflow-hidden'>AGENTUR</h1></motion.div>
            </div>
          </h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}><p className='mt-10  text-md text-[#878c8e] font-light'>Wir bieten maßgeschneiderte Dienstleistungen, damit Unternehmen im digitalen Umfeld erfolgreich sind.</p></motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 0.6 }} className='flex'>
          <div className='py-4 AboutSlider transition-all flex overflow-x-hidden sm:overflow-x-auto w-max sm:w-max items-center border-t border-b border-[#878c8e] gap-x-8'>
            <h1 className='text-[25px] sm:text-[48px] font-light text-[#878c8e] w-max'>WIR LIEBEN <span className='text-[#17191b]'>QUALITÄT</span></h1>
            <div className='h-5 w-5 bg-[#17191b] flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>

            <h1 className='text-[25px] sm:text-[48px] font-light text-[#878c8e] w-max'>WIR LIEBEN <span className='text-[#17191b]'>ZUSAMMENARBEIT</span></h1>
            <div className='h-5 w-5 bg-[#17191b] flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>

            <h1 className='text-[25px] sm:text-[48px] font-light text-[#878c8e] w-max'>WIR LIEBEN <span className='text-[#17191b]'>EINFACHHEIT</span></h1>
            <div className='h-5 w-5 bg-[#17191b] mr-8 flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>
          </div>

          <div className='py-4 AboutSlider transition-all flex overflow-x-hidden sm:overflow-x-auto w-max sm:w-max items-center border-t border-b border-[#878c8e] gap-x-8'>
            <h1 className='text-[25px] sm:text-[48px] font-light text-[#878c8e] w-max'>WIR LIEBEN <span className='text-[#17191b]'>QUALITÄT</span></h1>
            <div className='h-5 w-5 bg-[#17191b] flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>

            <h1 className='text-[25px] sm:text-[48px] font-light text-[#878c8e] w-max'>WIR LIEBEN <span className='text-[#17191b]'>ZUSAMMENARBEIT</span></h1>
            <div className='h-5 w-5 bg-[#17191b] flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>

            <h1 className='text-[25px] sm:text-[48px] font-light text-[#878c8e] w-max'>WIR LIEBEN <span className='text-[#17191b]'>EINFACHHEIT</span></h1>
            <div className='h-5 w-5 bg-[#17191b] mr-8 flex justify-center items-center'>
              <div className='h-2.5 w-2.5 bg-[#f1f2ee]'></div>
            </div>
          </div>
        </motion.div>
      </div>


      <div className='h-max relative mt-28 w-screen p-6 py-14 sm:p-14 sm:py-44 flex flex-col bg-[#17191b]'>
        <div className='overflow-hidden'>
          <motion.div className='overflow-hidden' initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7 }}><h1 className=" overflow-hidden text-[32px] sm:text-5xl font-light text-[#f1f2ee] uppercase">über uns</h1></motion.div>
        </div>

        <div className=" text-[16px] hidden mt-20 sm:flex  sm:text-[#f1f2ee] gap-y-10 text-[#878c8e] sm:text-4xl font-light flex-col">
          <div className="overflow-hidden">
            <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.1 }}><h1 className="overflow-hidden">VIVAVERSA, EINE DIGITALE DESIGNAGENTUR FÜR WELTKUNDEN</h1></motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.1 }}><h1 className="overflow-hidden">WELTWEIT, WEIß, DASS PRODUKTDESIGN NICHT NUR DARUM</h1></motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.1 }}><h1 className="overflow-hidden">GEHT ÄSTHETIK – ES GEHT DARUM, LÖSUNGEN ZU ENTWICKELN, </h1></motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.1 }}><h1 className="overflow-hidden">DIE DIR EIN KONKURRENZVORTEIL DURCH VERBESSERUNG</h1></motion.div>
          </div>
          
          <div className="overflow-hidden">
            <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.1 }}><h1 className="overflow-hidden">DER KONVERSIONSRATEN, BENUTZER ENGAGEMENT</h1></motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7, delay: 0.1 }}><h1 className="overflow-hidden">UND MARKENWAHRNEHMUNG.</h1></motion.div>
          </div>
        </div>

        <motion.div initial={{ y: 40 }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7 }} className='mt-10 flex sm:hidden'><h1 className=" text-[#878c8e] text-[17px] overflow-hidden uppercase leading-[34px]">VIVAVERSA, EINE DIGITALE DESIGNAGENTUR FÜR WELTKUNDEN WELTWEIT, WEIß, DASS PRODUKTDESIGN NICHT NUR DARUM GEHT ÄSTHETIK.</h1></motion.div> <br />

        <div className='flex mt-10 flex-col sm:hidden justify-end gap-y-10'>
          <div className='overflow-hidden'>
            <motion.div className='overflow-hidden' initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7 }}><h1 className=" text-right overflow-hidden text-[32px] sm:text-5xl font-light text-[#f1f2ee]">VISION</h1></motion.div>
          </div>
          <motion.div initial={{ y: 40 }} whileInView={{ y: 0 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7 }} className='flex sm:hidden'><h1 className=" text-[#878c8e] text-[17px] text-right overflow-hidden uppercase leading-[34px]"> ES GEHT DARUM, LÖSUNGEN ZU ENTWICKELN, DIE DIR EIN KONKURRENZVORTEIL DURCH VERBESSERUNG DER KONVERSIONSRATEN, BENUTZER ENGAGEMENT UND MARKENWAHRNEHMUNG.</h1></motion.div>
        </div>
      </div>


      <div className='h-max relative w-screen mt-28 px-6 pb-28 pt-0 flex flex-col sm:flex-row justify-between items-start gap-y-4 sm:px-12 bg-[#f1f2ee]'>

        <motion.div className='sm:sticky sm:top-10 mb-10 sm:mb-0' initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}><h1 className='text-[28px] sm:text-[38px] font-light ml-1 leading-[50px] sm:leading-[60px]'>WERTE AUS <br /> UNSERER ERFAHRUNG </h1></motion.div>

        <div className='flex flex-col sm:px-0 w-full sm:w-[50%] gap-y-2 sm:gap-y-8'>
          <div className='flex w-full sm:max-w-full flex-col py-8 pt-0 gap-y-7'>
            <motion.div initial={{ opacity: 0, scale: 1.07 }} whileInView={{ opacity: 1, scale: 1, }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className='w-full overflow-hidden h-44 flex justify-center gap-x-12 sm:gap-x-16 items-center sm:h-72 bg-[#17191b]'>

              <div className="sm:w-28 sm:h-28 w-20 h-20 flex justify-center relative items-center">

                <div className='absolute top-0 left-0 bg-[#f1f2ee] w-[50%] h-[50%]'></div>
                <div className='absolute bottom-0 bg-[#f1f2ee] right-0 w-[50%] h-[50%]'></div>

                <div className="origin-center w-14 sm:w-20 h-14 sm:h-20 bg-[#878c8e] absolute flex justify-center items-center">
                  <div className="w-14 sm:w-20 h-14 sm:h-20 bg-[#878c8e] absolute flex justify-center items-center"></div>
                </div>
              </div>

              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#f1f2ee] flex justify-center items-center">
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-[#17191b]'></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0, delay: 0.3 }} ><h1 className='text-[25px] sm:text-[32px] font-light uppercase ml-1'>Über den Tellerrand hinaus denken</h1></motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0, delay: 0.4 }} ><p className='text-lg w-fit text-[#878c8e] font-light mt-0 sm:mt-4 ml-1'>Wir fördern Kreativität und unkonventionelles Denken, liefern einzigartige Strategien, die deine Marke hervorheben und außergewöhnliche Ergebnisse erzielen.</p></motion.div>
          </div>

          <div className='flex w-full sm:max-w-full flex-col py-8 gap-y-7'>
            <motion.div initial={{ opacity: 0, scale: 1.07 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className='flex justify-center items-center w-full h-44 sm:h-72 bg-[#17191b]'>
              <div className="sm:w-32 sm:h-32 w-20 h-20 flex justify-center relative items-center">
                <div className="w-14 sm:w-24 h-14 sm:h-24 z-50 bg-[#878c8e] flex justify-center items-center">
                  <div className="w-10 sm:w-16 h-10 sm:h-16 z-50 bg-[#17191b] flex justify-center items-center">
                    <div className='w-4 sm:w-8 h-4 sm:h-8 bg-[#f1f2ee]'></div>
                  </div>
                </div>
                <div className='w-10 sm:w-12 h-full bg-[#f1f2ee] absolute left-0'></div>
                <div className='h-10 sm:h-12 w-full bg-[#f1f2ee] absolute bottom-0'></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0, delay: 0.3 }} ><h1 className='text-[25px] sm:text-[32px] font-light uppercase ml-1'>Innovation und Anpassungsfähigkeit</h1></motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0, delay: 0.4 }} ><p className='text-lg w-fit text-[#878c8e] font-light mt-0 sm:mt-4 ml-1'>Wir blühen in der Innovation auf und passen uns der ständig wandelnden digitalen Landschaft an, um sicherzustellen, dass deine Strategien frisch und effektiv bleiben.</p></motion.div>
          </div>

          <div className='flex w-full sm:max-w-full flex-col py-8 gap-y-7'>
            <motion.div initial={{ opacity: 0, scale: 1.07 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className='flex justify-center items-center w-full h-44 sm:h-72 bg-[#17191b]'>
              <div className="sm:w-32 sm:h-32 w-20 h-20 flex justify-center relative items-center">
                <div className='w-[25%] h-full bg-[#f1f2ee] absolute left-0'></div>
                <div className='w-[25%] h-full bg-[#f1f2ee] absolute right-0'></div>

                <div className='flex justify-center items-center w-[4rem] sm:w-24 z-50 h-[4rem] sm:h-24 bg-[#878c8e]'>
                  <div className='flex justify-center items-center bg-[#17191b] w-10 h-10 sm:w-16 sm:h-16 z-50'>
                    <div className='w-4 h-4 sm:w-8 sm:h-8 bg-[#f1f2ee]'></div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0, delay: 0.3 }} ><h1 className='text-[25px] sm:text-[32px] font-light uppercase ml-1'>Kundenorientierter Ansatz</h1></motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0, delay: 0.4 }} ><p className='text-lg w-fit text-[#878c8e] font-light mt-0 sm:mt-4 ml-1'>Ihr Erfolg steht an erster Stelle. Wir konzentrieren uns darauf, Ihre individuellen Bedürfnisse zu verstehen und maßgeschneiderte Lösungen zu liefern.</p></motion.div>
          </div>

          <div className='flex w-full sm:max-w-full flex-col py-8 gap-y-7'>
            <motion.div initial={{ opacity: 0, scale: 1.07 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className='flex justify-center items-center w-full h-44 sm:h-72 bg-[#17191b]'>
              <div className="sm:w-32 sm:h-32 w-20 h-20 flex justify-center relative items-center">

                <div className='w-full bottom-0 h-[30%] absolute bg-[#878c8e]'></div>

                <div className='flex justify-center items-center w-[4rem] sm:w-24 z-50 h-[4rem] sm:h-24 bg-[#f1f2ee]'>
                  <div className='flex justify-center items-center bg-[#878c8e] w-10 h-10 sm:w-16 sm:h-16 z-50'>
                    <div className='w-4 h-4 sm:w-8 sm:h-8 bg-[#17191b]'></div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0, delay: 0.3 }} ><h1 className='text-[25px] sm:text-[32px] font-light uppercase ml-1'>Kooperative Partnerschaften</h1></motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0, delay: 0.4 }} ><p className='text-lg w-fit text-[#878c8e] font-light mt-0 sm:mt-4 ml-1'>Wir betrachten unsere Kunden als Partner, fördern die Zusammenarbeit und offene Kommunikation, um gemeinsame Ziele zu erreichen.</p></motion.div>
          </div>
        </div>

      </div>

      <FooterDe />
    </>
  )
}

export default About
