import { useLanguage } from "../context/LanguageContext";
import FeedbackItem from "./FeedbackItem";

const Feedbacks = () => {
    const { t, language } = useLanguage();

    const feedbacks = {
        en: [
            {
                image: "/img/joao-pedro-profile-pic.jpg",
                name: "João Pedro Santos",
                role: "Developer",
                text: "Juliano is someone I had the privilege of working with. Very charismatic and helpful, he would always seek to learn what he didn’t know, and made a point of sharing what he did. An extremely competent professional, especially when it comes to front-end. From coworker to lifelong friend!",
                linkedin: "https://br.linkedin.com/in/joaopedrosantosdev",
            },
        ],
        "pt-BR": [
            {
                image: "/img/joao-pedro-profile-pic.jpg",
                name: "João Pedro Santos",
                role: "Developer",
                text: "Juliano é uma pessoa com quem tive o privilégio de trabalhar. Muito carismático e prestativo, o que ele não sabia, procurava saber; e o que sabia, fazia questão de compartilhar. Um profissional extremamente competente, principalmente quando o assunto é front-end. De colega de trabalho a amigo para a vida!",
                linkedin: "https://br.linkedin.com/in/joaopedrosantosdev",
            },
        ]
    };

    return (
        <section className="px-4 lg:px-40  flex flex-col bg-base-100">
            <h2 className="text-center text-primary text-2xl lg:text-3xl font-bold pb-8">
                {t("feedback_title")}
            </h2>

            <ul className="list bg-base-200 rounded-box shadow-md">
                {feedbacks[language].map((feedback, index) => (
                    <li className="list-row p-6" key={index}>
                        <FeedbackItem
                            image={feedback.image}
                            name={feedback.name}
                            role={feedback.role}
                            text={feedback.text}
                            linkedin={feedback.linkedin}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};
export default Feedbacks;
