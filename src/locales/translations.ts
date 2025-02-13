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

        summary_1:
            "Sou um desenvolvedor apaixonado por transformar ideias em códigos funcionais.",
        summary_2_1: "Apesar de atuar como desenvolvedor ",
        summary_2_2: ", meu foco principal está no desenvolvimento ",
        summary_2_3: ".",
        summary_3_1: "Trabalho principalmente com ",
        summary_3_2: " e ",
        summary_3_3: ", mas já atuei em projetos utilizando ",
        summary_4: "Meu objetivo é escrever códigos que sejam ",
        summary_btn: "Vamos conversar!",
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

        summary_1:
            "I'm a developer passionate about turning ideas into working code.",
        summary_2_1: "Although acting as a ",
        summary_2_2: " developer, my main focus is on ",
        summary_2_3: " development.",
        summary_3_1: "I primarily work with ",
        summary_3_2: " and ",
        summary_3_3: ", but I have also worked on projects using ",
        summary_4: "My goal is to write code that is ",
        summary_btn: "Let's chat!",
    },
};

export default translations;
