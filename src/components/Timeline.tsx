import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

const Timeline = () => {
    const { t } = useLanguage();

    const timelineItems = [
        {
            year: "2020",
            title: t("timeline_2020_title"),
            description: t("timeline_2020_desc"),
        },
        {
            year: "2021",
            title: t("timeline_2021_title"),
            description: t("timeline_2021_desc"),
        },
        {
            year: "2022",
            title: t("timeline_2022_title"),
            description: t("timeline_2022_desc"),
        },
        {
            year: "2023",
            title: t("timeline_2023_title"),
            description: t("timeline_2023_desc"),
        },
        {
            year: "2024",
            title: t("timeline_2024_title"),
            description: t("timeline_2024_desc"),
        },
    ];

    const elementsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const isLgScreen = window.matchMedia("(min-width: 1024px)").matches;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const directionClass = isLgScreen
                            ? entry.target.getAttribute("data-direction")
                            : "animate-from-right";

                        entry.target.classList.add("opacity-100", directionClass || "animate-from-right");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        elementsRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical overflow-x-hidden">
            {timelineItems.map((item, index) => {
                const isLeftAligned = index % 2 === 0;
                const alignmentClass = isLeftAligned ? "timeline-start mb-10 md:text-end" : "timeline-end mb-10";
                const animationDirection = isLeftAligned ? "animate-from-left" : "animate-from-right";

                return (
                    <li key={index}>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div
                            ref={(el) => {
                                if (el && !elementsRef.current.includes(el)) {
                                    elementsRef.current.push(el);
                                }
                            }}
                            data-direction={animationDirection}
                            className={`${alignmentClass} opacity-0 transition-all duration-700 ease-in-out`}
                        >
                            <time className="font-mono italic">{item.year}</time>
                            <div className="text-lg font-black text-accent">{item.title}</div>
                            <p>{item.description}</p>
                        </div>
                        {index !== timelineItems.length - 1 ? <hr /> : ""}
                    </li>
                );
            })}
        </ul>
    );
};

export default Timeline;
