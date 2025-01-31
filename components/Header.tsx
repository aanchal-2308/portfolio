"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";

export default function Contact() {
  const { toast } = useToast();
  const email = "aanchalgoyal.2308@gmail.com";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!isMenuOpen) return;

      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast({
        title: "Email copied!",
        duration: 500,
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Failed to copy",
        description: "Please try again",
        duration: 2000,
      });
    }
  };

  return (
    <div className="relative">
      {/* Desktop & Tablet Header */}
      <div className="hidden md:flex items-center justify-between px-4 lg:px-16 mt-8">
        <div className="flex items-center gap-2 lg:gap-4">
          <div className="rounded-full border px-2 md:px-3 md:pr-0">
            <span className="text-gray-700 font-medium text-[10px] lg:text-xs">
              {email}
            </span>
            <Button
              variant="secondary"
              className="bg-gray-300 py-4 lg:py-6 mr-0 m-1 text-[10px] lg:text-xs ml-2 lg:ml-4 px-4 lg:px-8 font-medium rounded-full hover:bg-gray-100"
              onClick={handleCopy}
            >
              Copy
            </Button>
          </div>
          <Link
            href="https://drive.google.com/drive/u/1/folders/1quk9PgxSETiufetabxQEp02xmXk0R5bx"
            target="_blank"
            className="border rounded-full"
          >
            <Button
              variant="secondary"
              className="bg-gray-300 py-4 lg:py-6 text-[10px] lg:text-xs font-medium mr-0 m-1 px-4 lg:px-8 rounded-full hover:bg-gray-100"
            >
              CV
            </Button>
          </Link>
        </div>
        <NavLinks />
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 mt-4">
          <Button
            variant="ghost"
            className="p-2"
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <NavLinks showHome={true} />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-14 left-0 w-full bg-white shadow-lg rounded-b-lg p-4 space-y-4 z-50"
          >
            <div className="flex items-center justify-between border rounded-full px-2 py-1">
              <span className="text-gray-700 text-xs">{email}</span>
              <Button
                variant="secondary"
                className="text-[10px] px-4 py-2 rounded-full"
                onClick={handleCopy}
              >
                Copy
              </Button>
            </div>
            <Link href="/Aanchal_Goyal_Resume.pdf" target="_blank">
              <Button
                variant="secondary"
                className="w-full text-[10px] rounded-full"
              >
                CV
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
