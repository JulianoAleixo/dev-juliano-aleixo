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

            <div className="flex flex-col-reverse lg:flex-row lg:gap-8 items-center lg:items-start flex-1">
                <Carousel />

                <article className="flex flex-col lg:w-3/5 gap-4">
                    <p className="text-justify text-lg">
                        I have been passionate about computers since childhood,
                        creating simple codes in VisuAlg and developing games in
                        Scratch. In high school, I discovered that my true
                        calling lies in computing and software development.
                    </p>
                    <p className="text-justify text-lg">
                        During my technical course in telecommunications, which
                        I took alongside high school, I participated in and won
                        all the project fairs, always being responsible for the
                        prototype firmware. Additionally, I participated in a
                        hackathon, where my team won in one of the categories.
                        At the end of my technical training, I was awarded the
                        honor of merit for achieving the highest grades in all
                        courses.
                    </p>
                    <p className="text-justify text-lg">
                        During my undergraduate studies in Software Engineering,
                        I participated in a project fair where my team won first
                        place in the "market viability" category. I was
                        responsible for developing the firmware, AI, and mobile
                        application. Throughout my degree, I started an
                        internship in development and later worked for two years
                        as a full-stack developer.
                    </p>
                    <p className="text-justify text-lg">
                        In my free time, I enjoy playing on my computer and
                        reading good books.
                    </p>
                </article>
            </div>

            <button
                className="btn btn-primary self-center text-lg text-white center mt-6"
                onClick={() => handleDownload("en")}
            >
                Download CV
                <Download />
            </button>
        </section>
    );
};

export default About;
