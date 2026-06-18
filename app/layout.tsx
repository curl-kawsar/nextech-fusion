import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NextechFusion — Digital Agency",
  description:
    "Full-service digital agency. Web development, software engineering, custom builds, digital marketing, graphics design, and social media marketing.",
  openGraph: {
    title: "NextechFusion — Digital Agency",
    description:
      "We build, market, and ship the internet's most ambitious products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-canvas text-body font-sans">
        {children}
      </body>
    </html>
  );
}
