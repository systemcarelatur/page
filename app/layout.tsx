import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import BitsBackground from "@/components/BitsBackground";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "System Care Latur - Expert Laptop & Computer Solutions",
  description: "Your trusted destination for computer repairs and IT services in Latur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} dark antialiased`}
    >
      <body>
        <BitsBackground />
        {children}
      </body>
    </html>
  );
}
