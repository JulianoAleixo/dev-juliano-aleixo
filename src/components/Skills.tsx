import {
    Code,
    Layout,
    Smartphone,
    Server,
    Database,
    BarChart,
    Brain,
    Cpu,
    Wrench,
    Settings,
    BookOpen,
    Users,
} from "lucide-react";
import Card from "./Card";
import { useLanguage } from "../context/LanguageContext";

const Skills = () => {
    const { t } = useLanguage();

    const technologies = [
        {
            title: t("skills_languages"),
            topics: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
            icon: Code,
        },
        {
            title: t("skills_frontend"),
            topics: ["HTML", "CSS", "Vue.js", "React", "TailwindCSS"],
            icon: Layout,
        },
        {
            title: t("skills_mobile"),
            topics: ["React Native", "NativeWind", "Expo"],
            icon: Smartphone,
        },
        {
            title: t("skills_backend"),
            topics: ["Node.js", "Express", "Django", "Flask", "REST API"],
            icon: Server,
        },
        {
            title: t("skills_databases"),
            topics: ["MongoDB", "MySQL", "SQLite", "Firebase"],
            icon: Database,
        },
        {
            title: t("skills_data_automation"),
            topics: ["Pandas", "Selenium"],
            icon: BarChart,
        },
        {
            title: t("skills_ai"),
            topics: ["YOLOv8", "TensorFlow", "Keras"],
            icon: Brain,
        },
        {
            title: t("skills_hardware_iot"),
            topics: ["Arduino", "Raspberry Pi", "MQTT", "HTTP"],
            icon: Cpu,
        },
        {
            title: t("skills_tools"),
            topics: ["Git", "GitHub", "Figma", "Notion", "Vite"],
            icon: Wrench,
        },
        {
            title: t("skills_devops"),
            topics: ["Vercel", "Netlify", "CI/CD"],
            icon: Settings,
        },
        {
            title: t("skills_concepts"),
            topics: [
                t("concept_clean_code"),
                t("concept_oop"),
                t("concept_agile"),
                t("concept_ui_ux"),
            ],
            icon: BookOpen,
        },
        {
            title: t("skills_soft_skills"),
            topics: [
                t("soft_teamwork"),
                t("soft_creativity"),
                t("soft_problem_solving"),
                t("soft_communication"),
            ],
            icon: Users,
        },
    ];

    return (
        <div className="flex flex-col min-h-full bg-base-200 p-6">
            <h2 className="text-center text-primary text-2xl lg:text-3xl font-bold pb-8">
                {t("skills_title")}
            </h2>

            <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => (
                        <Card
                            key={index}
                            title={tech.title}
                            topics={tech.topics}
                            Icon={tech.icon}
                        />
                    ))}
                </div>
                <p className="font-semibold mt-4">{t("skills_call_to_action")}</p>
            </div>
        </div>
    );
}
export default Skills;