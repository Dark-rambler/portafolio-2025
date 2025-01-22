import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

interface LayoutProps {
    children: React.ReactNode;
}   

export default function Layout({ children } : LayoutProps) {
    return <div>
        <Header/>
        {children}
        <Footer/>
    </div>;
}