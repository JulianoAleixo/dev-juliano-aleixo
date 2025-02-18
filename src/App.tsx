import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Summary from "./components/Summary";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
    return (
        <LanguageProvider>
            <div className="h-screen flex flex-col">
                <Navbar />
                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                    <Hero />
                    <Summary />
                    <div className="divider" id="projects" />
                    <Projects />
                    <div className="divider" id="" />
                    {/* <About />*/}
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
