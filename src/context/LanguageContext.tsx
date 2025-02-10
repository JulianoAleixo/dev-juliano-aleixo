import { createContext, useContext, useEffect, useState } from "react";
import translations, { Language } from "../locales/translations";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>(
        (localStorage.getItem("language") as Language) ?? "en"
    );

    useEffect(() => {
        localStorage.setItem("language", language);
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
