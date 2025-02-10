import { useEffect, useState } from "react";

const Hero = () => {
    const text = "Hello World...";
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, 200);
            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <div className="hero bg-base-200 min-h-full">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1 className="text-4xl lg:text-6xl font-bold">
                        {displayText}
                        <span className={`align-text-top ${showCursor ? "inline" : "invisible"}`}>
                            |
                        </span>
                    </h1>
                    <p className="mt-2 mb-8 py-6 lg:text-xl">
                        I'm Juliano, a Front-End Developer.<br />
                        <span className="font-bold text-primary text-xl lg:text-2xl">Welcome to my portfolio!</span>
                    </p>
                    <button className="btn btn-primary text-lg text-white p-6">See Projects</button>
                </div>
            </div>
            <div className="flex justify-center self-end pb-6">
                <span className="animate-bounce text-2xl">
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
