import { Download } from "lucide-react";
import Carousel from "./Carousel";

const About = () => {
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
        <section className="px-4 lg:px-40 flex flex-col">
            <h2 className="text-center text-primary text-2xl lg:text-3xl font-bold pb-8">
                About me
            </h2>

            <div className="flex flex-col-reverse lg:flex-row lg:gap-8 items-center lg:items-start flex-1 justify-center">
                <Carousel />

                <article className="flex flex-col lg:w-3/5 gap-4 flex-1">
                    <p className="text-justify text-lg">
                        I've been passionate about computers since childhood. In
                        high school, I discovered my true calling in software
                        development.
                    </p>
                    <p className="text-justify text-lg">
                        During my technical course in telecommunications, I won
                        all project fairs as the firmware developer and
                        participated in a hackathon, winning in one category. I
                        also received an honor of merit for top grades.
                    </p>
                    <p className="text-justify text-lg">
                        In my Software Engineering degree, my team won a project
                        fair in "market viability," where I developed the
                        firmware, AI, and mobile app. I later interned in
                        development and worked for two years as a full-stack
                        developer.
                    </p>
                    <p className="text-justify text-lg">
                        In my free time, I enjoy gaming, reading good books, and
                        exploring the geek universe. I'm a huge Star Wars fan,
                        and Batman is my favorite hero.
                    </p>
                </article>
            </div>

            <button
                className="btn btn-primary self-center text-lg text-white center mt-8 mb-6"
                onClick={() => handleDownload("en")}
            >
                Download CV
                <Download />
            </button>
        </section>
    );
};

export default About;
