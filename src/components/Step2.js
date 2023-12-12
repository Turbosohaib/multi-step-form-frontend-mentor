import Image from "next/image";
import { useState } from "react";

export default function Step2({
  steps,
  setSteps,
  plan,
  setPlan,
  setAddOns,
  isChecked,
  setIsChecked,
}) {
  const handleCheckboxChange = () => {
    const status = !isChecked;
    setIsChecked(status);
    setAddOns({});
    setPlan((plan) => {
      if (plan.plan === "Arcade" && status === true) {
        return { ...plan, cost: "$90/yr", status: status };
      } else if (plan.plan === "Arcade" && status === false) {
        return { ...plan, cost: "$9/mo", status: status };
      } else if (plan.plan === "Advanced" && status === true) {
        return { ...plan, cost: "$120/yr", status: status };
      } else if (plan.plan === "Advanced" && status === false) {
        return { ...plan, cost: "$12/mo", status: status };
      } else if (plan.plan === "Pro" && status === true) {
        return { ...plan, cost: "$150/yr", status: status };
      } else {
        return { ...plan, cost: "$50/mo", status: status };
      }
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
    if (plan) {
      setSteps({
        step1: false,
        step2: false,
        step3: true,
        step4: false,
      });
    }
  };

  return (
    <>
      <div
        className={`md:static absolute top-[140px] ${
          steps.step2 ? "block" : "hidden"
        } md:w-full w-[350px] bg-white md:p-0 p-5 md:rounded-none rounded-xl`}
      >
        {" "}
        <h1 className="md:text-4xl text-3xl font-semibold">Select your plan</h1>
        <p className="text-[20px] mt-3 text-[#a3a3ad]">
          You have the option of monthly or yearly billing.
        </p>
        <div className="mt-8">
          <div className="w-full md:flex">
            <div
              onClick={() => {
                if (isChecked) {
                  handleSelectPlan({
                    plan: "Arcade",
                    cost: "$90/yr",
                  });
                } else {
                  handleSelectPlan({
                    plan: "Arcade",
                    cost: "$9/mo",
                  });
                }
              }}
              className={`border-2 hover:border-blue-900 hover:bg-[#f8f9fe] ${
                plan?.plan === "Arcade" ? "bg-[#f8f9fe] border-blue-900" : ""
              } rounded-lg md:p-5 p-3 md:mr-[20px] md:block flex md:w-[170px] cursor-pointer`}
            >
              <div>
                <Image
                  className="md:mb-12"
                  src="/assets/images/icon-arcade.svg"
                  alt="icon-arcade"
                  width={50}
                  height={50}
                />
              </div>
              <div className="ml-3">
                <div className="text-lg font-semibold">Arcade</div>
                <div className="text-lg font-medium text-[#9696a0] opacity-50">
                  {isChecked ? "$90/yr" : "$9/mo"}
                </div>
                <div
                  className={`text-sm  font-semibold ${
                    isChecked ? "" : "opacity-0"
                  } `}
                >
                  2 months free
                </div>
              </div>
            </div>

            <div
              onClick={() => {
                if (isChecked) {
                  handleSelectPlan({ plan: "Advanced", cost: "$120/yr" });
                } else {
                  handleSelectPlan({
                    plan: "Advanced",
                    cost: "$12/mo",
                  });
                }
              }}
              className={`border-2 hover:border-blue-900 hover:bg-[#f8f9fe] ${
                plan?.plan === "Advanced" ? "bg-[#f8f9fe] border-blue-900" : ""
              } rounded-lg md:p-5 p-3 md:my-0 my-3 md:w-[170px] md:block flex cursor-pointer`}
            >
              <div>
                <Image
                  className="md:mb-12"
                  src="/assets/images/icon-advanced.svg"
                  alt="icon-advanced"
                  width={50}
                  height={50}
                />
              </div>

              <div className="md:ml-0 ml-3">
                <div className="text-lg font-semibold">Advanced</div>
                <div className="text-lg font-medium text-[#8b8b92] opacity-50">
                  {isChecked ? "$120/yr" : "$12/mo"}
                </div>
                <div
                  className={`text-sm font-semibold ${
                    isChecked ? "" : "opacity-0"
                  }`}
                >
                  2 months free
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                if (isChecked) {
                  handleSelectPlan({ plan: "Pro", cost: "$150/yr" });
                } else {
                  handleSelectPlan({ plan: "Pro", cost: "$15/mo" });
                }
              }}
              className={`border-2 hover:border-blue-900 hover:bg-[#f8f9fe] ${
                plan?.plan === "Pro" ? "bg-[#f8f9fe] border-blue-900" : ""
              } rounded-lg md:p-5 p-3 md:w-[170px] md:block flex md:h-[215px] md:ml-[20px] cursor-pointer`}
            >
              <div>
                <Image
                  className="md:mb-12"
                  src="/assets/images/icon-pro.svg"
                  alt="icon-pro"
                  width={50}
                  height={50}
                />
              </div>

              <div className="ml-3">
                <div className="text-lg font-semibold">Pro</div>
                <div className="text-lg font-medium text-[#9696a0] opacity-50">
                  {isChecked ? "$150/yr" : "$15/mo"}
                </div>
                <div
                  className={`text-sm font-semibold ${
                    isChecked ? "" : "opacity-0"
                  }`}
                >
                  2 months free
                </div>
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
          <div className="w-full flex items-center justify-between md:mt-[102px] mt-[20px] ">
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
    </>
  );
}
