import { useEffect, useState } from "react";
import Image from "next/image";

export default function Step3({
  steps,
  setSteps,
  isChecked,
  addOns,
  setAddOns,
}) {
  const handleGoBack = () => {
    setSteps({
      step1: false,
      step2: true,
      step3: false,
      step4: false,
    });
  };

  const handleStepNext = () => {
    setSteps({
      step1: false,
      step2: false,
      step3: false,
      step4: true,
    });
  };

  const handleAddon = (addonKey, defaultAddOn, addOnCost) => {
    setAddOns((prevAddOns) => {
      if (prevAddOns?.hasOwnProperty(addonKey)) {
        // Create a copy of the state object without the specified key
        const updatedAddOns = { ...prevAddOns };
        delete updatedAddOns[addonKey];
        return updatedAddOns;
      } else {
        // If the key doesn't exist, add it with a default value
        return {
          ...prevAddOns,
          [addonKey]: {
            checked: true,
            addOn: defaultAddOn,
            addOnCost: addOnCost,
          },
        };
      }
    });
  };

  const handleAddon1 = () => {
    if (isChecked) {
      handleAddon("addOns1", "Online service", "$10/yr");
    } else {
      handleAddon("addOns1", "Online service", "$1/mo");
    }
  };

  const handleAddon2 = () => {
    if (isChecked) {
      handleAddon("addOns2", "Larger storage", "$20/yr");
    } else {
      handleAddon("addOns2", "Larger storage", "$2/mo");
    }
  };

  const handleAddon3 = () => {
    if (isChecked) {
      handleAddon("addOns3", "Customizable Profile", "$20/yr");
    } else {
      handleAddon("addOns3", "Customizable Profile", "$2/mo");
    }
  };

  useEffect(() => {
    // Log the updated state after the state has been updated
    console.log(addOns);
  }, [addOns]);

  console.log("steps", steps);

  return (
    <div
      className={`md:static absolute top-[140px] ${
        steps.step3 ? "block" : "hidden"
      } md:w-full w-[350px] bg-white md:p-0 p-5 md:rounded-none rounded-xl`}
    >
      <h1 className="md:text-4xl text-3xl font-semibold">Pick add-ons</h1>
      <p className="text-[20px] mt-3 text-[#a3a3ad]">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="mt-8">
        <div>
          <div
            onClick={handleAddon1}
            class={`flex items-center border-2 px-6 md:py-6 py-4 cursor-pointer ${
              addOns?.addOns1?.checked ? "bg-[#f8f9fe] border-blue-400" : ""
            } hover:bg-[#f8f9fe] hover:border-blue-400 rounded-lg my-3`}
          >
            <div className="flex w-full justify-between items-center">
              <div className="flex items-center">
                <div
                  className={`flex justify-center md:w-6 w-7 h-6 ${
                    addOns?.addOns1?.checked ? "bg-blue-600" : "bg-white"
                  }  border-2 border-gray-400 rounded`}
                >
                  {addOns?.addOns1?.checked ? (
                    <Image
                      src="/assets/images/icon-checkmark.svg"
                      alt="icon-checkmark"
                      width={20}
                      height={20}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="md:ml-6 ml-4">
                  <div class="md:text-lg text-base font-semibold text-gray-900 dark:text-gray-300">
                    Online service
                  </div>
                  <div className="md:text-base text-sm text-gray-600 opacity-50">
                    Access to multiplayer games
                  </div>
                </div>
              </div>

              <div className="text-lg text-blue-600 font-semibold">
                {isChecked ? "+$10/yr" : "+$1/mo"}
              </div>
            </div>
          </div>
          <div
            onClick={handleAddon2}
            class={`flex items-center border-2 px-6 py-6 cursor-pointer ${
              addOns?.addOns2?.checked ? "bg-[#f8f9fe] border-blue-400" : ""
            } hover:bg-[#f8f9fe] hover:border-blue-400 rounded-lg my-3`}
          >
            <div className="flex w-full justify-between items-center">
              <div className="flex items-center">
                <div
                  className={`flex justify-center md:w-6 w-6 h-6 ${
                    addOns?.addOns2?.checked ? "bg-blue-600" : "bg-white"
                  }  border-2 border-gray-400 rounded`}
                >
                  {addOns?.addOns2?.checked ? (
                    <Image
                      src="/assets/images/icon-checkmark.svg"
                      alt="icon-checkmark"
                      width={20}
                      height={20}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="md:ml-6 ml-4">
                  <div class="md:text-lg text-base font-semibold text-gray-900 dark:text-gray-300">
                    Larger storage
                  </div>
                  <div className="md:text-base text-sm text-gray-600 opacity-50">
                    Extra 1TB of cloud save
                  </div>
                </div>
              </div>

              <div className="text-lg text-blue-600 font-semibold">
                {" "}
                {isChecked ? "+$20/yr" : "+$2/mo"}
              </div>
            </div>
          </div>
          <div
            onClick={handleAddon3}
            class={`flex items-center border-2 px-6 py-6 cursor-pointer ${
              addOns?.addOns3?.checked ? "bg-[#f8f9fe] border-blue-400" : ""
            } hover:bg-[#f8f9fe] hover:border-blue-400 rounded-lg my-3`}
          >
            <div className="flex w-full justify-between items-center">
              <div className="flex items-center">
                <div
                  className={`flex justify-center md:w-6 w-8 h-6 ${
                    addOns?.addOns3?.checked ? "bg-blue-600" : "bg-white"
                  }  border-2 border-gray-400 rounded`}
                >
                  {addOns?.addOns3?.checked ? (
                    <Image
                      src="/assets/images/icon-checkmark.svg"
                      alt="icon-checkmark"
                      width={20}
                      height={20}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="md:ml-6 ml-4">
                  <div class="md:text-lg text-base font-semibold text-gray-900 dark:text-gray-300">
                    Customizable Profile
                  </div>
                  <div className="md:text-base text-sm text-gray-600 opacity-50">
                    Custom theme on your profile
                  </div>
                </div>
              </div>

              <div className="text-lg text-blue-600 font-semibold">
                {" "}
                {isChecked ? "+$20/yr" : "+$2/mo"}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between mt-[88px]">
          <button
            onClick={handleGoBack}
            className="text-center text-lg font-semibold hover:text-blue-900"
          >
            Go Back
          </button>
          <button
            onClick={handleStepNext}
            className="text-center font-medium text-lg items-center px-6 py-3 hover:bg-[#174a8b] bg-[#03295a]  text-white rounded-lg"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
