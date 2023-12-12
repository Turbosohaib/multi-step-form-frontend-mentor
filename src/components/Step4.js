export default function Step4({ steps, setSteps, plan, addOns, isChecked }) {
  const handleGoBack = () => {
    setSteps({
      step1: false,
      step2: false,
      step3: true,
      step4: false,
    });
  };

  const handleChangePlan = () => {
    setSteps({
      step1: false,
      step2: true,
      step3: false,
      step4: false,
    });
  };

  const handleLastStep = () => {
    setSteps({
      step1: false,
      step2: false,
      step3: false,
      step4: false,
      step5: true,
    });
  };

  console.log("Plan: ", plan);
  console.log("addOns: ", addOns);

  // Function to extract numerical values from cost strings
  const extractCost = (costString) => {
    const numericalValue = parseFloat(costString?.replace(/[^0-9.]/g, ""));
    return isNaN(numericalValue) ? 0 : numericalValue;
  };

  // Calculate the total sum of the cost
  const totalCost = Object.values(addOns).reduce((sum, addOn) => {
    return sum + extractCost(addOn.addOnCost);
  }, extractCost(plan?.cost));

  console.log("Total cost: " + totalCost);

  return (
    <div className={`${steps.step4 ? "block" : "hidden"}`}>
      <h1 className="text-4xl font-semibold">Finishing up</h1>
      <p className="text-[20px] mt-3 text-[#a3a3ad]">
        Double-check everything looks OK before confirming.
      </p>

      <div className="mt-8">
        <div className="h-[300px]">
          <div className=" bg-[#f8f9fe] rounded-xl px-7">
            <div className="flex items-center justify-between py-8">
              <div>
                {" "}
                <div className="text-xl text-[#213453] font-semibold">
                  {plan?.plan} ({isChecked ? "Yearly" : "Monthly"})
                </div>
                <div
                  onClick={handleChangePlan}
                  className="text-lg text-gray-400 underline hover:text-blue-600 cursor-pointer"
                >
                  Change
                </div>
              </div>
              <div className="text-xl text-[#213453] font-semibold">
                {plan?.cost}
              </div>
            </div>
            {addOns ? (
              <div className="border-t-2 pt-5 pb-3">
                {Object.entries(addOns).map(([key, value]) => (
                  <div
                    className="flex justify-between items-center pb-4 "
                    key={key}
                  >
                    <div className="text-lg font-medium text-gray-400">
                      {value.addOn}
                    </div>
                    <div className="text-lg font-semibold text-[#213453]">
                      {value.addOnCost}
                    </div>
                    {/* Add additional rendering for other properties if needed */}
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-between items-center py-4 px-7">
            <div className="text-lg font-medium text-gray-400">
              Total (Per {isChecked ? "Year" : "Month"})
            </div>
            <div className="text-2xl font-semibold text-blue-600">
              +{totalCost}/{isChecked ? "yr" : "mo"}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between mt-[123px]">
          <button
            onClick={handleGoBack}
            className="text-center text-lg font-semibold hover:text-blue-900"
          >
            Go Back
          </button>
          <button
            onClick={handleLastStep}
            className="text-center font-medium text-xl items-center px-7 py-3 hover:bg-[#174a8b] bg-blue-600  text-white rounded-lg"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
