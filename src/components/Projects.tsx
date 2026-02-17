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
            description: t("project_1"),
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
            description: t("project_2"),
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
            description: t("project_3"),
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
            description: t("project_4"),
            url: "https://www.julianoaleixo.dev",
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
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <div className="px-4 lg:px-40">
            <h2 className="text-center text-primary text-2xl lg:text-3xl font-bold pb-8">
                {t("projects_title")}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border border-base-300 bg-base-200 rounded-box overflow-hidden"
                    >
                        {/* HEADER */}
                        <div
                            className="lg:text-lg text-secondary font-semibold lg:px-10 px-4 py-4 cursor-pointer flex justify-between items-center"
                            onClick={() =>
                                !isLargeScreen &&
                                setOpenIndex(openIndex === index ? null : index)
                            }
                        >
                            {project.name}

                            {!isLargeScreen && (
                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            )}
                        </div>

                        {/* CONTENT */}
                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                isLargeScreen || openIndex === index
                                    ? "max-h-[1000px] opacity-100"
                                    : "max-h-0 opacity-0"
                            }`}
                        >
                            <div className="text-sm flex flex-col lg:px-10 px-4 pb-6 text-justify">
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
                                    className="btn btn-primary self-center text-lg text-white mt-6"
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t("project_link_button")}
                                    <Link />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Projects;
