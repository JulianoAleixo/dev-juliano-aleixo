import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const MockupCode = () => {
    const { t, language } = useLanguage();

    const words = {
        "pt-BR": [
            "eficientes",
            "simples",
            "rápidos",
            "claros",
            "modulares",
            "otimizados",
            "escaláveis",
            "robustos",
            "intuitivos",
            "manuteníveis",
        ],
        en: [
            "efficient",
            "simple",
            "fast",
            "clear",
            "modular",
            "optimized",
            "scalable",
            "robust",
            "intuitive",
            "maintainable",
        ],
    };

    const [text, setText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        setText("");
        setCharIndex(0);
        setWordIndex(0);
        setIsDeleting(false);
    }, []);    

    useEffect(() => {
        const currentWord = words[language]?.[wordIndex] || "";

        if (!isDeleting && charIndex < currentWord.length) {
            setTimeout(() => {
                setText(currentWord.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            }, 100);
        } else if (isDeleting && charIndex > 0) {
            setTimeout(() => {
                setText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            }, 50);
        } else if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setWordIndex((prevIndex) => (prevIndex + 1) % words[language].length);
        }
    }, [charIndex, isDeleting, wordIndex, language]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <div className="mockup-code max-w-full flex flex-col flex-grow text-base lg:text-lg bg-zinc-800 h-full w-full flex-1">
            <pre className="flex my-3">
                <span className="pr-4 text-gray-400">1</span>
                <code className="whitespace-pre-wrap break-words">
                    {t("summary_1")}
                </code>
            </pre>

            <pre className="flex my-3">
                <span className="pr-4 text-gray-400">3</span>
                <code className="whitespace-pre-wrap break-words">
                    {t("summary_2_1")}
                    <span className="text-red-400 font-semibold">full stack</span>
                    {t("summary_2_2")}
                    <span className="text-orange-400 font-semibold">front-end</span>
                    {t("summary_2_3")}
                </code>
            </pre>

            <pre className="flex my-3">
                <span className="pr-4 text-gray-400">3</span>
                <code className="whitespace-pre-wrap break-words">
                    {t("summary_3_1")}
                    <span className="text-blue-600 font-semibold">TypeScript</span>,{" "}
                    <span className="text-sky-400 font-semibold">React</span>
                    {t("summary_3_2")}
                    <span className="text-green-400 font-semibold">Node.js</span>
                    {t("summary_3_3")}
                    <span className="text-yellow-400 font-semibold">Python</span>
                    {t("summary_3_2")}
                    <span className="text-emerald-600 font-semibold">Vue.js</span>.
                </code>
            </pre>

            <pre className="flex my-3">
                <span className="pr-4 text-gray-400">4</span>
                <code className="whitespace-pre-wrap break-words">
                    {t("summary_4")}
                    <span className="text-primary font-semibold">{text}</span>
                    <span className={showCursor ? "inline" : "invisible"}>|</span>
                </code>
            </pre>
        </div>
    );
};

export default MockupCode;
