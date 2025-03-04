import { createContext, useContext, useEffect, useState } from "react";
import translations, { Language } from "../locales/translations";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const skills = [
    "JavaScript", "TypeScript", "Python", "Java", "C++",
    "HTML", "CSS", "Vue.js", "React", "TailwindCSS",
    "React Native", "NativeWind", "Expo",
    "Node.js", "Express", "Django", "Flask", "REST API",
    "MongoDB", "MySQL", "SQLite", "Firebase",
    "Pandas", "Selenium",
    "YOLOv8", "TensorFlow", "Keras",
    "Arduino", "Raspberry Pi", "MQTT", "HTTP",
    "Git", "GitHub", "Figma", "Notion", "Vite",
    "Vercel", "Netlify", "CI/CD"
];

const metaTags = {
    en: {
        title: "Dev Juliano Aleixo - Personal Portfolio",
        description: "Portfolio of Juliano Aleixo, front-end developer. See my projects and skills in React, TypeScript, Vue.js and more.",
        keywords: `Juliano Aleixo, Front-End Developer, Portfolio, ${skills.join(", ")}`,
        image: "https://www.julianoaleixo.dev/img/dev-juliano-aleixo.png",
        url: "https://yourwebsite.com"
    },
    "pt-BR": {
        title: "Dev Juliano Aleixo - Portfólio Front-End",
        description: "Portfólio de Juliano Aleixo, desenvolvedor front-end. Veja meus projetos e habilidades em React, TypeScript, Vue.js e mais.",
        keywords: `Juliano Aleixo, Desenvolvedor Front-End, Portfólio, ${skills.join(", ")}`,
        image: "https://www.julianoaleixo.dev/img/dev-juliano-aleixo.png",
        url: "https://yourwebsite.com"
    }
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>(
        (localStorage.getItem("language") as Language) ?? "en"
    );

    useEffect(() => {
        localStorage.setItem("language", language);

        document.querySelector('meta[name="description"]')?.setAttribute("content", metaTags[language].description);
        document.querySelector('meta[name="keywords"]')?.setAttribute("content", metaTags[language].keywords);

        document.querySelector('meta[property="og:title"]')?.setAttribute("content", metaTags[language].title);
        document.querySelector('meta[property="og:description"]')?.setAttribute("content", metaTags[language].description);
        document.querySelector('meta[property="og:image"]')?.setAttribute("content", metaTags[language].image);
        document.querySelector('meta[property="og:url"]')?.setAttribute("content", metaTags[language].url);
        document.querySelector('meta[property="og:type"]')?.setAttribute("content", "website");
    }, [language]);

    const t = (key: string) => translations[language][key] || key;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used inside a LanguageProvider");
    }
    return context;
};
