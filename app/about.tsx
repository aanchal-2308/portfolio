import {
  ExternalLinkIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { socialLinks } from "../utils/constants"; // Import the constants
import React from "react";
import Contact from "@/components/Header";

export default function Home() {
  return (
    <div className="bg=[#dfd3c3] h-full flex">
      <div className="w-[40%] flex flex-row-reverse p-10 mt-20">
        <div className="relative h-48 w-40">
          <Image
            src="/ProfileImg.jpg"
            alt="Profile_Image"
            fill
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className=" w-[40%] pt-40">
        <p className="text-3xl font-bold px-10">Hey,👋 I'm Aanchal !</p>

        <p className="text-md mt-8 px-10">
          I build impactful web applications with React, Next.js, and
          TailwindCSS, focusing on performance and scalability.
        </p>
        <p className="text-md mt-2 px-10">
          {" "}
          I lead teams, mentor developers, and share knowledge through mentoring
          and collaboration.
        </p>

        <p className="mt-2 px-10">
          <a
            href="#"
            target="_blank"
            className="flex items-center underline hover:text-gray-700"
          >
            <span className="mr-3">Resume </span>
            <ExternalLinkIcon />
          </a>
        </p>
      </div>
    </div>
  );
}
