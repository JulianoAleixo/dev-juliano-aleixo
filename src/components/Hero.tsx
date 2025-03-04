import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
    const { t } = useLanguage();

    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        setDisplayText("");
        setIndex(0);
    }, [t("hero_text")]);

    useEffect(() => {
        if (index < t("hero_text").length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + t("hero_text")[index]);
                setIndex((prev) => prev + 1);
            }, 200);
            return () => clearTimeout(timeout);
        }
    }, [index, t]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    const handleScroll = (
        event: React.MouseEvent<HTMLSpanElement>,
        sectionId: string
    ) => {
        event.preventDefault();
        const sectionElement = document.querySelector(`#${sectionId}`);
        if (sectionElement) {
            sectionElement.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="hero bg-base-200 min-h-full -mt-4 md:-mt-0" id="hero">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1 className="text-4xl lg:text-6xl font-bold">
                        {displayText}
                        <span
                            className={`align-text-top ${
                                showCursor ? "inline" : "invisible"
                            }`}
                        >
                            |
                        </span>
                    </h1>
                    <p className="mt-2 mb-8 py-6 lg:text-xl">
                        {t("hero_intro")}
                        <br />
                        <span className="font-bold text-primary text-xl lg:text-2xl">
                            {t("hero_welcome")}
                        </span>
                    </p>
                    <button
                        onClick={(e) => handleScroll(e, "projects")}
                        className="btn btn-primary text-lg text-white p-6"
                    >
                        {t("hero_btn")}
                    </button>
                </div>
            </div>
            <div className="flex justify-center self-end pb-6">
                <span
                    className="animate-bounce text-2xl cursor-pointer"
                    onClick={(e) => handleScroll(e, "summary")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        className="fill-current"
                    >
                        <path d="M12 16.5l-6-6h12l-6 6z"></path>
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default Hero;
