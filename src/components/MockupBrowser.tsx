import React from "react";

interface MockupBrowserProps {
    url: string;
    image: string;
}

const MockupBrowser: React.FC<MockupBrowserProps> = ({ url, image }) => {
    const imagePath = `../src/assets/img/${image}.png`;

    return (
        <div className="mockup-browser bg-zinc-800 border border-base-300 w-full max-w-full my-4 lg:my-8" data-theme="forest">
            <div className="mockup-browser-toolbar">
                <a
                    className="cursor-pointer input"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {url}
                </a>
            </div>

            <div className="bg-base-200 flex justify-center items-center overflow-hidden">
                <a href={imagePath} target="_blank" rel="noopener noreferrer">
                    <img
                        src={imagePath}
                        alt="Mockup"
                        className="w-full h-auto object-contain"
                        draggable="false"
                    />
                </a>
            </div>
        </div>
    );
};

export default MockupBrowser;
