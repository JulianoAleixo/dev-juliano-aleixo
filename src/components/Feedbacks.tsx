import FeedbackItem from "./FeedbackItem";

const Feedbacks = () => {
    const feedbacks = [
        {
            image: "https://img.daisyui.com/images/profile/demo/1@94.webp",
            name: "Dua Lipa",
            role: "Remaining Reason",
            text: "Remaining Reason became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        },
        {
            image: "",
            name: "Dua Lipa",
            role: "Remaining Reason",
            text: "Remaining Reason became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        },
        {
            image: "https://img.daisyui.com/images/profile/demo/1@94.webp",
            name: "Dua Lipa",
            role: "Remaining Reason",
            text: "Remaining Reason became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        },
        {
            image: "https://img.daisyui.com/images/profile/demo/1@94.webp",
            name: "Dua Lipa",
            role: "Remaining Reason",
            text: "Remaining Reason became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.",
        },
    ];

    return (
        <section className="px-4 lg:px-40  flex flex-col bg-base-100 p-6">
            <h2 className="text-center text-primary text-2xl lg:text-3xl font-bold pb-8">
                Feedbacks
            </h2>

            <ul className="list bg-base-200 rounded-box shadow-md">
                {feedbacks.map((feedback, index) => (
                    <li className="list-row" key={index}>
                        <FeedbackItem
                            image={feedback.image}
                            name={feedback.name}
                            role={feedback.role}
                            text={feedback.text}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};
export default Feedbacks;
