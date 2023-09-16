import Header from "@/components/Header";
import { MonitorMobbile, StatusUp, } from "iconsax-react";
import AnimatedH1 from "../components/AnimatedH1";

export default function Home() {
  return (
    <div className="">

      <div className="flex justify-start sm:justify-between flex-col items-center h-screen border w-full">
        <Header />

        <div className="flex flex-col justify-center items-center mt-24 sm:mt-0 relative">
          <p className="text-[#878c8e] unbounded font-light mb-3 sm:md-4 text-sm sm:text-md text-center">DIGITAL MARKETING AGENCY</p>

          <div>
            <AnimatedH1 />
          </div>
        </div>

        <div className="w-max mb-10 relative hidden sm:flex gap-x-12 justify-between items-center">
          <div className=" h-max w-max flex flex-col justify-center items-center">
            <StatusUp size="36" color="#17191b" variant="Broken" />
            <h3 className="text-lg text-center mt-6 unbounded font-regular">Social Media <br /> Marketing</h3>
          </div>

          <div className="h-full w-[1px] bg-[#878c8e7b]"></div>

          <div className="h-max w-max flex flex-col justify-center items-center">
            <MonitorMobbile size="36" color="#17191b" variant="Broken" />
            <h3 className="text-lg text-center unbounded mt-6 text-[#17191b] font-regular">Website <br /> Developement</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
