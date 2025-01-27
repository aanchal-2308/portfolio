import Link from "next/link";
import { usePathname } from "next/navigation";
import { socialLinks } from "@/utils/constants";

interface NavLinksProps {
  className?: string;
  showHome?: boolean;
}

export default function NavLinks({
  className = "",
  showHome = true,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <div className={`flex items-center gap-2 text-gray-700 ${className}`}>
      {showHome && pathname !== "/" && (
        <>
          <Link href="/">
            <span className="hover:text-gray-900 text-xs lg:text-sm transition-colors hover:underline">
              Home
            </span>
          </Link>
          <span className="hover:no-underline">/</span>
        </>
      )}
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hover:text-gray-900 text-xs lg:text-sm transition-colors hover:underline">
            {link.name}
          </span>
          {index !== socialLinks.length - 1 && (
            <span className="ml-2 hover:no-underline">/</span>
          )}
        </a>
      ))}
    </div>
  );
}
