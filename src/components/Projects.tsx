import { Link } from "lucide-react";
import MockupBrowser from "./MockupBrowser";
import Slider from "./Slider";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

interface ProjectsProps {
    theme: string;
}

const Projects = ({ theme }: ProjectsProps) => {
    const { t } = useLanguage();

    const projects = [
        {
            name: "Theme Changer DaisyUI",
            description:
                t("project_1"),
            url: "https://theme-change-daisy-ui.vercel.app",
            image: "theme-changer-daisyui",
            technologies: [
                "react",
                "typescript",
                "tailwindcss",
                "vite",
                "vercel",
                "daisyui",
            ],
        },
        {
            name: "Node Agenda",
            description:
                t("project_2"),
            url: "https://node-agenda.vercel.app",
            image: "node-agenda",
            technologies: [
                "nodejs",
                "javascript",
                "ejs",
                "bootstrap",
                "vercel",
                "mongodb",
            ],
        },
        {
            name: "Consultório Dra. Maria Luiza Rennó",
            description:
                t("project_3"),
            url: "https://dramarialuizarenno.com.br",
            image: "dra-maria-luiza-renno",
            technologies: [
                "react",
                "typescript",
                "tailwindcss",
                "vite",
                "vercel",
                "daisyui",
            ],
        },
        {
            name: "Dev Juliano Aleixo",
            description:
                t("project_4"),
            url: "#",
            image: "dev-juliano-aleixo",
            technologies: [
                "react",
                "typescript",
                "tailwindcss",
                "vite",
                "vercel",
                "daisyui",
            ],
        },
    ];

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <div className="px-4 lg:px-40 min-h-full">
            <h2 className="text-center text-primary text-2xl lg:text-3xl font-bold pb-8">
                {t("projects_title")}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        tabIndex={0}
                        className={`border border-base-300 bg-base-200 ${
                            isLargeScreen
                                ? "collapse collapse-open"
                                : "collapse collapse-arrow"
                        }`}
                    >
                        <div className="collapse-title lg:text-lg text-secondary font-semibold lg:px-10">
                            {project.name}
                        </div>
                        <div className="collapse-content text-sm flex flex-col lg:px-10 overflow-auto">
                            {project.description}
                            <MockupBrowser
                                url={project.url}
                                image={project.image}
                            />

                            <Slider
                                theme={theme}
                                images={[...project.technologies]}
                                width={40}
                                height={40}
                                reverse
                            />

                            <a
                                className="btn btn-primary self-center text-lg text-white center mt-6"
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t("project_link_button")}
                                <Link />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Projects;
