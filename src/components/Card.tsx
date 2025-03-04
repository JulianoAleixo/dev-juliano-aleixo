import { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ title, topics, Icon }: { title: string; topics: string[]; Icon: React.ElementType }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            className="relative w-64 h-40 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="w-full h-full bg-base-100 rounded-lg shadow-xl flex items-center justify-center p-4"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                <div className="absolute w-full h-full flex flex-col items-center justify-center backface-hidden">
                    <Icon size={40} className="text-primary mb-2" />
                    <h3 className="text-lg font-bold text-primary">{title}</h3>
                </div>
                <div className="absolute w-full h-full flex flex-col items-center justify-start bg-neutral text-neutral-content p-4 rounded-lg rotate-y-180 backface-hidden">
                    <h4 className="tect-center font-semibold">{title}</h4>
                    <ul className="list-disc text-left text-sm w-full pl-8 pt-1">
                        {topics.map((topic, i) => (
                            <li key={i} className="text-sm">
                                {topic}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
}
export default Card;