import { Download } from "lucide-react";
import Carousel from "./Carousel";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
    const { t } = useLanguage();

    const handleDownload = (language: string) => {
        const files: Record<string, string> = {
            en: "../src/assets/files/CV_Juliano_en.pdf",
            pt: "../src/assets/files/document_pt-BR.pdf",
        };

        const filePath = files[language] || files["en"];

        const link = document.createElement("a");
        link.href = filePath;
        link.download = filePath.split("/").pop() || "downloaded_file";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="px-4 lg:px-40 flex flex-col bg-base-200">
            <h2 className="text-center text-primary text-2xl lg:text-3xl font-bold pb-8 mt-4">
                {t("about_title")}
            </h2>

            <div className="flex flex-col-reverse lg:flex-row lg:gap-12 items-center lg:items-start flex-1 justify-center">
                <Carousel />

                <article className="flex flex-col lg:w-3/5 gap-4 flex-1">
                    {Array.from({ length: 4 }, (_, i) => (
                        <p key={i} className="text-justify text-lg">
                            {t(`about_${i + 1}`)}
                        </p>
                    ))}
                </article>
            </div>

            <button
                className="btn btn-primary self-center text-lg text-white center mt-8 mb-6"
                onClick={() => handleDownload("en")}
            >
                {t("about_download_btn")}
                <Download />
            </button>
        </section>
    );
};

export default About;
