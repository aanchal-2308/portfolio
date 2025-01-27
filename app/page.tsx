"use client";
import { SEO } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon, ChevronDown, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SEO />
      <div className="flex flex-col items-center justify-center mt-12 sm:mt-16 md:mt-24 px-4">
        <div className="relative">
          {/* Gray circular background */}
          <div className="absolute -inset-1 bg-gray-200 rounded-full" />

          {/* Profile image container */}
          <div className="relative h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40">
            <Image
              src="/ProfileImg.jpg"
              alt="Profile Image"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>

          {/* Name tag bubble */}
          <div className="-rotate-[10deg]">
            <div className="absolute -right-[90px] sm:-right-[100px] md:-right-[110px] bottom-8 sm:bottom-10 bg-gray-300 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full shadow-sm flex items-center gap-1 sm:gap-2 animate-float rotate-[30deg]">
              <span className="text-gray-800 text-[10px] sm:text-xs font-medium">
                Aanchal goyal
              </span>
              <span className="text-base sm:text-lg">👋</span>
            </div>
          </div>
        </div>

        {/* Heading Text */}
        <div className="text-[32px] sm:text-[40px] lg:text-[50px] w-full sm:w-[70%] lg:w-[50%] leading-[1.2] sm:leading-[1.3] text-center mt-3 font-medium px-4">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-500 bg-clip-text text-transparent">
            <p>Building scalable</p>
            <p>systems and impactful</p>
            <p>digital experiences.</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex gap-2 flex-col sm:flex-row w-full sm:w-auto px-4 sm:px-0">
          <Button className="rounded-full w-full sm:w-auto">
            <a
              href="/skills"
              className="flex gap-2 items-center justify-center"
            >
              Skills
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </Button>
          <Button className="rounded-full w-full sm:w-auto">
            <a
              href="/projects"
              className="flex gap-2 items-center justify-center"
            >
              Projects
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </Button>
          <Button className="rounded-full w-full sm:w-auto">
            <a
              href="/blogs-talks"
              className="flex gap-2 items-center justify-center"
            >
              Blogs & talks
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </Button>
          {/* <button
          onClick={() => scrollDown()}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
        >
          <ChevronDown className="h-6 w-6 text-gray-600" />
        </button> */}
        </div>
      </div>
    </div>
  );
}
