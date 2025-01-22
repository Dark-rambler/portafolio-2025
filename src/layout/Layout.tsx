import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-secondary 2xl:px-8">
      <div className="shadow-lg  rounded-lg "> 
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
