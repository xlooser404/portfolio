import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiFlutter, SiMysql, SiPython  } from "react-icons/si";
import { FaNodeJs,FaPhp } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation variants for the icons to create a floating effect
const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10], // Animate y-axis between 10 and -10
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity, // Repeat the animation indefinitely
            repeatType: "reverse", // Reverse the animation direction on each repeat
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-semibold tracking-tight text-neutral-200"
      >
        Technologies
      </motion.h2>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
      >
        {/* React */}
        <div className="flex flex-col items-center">
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-5xl md:text-7xl text-cyan-400" />
            </motion.div>
            <p className="mt-2 text-sm">React</p>
        </div>

        {/* Next.js */}
        <div className="flex flex-col items-center">
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-5xl md:text-7xl" />
            </motion.div>
            <p className="mt-2 text-sm">Next.js</p>
        </div>

        {/* MongoDB */}
        <div className="flex flex-col items-center">
            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-5xl md:text-7xl text-green-500" />
            </motion.div>
            <p className="mt-2 text-sm">MongoDB</p>
        </div>


        {/* Node.js */}
        <div className="flex flex-col items-center">
            <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-5xl md:text-7xl text-green-500" />
            </motion.div>
            <p className="mt-2 text-sm">Node.js</p>
        </div>

        {/* Flutter */}
        <div className="flex flex-col items-center">
            <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFlutter className="text-5xl md:text-7xl text-sky-400" />
            </motion.div>
            <p className="mt-2 text-sm">Flutter</p>
        </div>

        {/* MySQL */}
        <div className="flex flex-col items-center">
            <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-5xl md:text-7xl text-sky-700" />
            </motion.div>
            <p className="mt-2 text-sm">MySQL</p>
        </div>
        
        {/* Php */}
        <div className="flex flex-col items-center">
            <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPhp className="text-5xl md:text-7xl text-purple-500" />
            </motion.div>
            <p className="mt-2 text-sm">PHP</p>
        </div>
        
        {/* Python */}
        <div className="flex flex-col items-center">
            <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPython  className="text-5xl md:text-7xl text-yellow-400" />
            </motion.div>
            <p className="mt-2 text-sm">Python</p>
        </div>

      </motion.div>
    </div>
  );
};

export default Technologies;