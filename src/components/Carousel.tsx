import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
    "/img/carousel01.jpg",
    "/img/carousel02.jpg",
    "/img/carousel03.jpg",
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 15000);
        return () => clearInterval(interval);
    }, [currentIndex]);
    return (
        <div className="flex flex-col flex-1 justify-center my-8">
                <div className="relative w-full mx-auto aspect-video lg:max-w-3xl overflow-hidden">
                    <div
                        className="flex transition-transform ease-out duration-500"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {images.map((src, index) => (
                            <motion.img
                                key={index}
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover rounded-md flex-shrink-0"
                                initial={{ x: direction * 100 + "%" }}
                                animate={{ x: "0%" }}
                                exit={{ x: direction * -100 + "%" }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-secondary bg-opacity-50 hover:bg-opacity-80 text-white p-2 md:p-3 rounded-full shadow-md cursor-pointer transition-all select-none"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-secondary bg-opacity-50 hover:bg-opacity-80 text-white p-2 md:p-3 rounded-full shadow-md cursor-pointer transition-all select-none"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`btn btn-xs ${
                                currentIndex === index
                                    ? "btn-secondary text-white"
                                    : ""
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
    );
}
export default Carousel;