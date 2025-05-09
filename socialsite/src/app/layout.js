import { Geist, Geist_Mono } from "next/font/google";
import Navigation from './components/Navigation'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Social Media Site",
  description: "A simple social media site built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-800 min-h-screen pt-20`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}

