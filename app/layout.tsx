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
  title: "Aanchal Goyal",
  description: "Portfolio of Aanchal Goyal",
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
