import { useLanguage } from "../context/LanguageContext";
import Timeline from "./Timeline";

const Journey = () => {
    const { t } = useLanguage();

    return (
        <section className="px-4 lg:px-40 flex flex-col">
            <h2 className="text-center text-primary text-2xl lg:text-3xl font-bold pb-8">
                {t("journey_title")}
            </h2>

            <Timeline />
        </section>
    );
}
export default Journey;