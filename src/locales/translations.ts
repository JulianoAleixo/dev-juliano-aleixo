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

        about_title: "Sobre mim",
        about_1:
            "Sou apaixonado por computadores desde criança. No ensino médio, descobri minha verdadeira vocação no desenvolvimento de software.",
        about_2:
            "Durante meu curso técnico em telecomunicações, ganhei todas as feiras de projetos atuando como desenvolvedor de firmware e participei de um hackathon, vencendo em uma categoria. Também recebi uma honraria de mérito pelas notas mais altas.",
        about_3: `No meu curso de Engenharia de Software, minha equipe ganhou uma feira de projetos em "viabilidade de mercado", onde desenvolvi o firmware, a IA e o aplicativo móvel. Além disso, estagiei em desenvolvimento e trabalhei por dois anos como desenvolvedor full-stack.`,
        about_4:
            "No meu tempo livre, gosto de jogar, ler bons livros e explorar o universo geek. Sou um grande fã de Star Wars, e Batman é meu herói favorito.",
        about_download_btn: "Baixar CV",
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

        about_title: "About me",
        about_1:
            "I've been passionate about computers since childhood. In high school, I discovered my true calling in software development.",
        about_2:
            "During my technical course in telecommunications, I won all project fairs as the firmware developer and participated in a hackathon, winning in one category. I also received an honor of merit for top grades.",
        about_3: `In my Software Engineering degree, my team won a project fair in "market viability," where I developed the firmware, AI, and mobile app. In addition, I interned in development and worked for two years as a full-stack developer.`,
        about_4:
            "In my free time, I enjoy gaming, reading good books, and exploring the geek universe. I'm a huge Star Wars fan, and Batman is my favorite hero.",
        about_download_btn: "Download CV",
    },
};

export default translations;
