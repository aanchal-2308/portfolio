"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon, ChevronDown, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <div className="relative">
        {/* Gray circular background */}
        <div className="absolute -inset-1 bg-gray-200 rounded-full" />

        {/* Profile image container */}
        <div className="relative h-40 w-40">
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
          <div className="absolute -right-[110px] bottom-10 bg-gray-300 px-3 py-2 rounded-full shadow-sm flex items-center gap-2 animate-float rotate-[30deg]">
            <span className="text-gray-800 text-xs font-medium">
              Aanchal goyal
            </span>
            <span className="text-lg">👋</span>
          </div>
        </div>
      </div>
      <div className="text-[50px] w-[50%] leading-[1.3] text-center mt-3 font-medium">
        <p className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-500 bg-clip-text text-transparent">
          <p>Building scalable</p>
          <p>systems and impactful</p>
          <p>digital experiences.</p>
        </p>
      </div>
      <div className="mt-10 flex gap-2">
        <Button className="rounded-full">
          <a href="/skills" className="flex gap-2 items-center">
            Skills
            <ArrowUpRightIcon className="w-4 h-4" />
          </a>
        </Button>
        <Button className="rounded-full">
          <a href="/projects" className="flex gap-2 items-center">
            Projects
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
  );
}
