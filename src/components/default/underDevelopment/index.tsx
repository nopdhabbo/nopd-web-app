import React from "react";
import Image from "next/image";

import jordeboiImage from "@/../public/assets/nopd/jordeboi.png";
import nopdImage from "@/../public/assets/nopd/nopd.png";

const UnderDevelopment = () => {
  return (
    <>
      <div className="flex gap-3">
        <div className="flex gap-2 justify-center">
          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src={nopdImage}
              alt="nopd Image"
              width={60}
              height={60}
              priority
            />
          </div>

          {/* NOPD Content */}
          <div className="flex flex-col z-10 justify-center">
            <h1 className="text-2xl text-yellow-700 uppercase font-extrabold">
              nopd
            </h1>
            <h1>NOPD website is under development</h1>
            <h1 className="self-end font-bold">- Jordeboi</h1>
          </div>
        </div>
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src={jordeboiImage}
            alt="jordeboi habbo avatar"
            width={65}
            height={65}
            priority
          />
        </div>
      </div>
    </>
  );
};

export default UnderDevelopment;
