import { useState } from "react";
import Image from "next/image";

export default function SideBar({ steps, setSteps }) {
  // const handleStepChange = (step) => {
  //   if (step === "step1") {
  //     setSteps({
  //       step1: true,
  //       step2: false,
  //       step3: false,
  //       step4: false,
  //     });
  //   } else if (step === "step2") {
  //     setSteps({
  //       step1: false,
  //       step2: true,
  //       step3: false,
  //       step4: false,
  //     });
  //   } else if (step === "step3") {
  //     setSteps({
  //       step1: false,
  //       step2: false,
  //       step3: true,
  //       step4: false,
  //     });
  //   } else if (step === "step4") {
  //     setSteps({
  //       step1: false,
  //       step2: false,
  //       step3: false,
  //       step4: true,
  //     });
  //   }
  // };

  return (
    <div className="md:w-[270px] w-full md:h-full h-[200px] md:py-0 py-[20px] col-span-1 md:rounded-lg md:bg-[url('../../public/assets/images/bg-sidebar-desktop.png')]  bg-[url('/assets/images/bg-sidebar-mobile.png')] bg-no-repeat bg-cover">
      <div className="md:block flex justify-center items-center uppercase px-7 md:w-fit w-full  py-9 text-white">
        <div className="flex md:mb-6 md:px-0 px-4">
          <div
            className={`w-[40px] h-[40px] border rounded-full ${
              steps.step1 ? "bg-[#bee1fe] text-black" : ""
            } group-hover:text-black items-center leading-[0] px-[14px] py-5 font-semibold`}
          >
            1
          </div>
          <div className="ml-4 md:block hidden">
            <div className="text-sm opacity-[0.5]">Step 1</div>
            <div className="text-lg font-semibold">Your info</div>
          </div>
        </div>
        <div className="flex md:mb-6 md:px-0 px-4">
          {" "}
          <div
            className={`w-[40px] h-[40px] border rounded-full ${
              steps.step2 ? "bg-[#bee1fe] text-black" : ""
            } group-hover:text-black items-center leading-[0] px-[14px] py-5 font-semibold`}
          >
            2
          </div>
          <div className="ml-4 md:block hidden">
            <div className="text-sm opacity-[0.5]">Step 2</div>
            <div className="text-lg font-semibold">Select plan</div>
          </div>
        </div>
        <div className="flex md:mb-6 md:px-0 px-4">
          {" "}
          <div
            className={`w-[40px] h-[40px] border rounded-full ${
              steps.step3 ? "bg-[#bee1fe] text-black" : ""
            } group-hover:text-black items-center leading-[0] px-[14px] py-5 font-semibold`}
          >
            3
          </div>
          <div className="ml-4 md:block hidden">
            <div className="text-sm opacity-[0.5]">Step 3</div>
            <div className="text-lg font-semibold">Add-ons</div>
          </div>
        </div>
        <div className="flex md:px-0 px-4">
          {" "}
          <div
            className={`w-[40px] h-[40px] border rounded-full ${
              steps.step4 ? "bg-[#bee1fe] text-black" : ""
            } group-hover:text-black items-center leading-[0] px-[14px] py-5 font-semibold`}
          >
            4
          </div>
          <div className="ml-4 md:block hidden">
            <div className="text-sm opacity-[0.5]">Step 4</div>
            <div className="text-lg font-semibold">Summary</div>
          </div>
        </div>
      </div>
    </div>
  );
}
