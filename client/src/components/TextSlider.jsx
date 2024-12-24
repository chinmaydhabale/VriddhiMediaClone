import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TextSlider = () => {
    const reviews = [
        {
            name: "Lindsey Wallace",
            review: "I've been loving the constant communication and updates from the team, their work ethic is impeccable. 10/10 recommend their UGC service."
        },
        {
            name: "Rahul Jain",
            review: "Was a bit sceptical after having bad experiences with other agencies. Gave them a chance anyways and 3 months down the line before we even know it we are ranking like crazy and our sales were 30% up."
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("next");

    const handleNext = () => {
        setDirection("next");
        setCurrentIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setDirection("prev");
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    const variants = {
        enter: (direction) => ({
            x: direction === "next" ? 300 : -300,
            opacity: 0,
        }),
        center: { x: 0, opacity: 1 },
        exit: (direction) => ({
            x: direction === "next" ? -300 : 300,
            opacity: 0,
        }),
    };

    return (
        <div className="relative w-full bg-pink-200 mx-auto mt-24 px-4 py-8">
            <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
                <h1 className="text-2xl font-bold text-center text-blue-600">
                    What People Are Saying
                </h1>

                <div className="relative mt-4 h-48">
                    <AnimatePresence custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 1 }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-center"
                        >
                            <svg
                                preserveAspectRatio="xMidYMid meet"
                                data-bbox="81.07 98.182 442.001 316.88"
                                viewBox="81.07 98.182 442.001 316.88"
                                height="50"
                                width="50"
                                xmlns="http://www.w3.org/2000/svg"
                                data-type="color"
                                role="img"
                                aria-label="quotation mark"
                            >
                                <g>
                                    <path
                                        d="M263.976 264.504c0-50.508-40.945-91.453-91.453-91.453S81.07 213.996 81.07 264.504c0 24.735 9.824 47.173 25.778 63.635 6.45 7.335 29.665 35.902 32.926 70.486 1.286 13.641 16.557 20.973 27.961 13.378 43.781-29.158 94.233-81.848 96.24-144.483l-.056.021c.035-1.01.057-2.021.057-3.037z"
                                        fill="#1308FE"
                                        data-color="1"
                                    ></path>
                                    <path
                                        d="M464.971 264.504c0-50.508-40.945-91.453-91.453-91.453s-91.453 40.945-91.453 91.453c0 24.735 9.824 47.173 25.778 63.635 6.45 7.335 29.665 35.902 32.926 70.486 1.286 13.641 16.557 20.973 27.961 13.378 43.781-29.158 94.233-81.848 96.24-144.483l-.056.021c.035-1.01.057-2.021.057-3.037z"
                                        fill="#1308FE"
                                        data-color="1"
                                    ></path>
                                    <path
                                        fill="#FE4E1A"
                                        d="M523.071 168.919h-55.548l51.097-21.787-3.059-7.174-50.122 21.371 38.529-38.529-5.516-5.515-39.278 39.278 20.726-51.536-7.237-2.91-20.329 50.552V98.182h-7.8v55.548l-21.787-51.097-7.175 3.059 21.371 50.121-38.528-38.528-5.515 5.515 39.278 39.279-51.537-20.726-2.91 7.236 50.553 20.33h-54.487v7.8h55.548l-51.097 21.787 3.059 7.174 50.121-21.371-38.528 38.529 5.515 5.515 39.278-39.278-20.725 51.536 7.236 2.91 20.33-50.553v54.488h7.8v-55.548l21.786 51.097 7.175-3.059-21.371-50.121 38.528 38.528 5.516-5.515-39.279-39.279 51.537 20.726 2.91-7.236-50.553-20.33h54.488v-7.8z"
                                        data-color="2"
                                    ></path>
                                </g>
                            </svg>
                            <p className="mt-2 text-gray-600">
                                {reviews[currentIndex].review}
                            </p>
                            <h3 className="mt-4 text-lg text-blue-500 font-semibold">
                                {reviews[currentIndex].name}
                            </h3>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
            <button
                className="absolute top-1/2 left-[10%] transform -translate-y-1/2 text-4xl text-blue-800 p-2"
                onClick={handlePrev}
            >
                &lt;
            </button>
            <button
                className="absolute top-1/2 right-[10%] transform -translate-y-1/2 text-4xl text-blue-800 p-2"
                onClick={handleNext}
            >
                &gt;
            </button>
        </div>
    );
};

export default TextSlider;
