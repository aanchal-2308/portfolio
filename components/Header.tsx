"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { socialLinks } from "@/utils/constants";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Contact() {
  const pathname = usePathname();
  const { toast } = useToast();
  const email = "aanchalgoyal.2308@gmail.com";

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
    <div className="flex items-center justify-between px-16 mt-8">
      <div className="flex items-center gap-4">
        <div className="rounded-full border px-3 pr-0">
          <span className="text-gray-700 font-medium text-xs ">{email}</span>

          <Button
            variant="secondary"
            className="bg-gray-300 py-6 mr-0 m-1 text-xs ml-4 px-8 font-medium rounded-full hover:bg-gray-100"
            onClick={handleCopy}
          >
            Copy
          </Button>
        </div>
        <div className="border rounded-full">
          <Button
            variant="secondary"
            className="bg-gray-300 py-6 text-xs font-medium mr-0 m-1 px-8 rounded-full hover:bg-gray-100"
          >
            CV
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2 text-gray-700">
        {pathname !== "/" && (
          <>
            <Link href="/">
              <span className="hover:text-gray-900 text-sm transition-colors hover:underline">
                Home
              </span>
            </Link>
            <span className="ml-2 hover:no-underline">/</span>
          </>
        )}
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hover:text-gray-900 text-sm transition-colors hover:underline">
              {link.name}
            </span>
            {index !== socialLinks.length - 1 && (
              <span className="ml-2 hover:no-underline">/</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
