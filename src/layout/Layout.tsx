import React, { useState } from "react";
import Header from "../components/header/header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [touch, setTouch] = useState(false);

  return (
    <div className="bg-secondary 2xl">
      <div className="">
        <Header isTouched={touch} setTouch={(value) => setTouch(value)} />
        <div
          onClick={() => (touch ? setTouch(false) : null)}
          className="relative backdrop-blur-lg bg-primary z-30 text-white mt-28 md:mx-24"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
