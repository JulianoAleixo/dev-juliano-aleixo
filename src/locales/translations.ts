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

        projects_title: "Meus Projetos",
        project_1:
            "Um site criativo feito para testar os temas da extensão do TailwindCSS, o DaisyUI. Feito em Typescript usando React e Vite.",
        project_2:
            "Um projeto criado para estudar o Node.js, usando pacotes como Express e MongoDB, com uma interface interativa para gerenciamento de agendas.",
        project_3:
            "Um site feito para o consultório médico da Dra. Maria Luiza Rennó. Criado usando Typescript e React, com um desenvolvimento 'mobile-first' para ser responsivo como foco principal.",
        project_4:
            "Meu portifólio pessoal. Feito para falar um pouco sobre meus projetos e minha jornada profissional. Tem um grande foco em UI e UX, responsividade e o uso de tecnologias modernas do mercado.",
        project_link_button: "Acessar",

        about_title: "Sobre mim",
        about_1:
            "Sou apaixonado por computadores desde criança. No ensino médio, descobri minha verdadeira vocação no desenvolvimento de software.",
        about_2:
            "Durante meu curso técnico em telecomunicações, ganhei todas as feiras de projetos atuando como desenvolvedor de firmware e participei de um hackathon, vencendo em uma categoria. Também recebi uma honraria de mérito pelas notas mais altas.",
        about_3: `No meu curso de Engenharia de Software, minha equipe ganhou uma feira de projetos em "viabilidade de mercado", onde desenvolvi o firmware, a IA e o aplicativo móvel. Além disso, estagiei em desenvolvimento e trabalhei por dois anos como desenvolvedor full-stack.`,
        about_4:
            "No meu tempo livre, gosto de jogar, ler bons livros e explorar o universo geek. Sou um grande fã de Star Wars, e Batman é meu herói favorito.",
        about_download_btn: "Baixar CV",

        journey_title: "Minha Jornada",
        timeline_2020_title: "Ingresso na ETE FMC",
        timeline_2020_desc:
            "Iniciei minha jornada acadêmica na Escola Técnica de Eletrônica Francisco Moreira da Costa (ETE FMC), em Santa Rita do Sapucaí - MG, cursando o ensino médio integrado ao técnico. Neste ano, participei da minha primeira feira de projetos, a ProjETE, onde minha equipe conquistou os prêmios de Melhor Diário de Bordo e Melhor Projeto da Classe.",
        timeline_2021_title: "Segunda participação na ProjETE",
        timeline_2021_desc:
            "No meu segundo ano na ETE, tive a oportunidade de participar novamente da ProjETE. Minha equipe se destacou mais uma vez, recebendo os prêmios de Melhor Projeto de Tecnologia Assistiva e 'Projeto Empreendedor', este último concedido pela FAI - Centro de Ensino Superior em Gestão, Tecnologia e Educação.",
        timeline_2022_title: "Formação como Técnico em Telecomunicações",
        timeline_2022_desc:
            "No início do ano, atuei como desenvolvedor de projetos no Centro de Desenvolvimento da ETE (CEDEN) durante um estágio de verão. Além disso, participei de mais uma edição da ProjETE, na qual minha equipe foi premiada em quatro categorias: Melhor Projeto de IoT pelo Inatel e pela ETE, Melhor Apresentação Virtual e Melhor Apresentação em Inglês. No ano seguinte, na colação de grau, fui reconhecido com a Menção Honrosa por ter alcançado a maior pontuação entre todos os formandos do meu ano, independentemente do curso.",
        timeline_2023_title: "Estágio em Desenvolvimento no CIDC",
        timeline_2023_desc:
            "Iniciei minha graduação em Engenharia de Software no Instituto Nacional de Telecomunicações (Inatel). Além disso, ingressei como estagiário de desenvolvimento no CIDC, no Inatel, em parceria com a empresa Huawei. Durante o estágio, atuei como desenvolvedor trainee full stack, trabalhando em projetos que vão desde automações até sistemas web de gestão de funcionários e dashboards interativas. Foi nesse período que tive a certeza de que minha vocação profissional está na área de programação.",
        timeline_2024_title: "Primeira participação na FETIN",
        timeline_2024_desc:
            "Participei pela primeira vez da Feira Tecnológica do Inatel (FETIN), aprimorando o projeto desenvolvido no meu segundo ano de ETE. A nova versão contou com integração de Inteligência Artificial utilizando YOLOv8, um aplicativo móvel desenvolvido em React Native e um firmware bem estruturado. Como resultado, fui premiado com o primeiro lugar na categoria 'Viabilidade de Mercado' e também recebi o prêmio 'Soft Skills'.",
        timeline_2025_title: "Trabalhando para a Europa",
        timeline_2025_desc:
            "No início deste ano, fui chamado a atuar como desenvolvedor full-stack na Redera Technologies, uma empresa que atende clientes na Europa, como o AgriMP em Portugal. Atuei no desenvolvimento de soluções que me permitiram aprimorar o Front-end com React, Vite e TypeScript, além de aprofundar meus conhecimentos em Back-end com APIs REST desenvolvidas em Flask. Também participei da minha primeira Game Jam promovida pelo Inatel, enfrentando o desafio de criar um jogo em apenas 36 horas com C# e Unity.",

        skills_title: "Minhas Habilidades",
        skills_languages: "Linguagens",
        skills_frontend: "Front-End",
        skills_mobile: "Mobile",
        skills_backend: "Back-End",
        skills_databases: "Banco de Dados",
        skills_data_automation: "Data & Automação",
        skills_ai: "Inteligência Artificial",
        skills_hardware_iot: "Hardware & IoT",
        skills_tools: "Ferramentas",
        skills_devops: "DevOps & Hospedagem",
        skills_concepts: "Conceitos",
        skills_soft_skills: "Soft Skills",
        concept_clean_code: "Código Limpo",
        concept_oop: "Orientação a Objetos",
        concept_agile: "Metodologias Ágeis",
        concept_ui_ux: "UI/UX",
        soft_teamwork: "Trabalho em equipe",
        soft_creativity: "Criatividade",
        soft_problem_solving: "Resolução de problemas",
        soft_communication: "Comunicação",
        skills_call_to_action: "Quer saber mais? Clique nos cards!",

        contacts_title: "Contato",
        contacts_text: "Estou online em:",
        contacts_visit_profile: "Visitar Perfil",
        contacts_send_email: "Mandar E-mail",
        contacts_send_message: "Mandar Mensagem",

        footer_text: "Copyright © 2025 - Todos os direitos reservados",
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

        projects_title: "My Projects",
        project_1:
            "A creative website made to test the themes of the TailwindCSS extension, DaisyUI. Built with TypeScript using React and Vite.",
        project_2:
            "A project created to study Node.js, using packages like Express and MongoDB, with an interactive interface for schedule management.",
        project_3:
            "A website developed for Dr. Maria Luiza Rennó's medical office. Created using TypeScript and React, following a 'mobile-first' approach for responsiveness as the main focus.",
        project_4:
            "My personal portfolio. Created to showcase my projects and professional journey. It has a strong focus on UI and UX, responsiveness, and the use of modern market technologies.",
        project_link_button: "Access",

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
            "At the beginning of the year, I worked as a project developer at the ETE Development Center (CEDEN) during a summer internship. In addition, I participated in another edition of ProjETE, in which my team was awarded in four categories: Best IoT Project by Inatel and ETE, Best Virtual Presentation and Best Presentation in English. The following year, at the graduation ceremony, I was recognized with an Honorable Mention for having achieved the highest score among all the graduates in my year, regardless of the course.",
        timeline_2023_title:
            "Internship in Development at CIDC",
        timeline_2023_desc:
            "I started my undergraduate degree in Software Engineering at the National Institute of Telecommunications (Inatel). I also joined CIDC as a development intern at Inatel, in partnership with Huawei. During my internship, I worked as a full-stack developer trainee, working on projects ranging from automation to web-based employee management systems and interactive dashboards. It was during this period that I became certain that my professional calling was in the area of programming.",
        timeline_2024_title: "First participation in FETIN",
        timeline_2024_desc:
            "I participated for the first time in the Inatel Technology Fair (FETIN), improving the project developed in my second year at ETE. The new version featured AI integration using YOLOv8, a mobile application developed in React Native, and a well-structured firmware. As a result, I was awarded first place in the 'Market Viability' category and also received the 'Soft Skills' award.",
        timeline_2025_title: "Working for Europe",
        timeline_2025_desc:
            "Earlier this year, I was invited to work as a full-stack developer at Redera Technologies, a company that serves clients in Europe, such as AgriMP in Portugal. I contributed to the development of solutions that allowed me to enhance my Front-end skills using React, Vite, and TypeScript, while also deepening my Back-end knowledge by building REST APIs with Flask. I also took part in my first Game Jam, organized by Inatel, where I faced the challenge of creating a game in just 36 hours using C# and Unity.",

        skills_title: "My Skills",
        skills_languages: "Languages",
        skills_frontend: "Front-End",
        skills_mobile: "Mobile",
        skills_backend: "Back-End",
        skills_databases: "Databases",
        skills_data_automation: "Data & Automation",
        skills_ai: "Artificial Intelligence",
        skills_hardware_iot: "Hardware & IoT",
        skills_tools: "Tools",
        skills_devops: "DevOps & Hosting",
        skills_concepts: "Concepts",
        skills_soft_skills: "Soft Skills",
        concept_clean_code: "Clean Code",
        concept_oop: "Object-Oriented Programming",
        concept_agile: "Agile Methodologies",
        concept_ui_ux: "UI/UX",
        soft_teamwork: "Teamwork",
        soft_creativity: "Creativity",
        soft_problem_solving: "Problem Solving",
        soft_communication: "Communication",
        skills_call_to_action: "Want to know more? Click on the cards!",

        contacts_title: "Contacts",
        contacts_text: "I'm Online at:",
        contacts_visit_profile: "Visit Profile",
        contacts_send_email: "Send E-mail",
        contacts_send_message: "Send Message",

        footer_text: "Copyright © 2025 - All right reserved",
    },
};

export default translations;
