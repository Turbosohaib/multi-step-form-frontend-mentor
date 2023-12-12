import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "700"] });

import SideBar from "@/components/SideBar";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import Step4 from "@/components/Step4";
import { useState } from "react";
import Step5 from "@/components/Step5";

export default function Home() {
  const [steps, setSteps] = useState({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
  });
  const [plan, setPlan] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [addOns, setAddOns] = useState({});

  console.log("Steps: ", steps);

  return (
    <div
      className={`relative md:flex justify-center h-screen bg-[#eef5ff] items-center ${ubuntu.className}`}
    >
      <div className="relative  md:grid grid-cols-4 md:p-4 bg-white md:rounded-2xl shadow-xl">
        <SideBar steps={steps} setSteps={setSteps} />
        <main
          className={`col-span-3 w-full flex justify-center items-center md:pt-12 md:bg-white bg-[#eef5ff] md:px-[100px]`}
        >
          <Step1 steps={steps} setSteps={setSteps} />
          <Step2
            steps={steps}
            setSteps={setSteps}
            plan={plan}
            setPlan={setPlan}
            setAddOns={setAddOns}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
          <Step3
            steps={steps}
            setSteps={setSteps}
            addOns={addOns}
            setAddOns={setAddOns}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
          <Step4
            steps={steps}
            setSteps={setSteps}
            plan={plan}
            addOns={addOns}
            isChecked={isChecked}
          />
          <Step5 steps={steps} />
        </main>
      </div>
    </div>
  );
}
