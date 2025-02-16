import "../assets/styles/slider.css";
import React from "react";

interface SliderProps {
    images: string[];
    width: number;
    height: number;
    reverse?: boolean;
}

const Slider: React.FC<SliderProps> = ({
    images,
    width,
    height,
    reverse = false,
}) => {
    return (
        <div className="bg-zinc-800 py-2 auto-slider-mask-image">
            <div
                className="auto-slider self-center w-full"
                style={
                    {
                        "--width": `${width}px`,
                        "--height": `${height}px`,
                        "--quantity": images.length,
                    } as React.CSSProperties
                }
                data-reverse={reverse}
            >
                <div className="auto-slider-list">
                    {images.map((image, index) => (
                        <div
                            className="auto-slider-item"
                            key={index}
                            style={
                                {
                                    "--position": index + 1,
                                } as React.CSSProperties
                            }
                        >
                            <img
                                src={`../src/assets/img/${image}.png`}
                                alt={`${
                                    image.charAt(0).toUpperCase() +
                                    image.slice(1)
                                }`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Slider;
