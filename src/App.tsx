import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
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
                    <div className="divider" id="" />
                    {/* <Projects /> */}
                    <div className="divider" id="" />
                    {/* <About />*/}
                    <div className="divider" id="" />
                    {/* <Journey /> */}
                    <div className="divider" />
                    {/* <Skills /> */}
                    <div className="divider" />
                    {/* <Footer /> */}
                </div>
            </div>
        </LanguageProvider>
    );
};

export default App;
