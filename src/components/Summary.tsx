import MockupCode from "./MockupCode";
import { useLanguage } from "../context/LanguageContext";
import { CircleArrowDown } from "lucide-react";

const Summary = () => {
    const { t, language } = useLanguage();

    return (
        <div className="hero bg-base-200 min-h-full py-4" id="summary">
            <div className="border-y-3 border-base-100 lg:py-8">
                <div className="hero-content w-full flex-col lg:flex-row-reverse gap-12 items-stretch">
                    <img
                        src="../src/assets/img/profile_pic.JPG"
                        className="max-w-56 lg:max-w-sm rounded-lg shadow-2xl mx-8 lg:w-1/4 object-cover"
                        draggable="false"
                    />
                    <div className="flex flex-col justify-between items-center w-56 lg:w-auto flex-1 h-full self-center">
                        <MockupCode key={language} />
                        <a className="btn btn-primary gap-4 my-4 text-white text-base justify-between">
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
