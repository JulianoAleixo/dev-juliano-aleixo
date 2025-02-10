export type Language = "pt-BR" | "en";

const translations: Record<Language, Record<string, string>> = {
    "pt-BR": {
        projects_btn: "Meus Projetos",
        about_btn: "Sobre Mim",
        journey_btn: "Minha Jornada",
        skills_btn: "Minhas Habilidades",

        hero_text: "Olá Mundo...",
        hero_intro: "Sou Juliano, um Desenvolvedor Front-End.",
        hero_welcome: "Bem-vindo ao meu portfólio!",
        hero_btn: "Ver Projetos",
    },
    en: {
        projects_btn: "My Projects",
        about_btn: "About Me",
        journey_btn: "My Journey",
        skills_btn: "My Skills",

        hero_text: "Hello World...",
        hero_intro: "I'm Juliano, a Front-End Developer.",
        hero_welcome: "Welcome to my portfolio!",
        hero_btn: "See Projects",
    },
};

export default translations;
