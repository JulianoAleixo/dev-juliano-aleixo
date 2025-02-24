import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Summary from "./components/Summary";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import About from "./components/About";

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
            <div className="h-screen flex flex-col">
                <Navbar theme={theme} setTheme={setTheme} />
                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                    <Hero />
                    <Summary />
                    <div className="divider" id="projects" />
                    <Projects theme={theme} />
                    <div className="divider" id="" />
                    <About />
                    <div className="divider" id="" />
                    {/* <Journey /> */}
                    <div className="divider" />
                    {/* <Skills /> */}
                    <Footer />
                </div>
            </div>
        </LanguageProvider>
    );
};

export default App;
