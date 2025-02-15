import { Link } from "lucide-react";
import MockupBrowser from "./MockupBrowser";
import Slider from "./Slider";

const projects = [
    {
        name: "Theme Changer DaisyUI",
        description:
            "Um site criativo feito para testar os temas da extensão do TailwindCSS, o DaisyUI.",
        url: "https://theme-change-daisy-ui.vercel.app",
        image: "theme-changer-daisyui",
        technologies: [
            "react",
            "typescript",
            "tailwindcss",
            "daisyui",
            "vite",
            "vercel",
        ],
    },
];

const Projects = () => {
    return (
        <div className="px-4 lg:px-40 min-h-full">
            <h2 className="text-center text-primary text-2xl lg:text-3xl font-bold pb-8">
                Projects
            </h2>

            {projects.map((project, index) => (
                // TODO: Make it responsive
                <div
                    tabIndex={index}
                    className="collapse collapse-open bg-base-200 border border-base-300"
                >
                    <div className="collapse-title font-semibold">
                        {project.name}
                    </div>
                    <div className="collapse-content text-sm flex flex-col">
                        {project.description}
                        <MockupBrowser
                            url={project.url}
                            image={project.image}
                        />
                        <div className="!max-w-2/5 self-center">
                            <Slider
                                images={[...project.technologies]}
                                width={40}
                                height={40}
                                reverse
                            />
                        </div>
                        <button className="btn btn-primary self-center text-lg text-white center mt-6">
                            Access
                            <Link />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Projects;
