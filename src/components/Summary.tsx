import MockupCode from "./MockupCode";
import { useLanguage } from "../context/LanguageContext";
import { CircleArrowDown } from "lucide-react";

const Summary = () => {
    const { t, language } = useLanguage();

    const handleScroll = (
        event: React.MouseEvent<HTMLAnchorElement>,
        sectionId: string
    ) => {
        event.preventDefault();
        const sectionElement = document.querySelector(`#${sectionId}`);
        if (sectionElement) {
            sectionElement.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="hero bg-base-200 min-h-full py-4 lg:px-40" id="summary">
            <div className="border-y-3 border-base-100 w-full lg:py-8">
                <div className="hero-content w-full flex-col lg:flex-row-reverse gap-12 items-stretch">
                    <img
                        src="/img/profile_pic.JPG"
                        className="max-w-56 lg:max-w-sm rounded-lg shadow-2xl mx-auto lg:w-1/4 object-cover"
                        draggable="false"
                    />
                    <div className="flex flex-col justify-between items-center w-auto mx-8 flex-1 h-full self-center">
                        <MockupCode key={language} />
                        <a
                            onClick={(e) => handleScroll(e, "contacts")}
                            className="btn btn-primary gap-4 my-4 text-white text-base justify-between"
                        >
                            {t("summary_btn")}
                            <CircleArrowDown />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
