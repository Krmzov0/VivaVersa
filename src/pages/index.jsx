import Header from "@/components/Header";
import AnimatedH1 from "../components/AnimatedH1";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Home() {

  const router = useRouter();


  return (
    <div className="">

      <div className=" relative flex justify-start sm:justify-between flex-col items-center h-screen w-full">
        <Header />

        <div className="flex flex-col justify-center items-center mt-20 sm:mt-0 relative">
          <p className="text-[#878c8e] unbounded font-light mb-3 sm:md-4 text-sm sm:text-[16px] text-center">DIGITAL MARKETING AGENCY</p>

          <div>
            <AnimatedH1 />
          </div>
        </div>


        <div className="w-max relative mb-0 mt-16 sm:mt-0 sm:mb-14 flex-col sm:flex-row flex gap-x-12 gap-y-6 sm:gap-y-0 justify-between items-center">
          <div className=" h-max w-max flex flex-col gap-y-8 justify-center items-center">
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.5 }} className="origin-bottom"><div className="w-14 h-14 relative bg-[#17191b] flex justify-center items-center">
              <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.9 }} className="origin-center w-14 h-4 bg-[#878c8e] absolute"><div className="w-14 h-4 bg-[#878c8e] absolute"></div></motion.div>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }} className="origin-center"><div className="w-8 h-8 bg-[#f1f2ee]"></div></motion.div>
            </div></motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} ><h3 className="text-lg text-center unbounded font-light uppercase">Social Media <br /> Marketing</h3></motion.div>
          </div>

          <div className="h-full w-[1px] bg-[#878c8e47] hidden sm:flex"></div>
          <div className="h-[1px] w-full bg-[#878c8e47] flex sm:hidden"></div>

          <div className="h-max w-max flex flex-col gap-y-8 justify-center items-center">
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1.2 }} className="origin-top w-14 h-14 bg-[#17191b] flex justify-center items-center"><div className="w-14 h-14 bg-[#17191b] flex justify-center items-center">
              <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 1.6 }} className="origin-bottom w-8 h-full bg-[#878c8e]"><div className="w-8 h-full bg-[#878c8e]"></div></motion.div>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8 }} className="origin-center w-8 h-8 bg-[#f1f2ee] absolute flex justify-center items-center"><div className="w-8 h-8 bg-[#f1f2ee] absolute flex justify-center items-center">
                <div className="w-4 h-4 bg-[#17191b]"></div>
              </div></motion.div>
            </div></motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }} ><h3 className="text-lg text-center unbounded text-[#17191b] font-light uppercase">Website <br /> Developement</h3></motion.div>
          </div>
        </div>
      </div>

      <div className="p-12 w-screen h-full">
        <div className="mt-16 flex justify-center items-center w-full h-[100vh] bg-[#17191b]">
          <Image
            src="/LogoWhite.png"
            width={260}
            height={260}
            alt=''
            priority={true}
          />
        </div>
      </div>

      <div className="h-screen w-screen p-12 hidden sm:flex flex-col justify-start">
        <div className="w-full justify-between flex items-center">
          <h1 className="unbounded text-[38px] font-light">GET TO <br />KNOW US BETTER</h1>

          <div onClick={() => router.push('/about')} className="flex aboutLink cursor-pointer relative items-center gap-x-4">
            <h2 className="unbounded text-xl text-[#17191b] font-light relative">ABOUT</h2>
            <div className=" transition-all flex justify-end w-14 h-14 relative">
              <div className=" transition-all blackcube w-[50%] h-full bg-[#17191b]"></div>
              <div className=" transition-all graycube w-8 h-8 bg-[#878c8e] absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] "></div>
            </div>
          </div>
        </div>

        {/* <div className="mt-6">
          <p className="unbounded text-[16px] font-regular text-[#878c8e] hidden">At VivaVersa, we're more than just a business. We're a team of passionate individuals <br /> dedicated to briefly describe your mission and values</p>
        </div> */}

        <div className="mt-24 relative">
          <h1 className="text-[34px] uppercase unbounded text-[#17191b] font-light leading-[70px]">Driving digital success through <br /> expert marketing strategies and <br /> data-driven solutions. </h1>
        </div>


      </div>

      <div className="z-10 w-screen h-full gap-y-20 hidden sm:flex flex-col bg-[#17191b] p-12 pr-0  sm:pr-16">

        <div className="flex flex-col">


          <div className="w-full justify-between flex items-center">

            <div className="flex flex-col">
              <h1 className="unbounded text-[38px] font-light text-[#f1f2ee]">SERVICES <br /> WHAT WE’RE GOOD AT</h1>
            </div>

            <div onClick={() => router.push('/services')} className="flex servicesLink cursor-pointer relative items-center gap-x-4">
              <h2 className="unbounded text-xl text-[#f1f2ee] font-light relative">SERVICES</h2>
              <div className=" transition-all flex justify-end w-14 h-14 relative">
                <div className=" transition-all whiteCube w-[50%] h-full bg-[#f1f2ee]"></div>
                <div className=" transition-all graycube w-8 h-8 bg-[#878c8e] absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] "></div>
              </div>
            </div>
          </div>

          <p className=" mt-10 unbounded text-[16px] text-[#878c8e]">We provide tailored services for businesses to succeed in the digital landscape.</p>

        </div>

        <div className="">
          <div className="py-10 border-b-2 border-[#f1f2ee]">
            <h1 className="text-[32px] text-[#f1f2ee] unbounded font-light gap-x-4 flex items-center"><span className="text-[#878c8e]">01</span> SOCIAL MEDIA MARKETING</h1>
          </div>

          <div className="py-10 border-b-2 border-[#f1f2ee]">
            <h1 className="text-[32px] text-[#f1f2ee] unbounded font-light gap-x-4 flex items-center"><span className="text-[#878c8e]">03</span> WEB DESIGN</h1>
          </div>

          <div className="py-10 border-b-2 border-[#f1f2ee]">
            <h1 className="text-[32px] text-[#f1f2ee] unbounded font-light gap-x-4 flex items-center"><span className="text-[#878c8e]">02</span> WEB DEVELOPMENT</h1>
          </div>
        </div>
      </div>


    </div>
  )
}
