import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react"
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Summary from "./components/Summary";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import About from "./components/About";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";

const App = () => {
    const [theme, setTheme] = useState<string>(
        localStorage.getItem("theme") ?? "forest"
    );

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html")?.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <LanguageProvider>
            <Analytics />
            <div className="h-screen flex flex-col">
                <Navbar theme={theme} setTheme={setTheme} />
                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                    <Hero />
                    <Summary />
                    <div className="divider" id="projects" />
                    <Projects theme={theme} />
                    <div className="divider" id="about" />
                    <About />
                    <div className="divider" id="journey" />
                    <Journey />
                    <div className="divider" id="skills" />
                    <Skills />
                    <div className="divider" id="contacts" />
                    <Contacts />
                    <Footer />
                </div>
            </div>
        </LanguageProvider>
    );
};

export default App;
