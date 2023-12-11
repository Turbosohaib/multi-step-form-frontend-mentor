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
    <div className={`${steps.step1 ? "block" : "hidden"}`}>
      <h1 className="text-4xl font-semibold">Personal info</h1>
      <p className="text-[20px] mt-3 text-[#a3a3ad]">
        Please provide your name, email address, and phone number.
      </p>

      <div className="mt-8">
        <div className="w-[561px]">
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
            }  w-full text-lg font-medium px-5 py-3 rounded-lg`}
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className="mt-5 w-[561px]">
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
            } w-full text-lg font-medium px-5 py-3 rounded-lg`}
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="mt-5">
          <div className="w-[561px] flex justify-between">
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
            } w-full text-lg font-medium px-5 py-3 rounded-lg`}
            placeholder="e.g. +1 234 567 890"
          />
        </div>
        <div className="w-full flex justify-end mt-32">
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
