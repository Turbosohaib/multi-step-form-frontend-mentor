import React, { useState, useEffect } from "react";

export default function Step1({ steps, setSteps }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = () => {
    let errors = {};

    if (!name) {
      errors.name = "required";
    }

    if (!email) {
      errors.email = "required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "invalid";
    }

    if (!number) {
      errors.number = "required";
    }
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);

    if (isFormValid) {
      setSteps({
        step1: false,
        step2: true,
        step3: false,
        step4: false,
      });
      console.log("Form submitted successfully!");
    } else {
      console.log("Errors: ", errors);
      console.log("Form has errors. Please correct them.");
    }
  };
  return (
    <div
      className={`md:static absolute top-[140px] ${
        steps.step1 ? "block" : "hidden"
      } md:w-full w-[350px] bg-white md:p-0 p-5 md:rounded-none rounded-xl`}
    >
      <h1 className="md:text-4xl text-2xl font-semibold">Personal info</h1>
      <p className="md:text-[20px] mt-3 text-[#a3a3ad]">
        Please provide your name, email address, and phone number.
      </p>

      <div className="mt-8">
        <div className="w-full">
          <div className="w-full flex justify-between">
            <label htmlFor="name" className="font-medium">
              Name
            </label>
            {errors.name ? (
              <div className="text-red-600 font-semibold">
                This field is required
              </div>
            ) : (
              ""
            )}
          </div>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`border-[2px] mt-1 ${
              errors.name ? "border-red-600" : "border-[#eaeaed]"
            }  w-full md:text-lg font-medium px-5 md:py-3 py-2 rounded-lg`}
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className="mt-5 w-full">
          <div className="w-full flex justify-between">
            <label htmlFor="email" className="font-medium">
              Email Address
            </label>
            {errors.email === "required" ? (
              <div className="text-red-600 font-semibold">
                This field is required
              </div>
            ) : errors.email === "invalid" ? (
              <div className="text-red-600 font-semibold">Email is invalid</div>
            ) : (
              ""
            )}
          </div>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border-[2px] mt-1 ${
              errors.email ? "border-red-600" : "border-[#eaeaed]"
            } w-full md:text-lg font-medium px-5 md:py-3 py-2 rounded-lg`}
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="mt-5">
          <div className="w-full flex justify-between">
            <label htmlFor="number" className="font-medium">
              Phone Number
            </label>
            {errors.number ? (
              <div className="text-red-600 font-semibold">
                This field is required
              </div>
            ) : (
              ""
            )}
          </div>
          <input
            type="text"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className={`border-[2px] mt-1 ${
              errors.number ? "border-red-600" : "border-[#eaeaed]"
            } w-full md:text-lg font-medium px-5 md:py-3 py-2 rounded-lg`}
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </div>
      <div className="w-full flex justify-end md:mt-[133px] mt-[30px]">
        <button
          onClick={handleSubmit}
          className="text-center font-medium text-lg items-center px-6 py-3 hover:bg-[#174a8b] bg-[#03295a]  text-white rounded-lg"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
