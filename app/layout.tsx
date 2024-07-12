"use client";
import { useState, useEffect, ReactNode } from "react";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lenis from "lenis";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${poppins.className} bg-yellow-50`}>
        <div className="w-full ">
          <Navbar />
          <div className="w-full">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
