import { motion } from "framer-motion";
import { Download } from 'lucide-react';
import profilePic from '../assets/profile.webp'; // Make sure this path is correct

// Animation variant for text and button content, sliding in from the left
const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

// Animation variant for the image section, sliding in from the right
const imageAnimation = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, delay: delay },
    },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-24 lg:mb-36 items-center ">
            <div className="flex flex-wrap items-center justify-center">
                {/* Text Content Section */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.p
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-6 text-2xl font-bold tracking-tight bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
                        >
                            Full-Stack Developer
                        </motion.p>
                        <motion.h1
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="text-5xl font-thin tracking-tight lg:text-7xl text-center lg:text-left"
                        >
                            <span className="font-bold">Hello I'm</span> Shan Romesh
                        </motion.h1>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left"
                        >
                            Motivated and adaptable IT professional with a passion for technology
                            and innovation. Skilled in problem-solving, collaboration, and delivering
                            impactful solutions. Renowned for being a fast learner, a dependable
                            team player, and dedicated to achieving excellence. Eager to contribute to
                            dynamic organizations and grow through meaningful challenges while
                            mastering modern technologies.
                        </motion.p>
                        <motion.div
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            className="flex justify-center lg:justify-start"
                        >
                            <a
                                href="https://drive.google.com/uc?export=download&id=1yErsWJjlpN7OqPxS_RSmo3kyC2yoZIbx"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 border border-green-400 text-green-400 px-4 py-2 rounded-md hover:bg-green-400 hover:text-white transition-colors duration-300"
                            >
                                <span>DOWNLOAD CV</span>
                                <Download size={20} />
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/3 lg:p-8">
                    <div className="flex justify-center">
                        {/* Container for both image and SVG circle */}
                        <motion.div
                            variants={imageAnimation(1.2)}
                            initial="hidden"
                            animate="visible"
                            className="relative flex items-center justify-center h-96 w-96"
                        >
                            {/* The SVG circle is positioned as an absolute background layer */}
                            <motion.svg
                                viewBox="0 0 500 500"
                                className="absolute h-full w-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.5 }}
                            >
                                <motion.circle
                                    cx="250"
                                    cy="250"
                                    r="220" // Adjusted radius to fit around the image
                                    stroke="#00ff99"
                                    strokeWidth="4"
                                    fill="transparent"
                                    strokeDasharray="20 30"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 1.8, ease: "easeInOut" }}
                                />
                            </motion.svg>
                            {/* The profile image is centered on top */}
                            <motion.img
                                src={profilePic}
                                alt="Luke Coleman"
                                className="rounded-full w-80 h-80 object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;