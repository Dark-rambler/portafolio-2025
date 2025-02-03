import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-secondary 2xl">
      <div className="">
        <Header />
        <div className="relative backdrop-blur-lg bg-primary z-30 text-white mt-28 md:mx-24">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
