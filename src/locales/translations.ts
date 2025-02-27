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

        journey_title: "Sobre Mim",
        timeline_2020_title: "Ingresso na ETE FMC",
        timeline_2020_desc:
            "Iniciei minha jornada acadêmica na Escola Técnica de Eletrônica Francisco Moreira da Costa (ETE FMC), em Santa Rita do Sapucaí - MG, cursando o ensino médio integrado ao técnico. Neste ano, participei da minha primeira feira de projetos, a ProjETE, onde minha equipe conquistou os prêmios de Melhor Diário de Bordo e Melhor Projeto da Classe.",
        timeline_2021_title: "Segunda participação na ProjETE",
        timeline_2021_desc:
            "No meu segundo ano na ETE, tive a oportunidade de participar novamente da ProjETE. Minha equipe se destacou mais uma vez, recebendo os prêmios de Melhor Projeto de Tecnologia Assistiva e 'Projeto Empreendedor', este último concedido pela FAI - Centro de Ensino Superior em Gestão, Tecnologia e Educação.",
        timeline_2022_title: "Formação como Técnico em Telecomunicações",
        timeline_2022_desc:
            "No início do ano, atuei como desenvolvedor de projetos no Centro de Desenvolvimento da ETE (CEDEN), durante um estágio de verão. Além disso, participei de mais uma edição da ProjETE, na qual minha equipe foi premiada em quatro categorias: Melhor Projeto de IoT pelo Inatel e pela ETE, Melhor Apresentação Virtual e Melhor Apresentação em Inglês. Também tive minha primeira experiência em um Hackathon, conquistando a vitória em uma das categorias.",
        timeline_2023_title: "Menção Honrosa e Início da Graduação",
        timeline_2023_desc:
            "Durante a colação de grau da ETE FMC, fui reconhecido com a Menção Honrosa por ter alcançado a maior pontuação entre todos os formandos do meu ano, independentemente do curso. Paralelamente, iniciei minha graduação em Engenharia de Software e ingressei como estagiário em desenvolvimento de software no Inatel, ampliando minha experiência prática na área.",
        timeline_2024_title: "Primeira participação na FETIN",
        timeline_2024_desc:
            "Participei pela primeira vez da Feira Tecnológica do Inatel (FETIN), aprimorando o projeto desenvolvido no meu segundo ano de ETE. A nova versão contou com integração de Inteligência Artificial utilizando YOLOv8, um aplicativo móvel desenvolvido em React Native e um firmware bem estruturado. Como resultado, fui premiado com o primeiro lugar na categoria 'Viabilidade de Mercado' e também recebi o prêmio 'Soft Skills'.",
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

        journey_title: "My Journey",
        timeline_2020_title: "Admission to ETE FMC",
        timeline_2020_desc:
            "I began my academic journey at the Francisco Moreira da Costa Technical School of Electronics (ETE FMC) in Santa Rita do Sapucaí - MG, attending high school integrated with technical education. This year, I participated in my first project fair, ProjETE, where my team won the awards for Best Logbook and Best Class Project.",
        timeline_2021_title: "Second participation in ProjETE",
        timeline_2021_desc:
            "In my second year at ETE, I had the opportunity to participate in ProjETE again. My team stood out once more, receiving the awards for Best Assistive Technology Project and 'Entrepreneurial Project,' the latter granted by FAI - Higher Education Center in Management, Technology, and Education.",
        timeline_2022_title: "Graduation as a Telecommunications Technician",
        timeline_2022_desc:
            "At the beginning of the year, I worked as a project developer at the ETE Development Center (CEDEN) during a summer internship. Additionally, I participated in another edition of ProjETE, where my team was awarded in four categories: Best IoT Project by Inatel and ETE, Best Virtual Presentation, and Best English Presentation. I also had my first experience in a Hackathon, winning in one of the categories.",
        timeline_2023_title:
            "Honorable Mention and Start of Undergraduate Studies",
        timeline_2023_desc:
            "During the ETE FMC graduation ceremony, I was recognized with an Honorable Mention for achieving the highest score among all graduates of my year, regardless of the course. At the same time, I began my undergraduate studies in Software Engineering and joined Inatel as a software development intern, expanding my practical experience in the field.",
        timeline_2024_title: "First participation in FETIN",
        timeline_2024_desc:
            "I participated for the first time in the Inatel Technology Fair (FETIN), improving the project developed in my second year at ETE. The new version featured AI integration using YOLOv8, a mobile application developed in React Native, and a well-structured firmware. As a result, I was awarded first place in the 'Market Viability' category and also received the 'Soft Skills' award.",
    },
};

export default translations;
