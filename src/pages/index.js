import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
import SideBar from "@/components/SideBar";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import { useState } from "react";

export default function Home() {
  const [steps, setSteps] = useState({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
  });

  return (
    <div
      className={`flex justify-center h-screen bg-[#eef5ff] items-center ${ubuntu.className}`}
    >
      <div className="flex p-4 bg-white rounded-2xl shadow-xl">
        <SideBar steps={steps} setSteps={setSteps} />
        <main className={`items-center pt-12 px-[110px]`}>
          <Step1 steps={steps} setSteps={setSteps} />
          <Step2 steps={steps} setSteps={setSteps} />
        </main>
      </div>
    </div>
  );
}
