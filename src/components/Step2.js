import Image from "next/image";
import { useState } from "react";

export default function Step2({ steps, setSteps }) {
  const [isChecked, setIsChecked] = useState(false);
  const [plan, setPlan] = useState(null);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setPlan((plan) => {
      return { ...plan, status: !isChecked };
    });
    console.log("Plan: ", plan);
  };

  const handleGoBack = () => {
    setSteps({
      step1: true,
      step2: false,
      step3: false,
      step4: false,
    });
  };

  const handleSelectPlan = (plan) => {
    plan.status = isChecked;
    setPlan(plan);
    console.log("plan: ", plan);
  };

  const handleSubmit = () => {
    try {
      if (plan) {
        setSteps({
          step1: false,
          step2: false,
          step3: true,
          step4: false,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`${steps.step2 ? "block" : "hidden"}`}>
      <h1 className="text-4xl font-semibold">Select your plan</h1>
      <p className="text-[20px] mt-3 text-[#a3a3ad]">
        You have the option of monthly or yearly billing.
      </p>

      <div className="mt-8">
        <div className="w-[561px] flex">
          <div
            onClick={() => handleSelectPlan({ plan: "Arcade", cost: "$9/mo" })}
            className={`border-2 hover:border-blue-900 hover:bg-[#f8f9fe] ${
              plan?.plan === "Arcade" ? "bg-[#f8f9fe] border-blue-900" : ""
            } rounded-lg p-5 mr-[20px] w-[170px] cursor-pointer`}
          >
            <Image
              className="mb-12"
              src="/assets/images/icon-arcade.svg"
              alt="icon-arcade"
              width={50}
              height={50}
            />
            <div className="text-lg font-semibold">Arcade</div>
            <div className="text-lg font-medium text-[#9696a0] opacity-50">
              $9/mo
            </div>
          </div>
          <div
            onClick={() =>
              handleSelectPlan({ plan: "Advanced", cost: "$12/mo" })
            }
            className={`border-2 hover:border-blue-900 hover:bg-[#f8f9fe] ${
              plan?.plan === "Advanced" ? "bg-[#f8f9fe] border-blue-900" : ""
            } rounded-lg p-5 w-[170px] cursor-pointer`}
          >
            <Image
              className="mb-12"
              src="/assets/images/icon-advanced.svg"
              alt="icon-advanced"
              width={50}
              height={50}
            />
            <div className="text-lg font-semibold">Advanced</div>
            <div className="text-lg font-medium text-[#9696a0] opacity-50">
              $12/mo
            </div>
          </div>
          <div
            onClick={() => handleSelectPlan({ plan: "Pro", cost: "$15/mo" })}
            className={`border-2 hover:border-blue-900 hover:bg-[#f8f9fe] ${
              plan?.plan === "Pro" ? "bg-[#f8f9fe] border-blue-900" : ""
            } rounded-lg p-5 w-[170px] ml-[20px] cursor-pointer`}
          >
            <Image
              className="mb-12"
              src="/assets/images/icon-pro.svg"
              alt="icon-pro"
              width={50}
              height={50}
            />
            <div className="text-lg font-semibold">Pro</div>
            <div className="text-lg font-medium text-[#9696a0] opacity-50">
              $15/mo
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center p-5 mt-10 bg-[#f8f9fe]">
          <div className="flex">
            <div className="text-md font-semibold">Monthly</div>{" "}
            <label className="relative inline-flex items-center cursor-pointer mx-4">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <div
                className={`w-12 h-6 bg-blue-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-900 rounded-full peer ${
                  isChecked
                    ? "peer-checked:after:translate-x-full peer-checked:after:border-white"
                    : ""
                } after:content-[''] after:absolute after:top-[2px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[20px] after:w-[20px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-900`}
              ></div>
            </label>
            <div className="text-md font-semibold text-[#a0a0aa]">Yearly</div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between mt-[115px]">
          <button
            onClick={handleGoBack}
            className="text-center text-lg font-semibold hover:text-blue-900"
          >
            Go Back
          </button>
          <button
            onClick={handleSubmit}
            className="text-center font-medium text-lg items-center px-6 py-3 hover:bg-[#174a8b] bg-[#03295a]  text-white rounded-lg"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
