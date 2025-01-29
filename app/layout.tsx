import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Contact from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400"] });

export const metadata: Metadata = {
  title: {
    default: "Aanchal Goyal | Portfolio",
    template: "%s | Aanchal Goyal",
  },
  description:
    "Full Stack Developer specializing in building scalable systems and impactful digital experiences",
  keywords: [
    "Full Stack Developer",
    "Frontend Engineer",
    "Web Development",
    "React",
    "Next.js",
    "Node.js",
  ],
  authors: [{ name: "Aanchal Goyal" }],
  creator: "Aanchal Goyal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vercel.com/aanchal-2308s-projects/portfolio/deployments",
    title: "Aanchal Goyal | Portfolio",
    description:
      "Full Stack Developer specializing in building scalable systems and impactful digital experiences",
    siteName: "Aanchal Goyal Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Add your OG image path here
        width: 1200,
        height: 630,
        alt: "Aanchal Goyal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aanchal Goyal | Portfolio",
    description:
      "Full Stack Developer specializing in building scalable systems and impactful digital experiences",
    images: ["/og-image.jpg"], // Add your Twitter card image path here
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <body
        className={`${inter.variable} ${roboto.className}  bg-noise-pattern animate-subtle-move`}
      >
        <Contact />
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
