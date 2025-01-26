import { skills } from "@/utils/constants";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Skills() {
  return (
    <div className="w-[80%] mx-auto text-white flex flex-col justify-center items-center text-center align-middle mt-4 ">
      <div className="flex items-center justify-between w-full mb-8">
        <h1 className="text-2xl text-gray-800 text-center font-mono flex-grow">
          Skills
        </h1>
        <div className="w-6"></div>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap justify-center">
          {skills?.map((lang, index) => (
            <div
              key={index}
              className="rounded-lg text-black p-4 m-2 text-center transition-transform transform hover:scale-110"
            >
              <div>
                <i
                  className={` ${lang?.icon} text-7xl text-gray-800 transition-colors`}
                ></i>
              </div>
              {lang?.name}
            </div>
          ))}
        </div>
      </div>
      {/* <div>
        <h2 className="text-2xl mb-4">Libraries & Frameworks</h2>
        <div className="flex flex-wrap justify-center">
          {skills?.framework.map((lib, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 m-2 text-center transition-transform transform hover:scale-105"
            >
              {lib?.name}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Skills;
