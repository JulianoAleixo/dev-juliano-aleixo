import React from "react";

interface MockupBrowserProps {
    url: string;
    image: string;
}

const MockupBrowser: React.FC<MockupBrowserProps> = ({ url, image }) => {
    const imagePath = `../src/assets/img/${image}.png`;

    return (
        <div className="mockup-browser bg-base-300 border border-base-300 w-auto max-w-fit lg:max-w-2/5 flex flex-col self-center my-4">
            <div className="mockup-browser-toolbar">
                <a className="input cursor-pointer" href={url} target="_blank" rel="noopener noreferrer">{url}</a>
            </div>

            <div className="bg-base-200 flex justify-center items-center overflow-hidden">
                <a href={imagePath} target="_blank" rel="noopener noreferrer">
                    <img
                        src={imagePath}
                        alt="Mockup"
                        className="w-auto max-w-full h-auto object-contain"
                        draggable="false"
                    />
                </a>
            </div>
        </div>
    );
};

export default MockupBrowser;
