import Image from "next/image";

export default function Step5({ steps }) {
  return (
    <div
      className={`${
        steps.step5 ? "block" : "hidden"
      } w-full h-[590px] py-[20%]`}
    >
      <div className="text-center w-[600px] mx-auto">
        <div className="w-full flex items-center justify-center">
          <Image
            className="mb-5"
            src="/assets/images/icon-thank-you.svg"
            width={80}
            height={80}
            alt="thank-you-icon"
          />
        </div>
        <h1 className="text-4xl font-semibold">Thank you!</h1>
        <p className="text-[20px] mt-3 text-[#a3a3ad]">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.{" "}
        </p>
      </div>
    </div>
  );
}
