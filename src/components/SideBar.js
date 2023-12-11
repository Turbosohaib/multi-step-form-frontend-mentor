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
    <div className="relative col-span-1 rounded-2xl">
      <Image
        src="/assets/images/bg-sidebar-desktop.png"
        className="h-[650px] w-[300px]"
        width={300}
        height={650}
        alt="sidebar"
      />
      <div className="absolute uppercase top-0 px-7 py-9 text-white">
        <div className="flex mb-6">
          {" "}
          <div
            className={`w-[40px] h-[40px] border rounded-full ${
              steps.step1 ? "bg-[#bee1fe] text-black" : ""
            } group-hover:text-black items-center leading-[0] px-[14px] py-5 font-semibold`}
          >
            1
          </div>
          <div className="ml-4">
            <div className="text-sm opacity-[0.5]">Step 1</div>
            <div className="font-semibold">Your info</div>
          </div>
        </div>
        <div className="flex mb-6">
          {" "}
          <div
            className={`w-[40px] h-[40px] border rounded-full ${
              steps.step2 ? "bg-[#bee1fe] text-black" : ""
            } group-hover:text-black items-center leading-[0] px-[14px] py-5 font-semibold`}
          >
            2
          </div>
          <div className="ml-4">
            <div className="text-sm opacity-[0.5]">Step 2</div>
            <div className="font-semibold">Select plan</div>
          </div>
        </div>
        <div className="flex mb-6">
          {" "}
          <div
            className={`w-[40px] h-[40px] border rounded-full ${
              steps.step3 ? "bg-[#bee1fe] text-black" : ""
            } group-hover:text-black items-center leading-[0] px-[14px] py-5 font-semibold`}
          >
            3
          </div>
          <div className="ml-4">
            <div className="text-sm opacity-[0.5]">Step 3</div>
            <div className="font-semibold">Add-ons</div>
          </div>
        </div>
        <div className="flex">
          {" "}
          <div
            className={`w-[40px] h-[40px] border rounded-full ${
              steps.step4 ? "bg-[#bee1fe] text-black" : ""
            } group-hover:text-black items-center leading-[0] px-[14px] py-5 font-semibold`}
          >
            4
          </div>
          <div className="ml-4">
            <div className="text-sm opacity-[0.5]">Step 4</div>
            <div className="font-semibold">Summary</div>
          </div>
        </div>
      </div>
    </div>
  );
}
