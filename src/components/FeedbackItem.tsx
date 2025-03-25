import React from "react";

interface FeedbackItemProps {
    image: string;
    name: string;
    role: string;
    text: string;
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({ image, name, role, text }) => {
    return (
        <>
            <div>
                <img
                    className="size-10 rounded-box"
                    src={image}
                />
            </div>
            <div>
                <div>{name}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                    {role}
                </div>
            </div>
            <p className="list-col-wrap text-xs">
                {text}
            </p>
        </>
    );
};
export default FeedbackItem;
