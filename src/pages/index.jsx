import AnimatedH1 from "../components/AnimatedHeroH1";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import React from "react";
import AnimatedAboutSection from "@/components/AnimatedAboutSection";
import MagneticHover from "@/components/MagneticHover";


export default function Home() {

  const router = useRouter();

  return (
    <div className="">

      <div className="relative flex justify-start sm:justify-center gap-y-0 sm:gap-y-24 flex-col items-center h-max sm:h-screen w-full">
        <div className="flex flex-col justify-center items-center mt-14 sm:mt-0 relative">
          <p className="text-[#878c8e] unbounded font-light mb-3 sm:md-4 text-sm sm:text-[16px] text-center">DIGITAL MARKETING AGENCY</p>

          <div>
            <AnimatedH1 />
          </div>
        </div>


        <div className="w-max relative mb-0 mt-16 sm:mt-0 sm:mb-14 flex-row sm:flex-row flex gap-x-6 sm:gap-x-12 gap-y-6 sm:gap-y-0 justify-between items-center">
          <div className=" h-max w-max flex flex-col gap-y-8 justify-center items-center">
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.5 }} className="origin-bottom"><div className="w-14 h-14 relative bg-[#17191b] flex justify-center items-center">
              <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.9 }} className="origin-center w-14 h-4 bg-[#878c8e] absolute"><div className="w-14 h-4 bg-[#878c8e] absolute"></div></motion.div>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }} className="origin-center"><div className="w-8 h-8 bg-[#f1f2ee]"></div></motion.div>
            </div></motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} ><h3 className="text-md sm:text-lg text-center unbounded font-light uppercase">Social Media <br /> Marketing</h3></motion.div>
          </div>

          <div className="h-full w-[1px] bg-[#878c8e47]  flex"></div>

          <div className="h-max w-max flex flex-col gap-y-8 justify-center items-center">
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1.2 }} className="origin-top w-14 h-14 bg-[#17191b] flex justify-center items-center"><div className="w-14 h-14 bg-[#17191b] flex justify-center items-center">
              <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1.6 }} className="origin-bottom w-8 h-full bg-[#878c8e]"><div className="w-8 h-full bg-[#878c8e]"></div></motion.div>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8 }} className="origin-center w-8 h-8 bg-[#f1f2ee] absolute flex justify-center items-center"><div className="w-8 h-8 bg-[#f1f2ee] absolute flex justify-center items-center">
                <div className="w-4 h-4 bg-[#17191b]"></div>
              </div></motion.div>
            </div></motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }} ><h3 className="text-md sm:text-lg text-center unbounded text-[#17191b] font-light uppercase">Website <br /> Developement</h3></motion.div>
          </div>
        </div>
      </div>

      <div className="p-8 sm:p-12 sm:pt-0 w-screen h-full flex ">
        <div className="mt-16 flex justify-center items-center w-full h-[30vh] sm:h-[100vh] bg-[#17191b]">
          <Image
            src="/WhiteLogo.svg"
            width={80}
            height={80}
            alt=''
            priority={true}
          />
        </div>
      </div>

      <div className="h-max sm:h-max relative w-screen p-8 sm:p-12 pb-28 sm:pb-44 sm:pr-16 flex flex-col justify-center">

        <div className="w-full justify-between gap-y-8 sm:gap-y-0 flex flex-col-reverse sm:flex-row  items-end sm:items-center">
          <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }}  >
            <h1 className="unbounded text-[38px] font-light text-right sm:text-left">GET TO <br />KNOW US BETTER</h1>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}  ><div onClick={() => router.push('/about')} className="flex aboutLink cursor-pointer relative items-center gap-x-4">
            <h2 className="unbounded text-xl text-[#17191b] font-light relative">ABOUT</h2>
            <div className=" transition-all flex justify-end w-14 h-14 relative">
              <div className=" transition-all blackcube w-[50%] h-full bg-[#17191b]"></div>
              <div className=" transition-all graycube w-8 h-8 bg-[#878c8e] absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] "></div>
            </div>
          </div></motion.div>
        </div>

        <div className="mt-14">
          <div className="unbounded text-[16px] hidden sm:flex  sm:text-[#17191b] gap-y-10 text-[#878c8e] sm:text-4xl font-light flex-col">
            <div className="overflow-hidden">
              <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}><h1 className="overflow-hidden">VIVAVERSA, A DIGITAL DESIGN AGENCY WITH GLOBAL CLIENTS</h1></motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}><h1 className="overflow-hidden">WORLDWIDE, KNOWS THAT PRODUCT DESIGN ISN&apos;T JUST ABOUT</h1></motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}><h1 className="overflow-hidden"> - IT&apos;S ABOUT CRAFTING SOLUTIONS THAT GIVE YOU A</h1></motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}><h1 className="overflow-hidden">COMPETITIVE EDGE BY ENHANCING CONVERSION RATES, USER</h1></motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}><h1 className="overflow-hidden">ENGAGEMENT, AND BRAND PERCEPTION.</h1></motion.div>
            </div>
          </div>

          <AnimatedAboutSection />
        </div>
      </div>

      <div className="z-10 w-screen relative h-full gap-y-16 sm:gap-y-20 flex flex-col bg-[#17191b] p-8 py-16 sm:py-12 sm:p-12 pb-28 sm:pb-44  sm:pr-16">

        <div className="flex flex-col">
          <div className="w-full justify-between gap-y-8 sm:gap-y-0 flex flex-col-reverse sm:flex-row  items-end sm:items-center">

            <motion.div initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} ><div>
              <h1 className="unbounded text-[38px] font-light text-[#f1f2ee] text-right sm:text-left">SERVICES <br /> WHAT WE&apos;RE GOOD AT</h1>
            </div></motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}  ><div onClick={() => router.push('/services')} className="flex servicesLink cursor-pointer relative items-center gap-x-4">
              <h2 className="unbounded text-xl text-[#f1f2ee] font-light relative">SERVICES</h2>
              <div className=" transition-all flex justify-end w-14 h-14 relative">
                <div className=" transition-all whiteCube w-[50%] h-full bg-[#f1f2ee]"></div>
                <div className=" transition-all graycube w-8 h-8 bg-[#878c8e] absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] "></div>
              </div>
            </div></motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}  ><p className=" mt-10 unbounded text-[16px] text-[#878c8e]">We provide tailored services for businesses to succeed in the digital landscape.</p></motion.div>

        </div>

        <div>
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} > <div className="py-10 border-b-2 border-[#f1f2ee]">
            <h1 className="text-2xl sm:text-[32px] text-[#f1f2ee] unbounded font-light hover:font-medium transition-all duration-300 gap-x-4 flex items-center"><span className="text-[#878c8e]">01</span> SOCIAL MEDIA MARKETING</h1>
          </div></motion.div>

          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 }} > <div className="py-10 border-b-2 border-[#f1f2ee]">
            <h1 className="text-2xl sm:text-[32px] text-[#f1f2ee] unbounded font-light hover:font-medium transition-all duration-300 gap-x-4 flex items-center"><span className="text-[#878c8e]">02</span> WEB DESIGN</h1>
          </div></motion.div>

          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.3 }} > <div className="py-10 border-b-2 border-[#f1f2ee]">
            <h1 className="text-2xl sm:text-[32px] text-[#f1f2ee] unbounded font-light hover:font-medium transition-all duration-300 gap-x-4 flex items-center"><span className="text-[#878c8e]">03</span> WEB DEVELOPMENT</h1>
          </div></motion.div>
        </div>
      </div>

      <div className="h-max w-screen flex flex-col sm:flex-row pt-20 sm:pt-20 justify-between bg-[#f1f2ee] items-start px-0 sm:px-12 p-8 sm:p-12 pb-16 sm:pb-44 sm:pr-16">

        <motion.div className="sm:px-0 relative sm:sticky sm:top-10" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} >
          <div className=" px-8 sm:px-0 relative sm:sticky sm:top-10">
            <h1 className="unbounded text-[16px] sm:text-[24px] font-light text-[#878c8e]">TECH STACK</h1>
            <h1 className="unbounded text-[30px] sm:text-[38px] font-light text-[#17191b] mt-1">TECHNOLOGIES <br /> WE USE</h1>
          </div>
        </motion.div>

        <div className="grid mt-10 sm:mt-0 grid-cols-2 grid-rows-2 w-full sm:w-[60%]">
          <div className="p-24 border border-t-0 border-b-0 border-[#17191b] border-l-0 flex justify-center items-center">
            <motion.div className="stackImg absolute w-24 sm:w-32" transition={{ duration: 0.4 }} initial={{ opacity: 0, scale: 1.4 }} whileInView={{ opacity: 1, scale: 1 }}>
              <MagneticHover>
                <Image alt="" className="stackImg absolute w-24 sm:w-32" src="/next.svg" width={30} height={30} />
              </MagneticHover>
            </motion.div>
          </div>

          <div className="p-24 border-[#17191b] flex justify-center items-center">
            <motion.div className="stackImg absolute w-24 sm:w-32" transition={{ duration: 0.4 }} initial={{ opacity: 0, scale: 1.4 }} whileInView={{ opacity: 1, scale: 1 }}>
              <MagneticHover>
                <Image alt="" className="stackImg absolute w-24 sm:w-32" src="/framer.svg" width={30} height={30} />
              </MagneticHover>
            </motion.div>
          </div>

          <div className="p-24 border border-t-1 border-[#17191b] border-l-0  flex  justify-center items-center">
            <motion.div className="stackImg absolute w-24 sm:w-32" transition={{ duration: 0.4 }} initial={{ opacity: 0, scale: 1.4 }} whileInView={{ opacity: 1, scale: 1 }}>
              <MagneticHover>
                <Image alt="" className="stackImg absolute w-24 sm:w-32" src="/ps.svg" width={30} height={30} />
              </MagneticHover>
            </motion.div>
          </div>

          <div className="p-24 border border-[#17191b] border-r-0 border-l-0  flex justify-center items-center">
            <motion.div className="stackImg absolute w-24 sm:w-32" initial={{ opacity: 0, scale: 1.4 }} whileInView={{ opacity: 1, scale: 1 }}>
              <MagneticHover>
                <Image alt="" className="stackImg absolute w-24 sm:w-32" src="/il.svg" width={30} height={30} />
              </MagneticHover>
            </motion.div>
          </div>

          <div className="p-24  border border-t-0 border-b-0 border-[#17191b] border-l-0  flex justify-center items-center">
            <motion.div className="stackImg absolute w-24 sm:w-32" initial={{ opacity: 0, scale: 1.4 }} whileInView={{ opacity: 1, scale: 1 }}>
              <MagneticHover>
                <Image alt="" className="stackImg absolute w-24 sm:w-32" src="/meta.svg" width={30} height={30} />
              </MagneticHover>
            </motion.div>
          </div>

          <div className="p-24  border-0 flex justify-center items-center">
            <motion.div className="stackImg absolute w-24 sm:w-32" initial={{ opacity: 0, scale: 1.4 }} whileInView={{ opacity: 1, scale: 1 }}>
              <MagneticHover>
                <Image alt="" className="stackImg absolute w-24 sm:w-32" src="/premiere.svg" width={30} height={30} />
              </MagneticHover>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  )
}
