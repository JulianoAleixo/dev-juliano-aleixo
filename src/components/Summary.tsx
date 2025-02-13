import MockupCode from "./MockupCode";
import { useLanguage } from "../context/LanguageContext";

const Summary = () => {
    const { t, language } = useLanguage();

    return (
        <div className="hero bg-base-200 min-h-full py-4">
            <div className="hero-content w-full flex-col lg:flex-row-reverse gap-12">
                <img
                    src="../src/assets/img/profile_pic.JPG"
                    className="max-w-56 lg:max-w-sm rounded-lg shadow-2xl mx-8 lg:w-1/4"
                    draggable="false"
                />
                <div className="flex flex-col justify-center items-center max-w-[65vw] lg:max-w-[65%]">
                    <MockupCode key={language} />
                    <a className="btn btn-primary w-fit my-4 self-center text-white">
                        {t("summary_btn")}
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Summary;
