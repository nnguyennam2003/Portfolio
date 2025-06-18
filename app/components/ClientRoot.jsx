'use client';
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Services from "./Services";
import Work from "./Work";
import { useEffect, useState } from "react";

export default function ClientRoot() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.theme === 'dark') {
            setIsDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.setAttribute('data-theme', '');
            localStorage.theme = '';
        }
    }, [isDarkMode]);

    return (
        <>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <Header isDarkMode={isDarkMode} />
            <About isDarkMode={isDarkMode} />
            <Services isDarkMode={isDarkMode} />
            <Work isDarkMode={isDarkMode} />
            <Contact isDarkMode={isDarkMode} />
            <Footer isDarkMode={isDarkMode} />
        </>
    );
}