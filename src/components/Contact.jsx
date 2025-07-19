import { motion } from "framer-motion";
// Import the requested icons
import { IoLocationOutline, IoCallOutline, IoMailOutline } from "react-icons/io5";

// Define contact details inside the component
const contactDetails = [
  {
    icon: <IoLocationOutline size={24} className="text-neutral-400" />,
    text: "Matara, Southern, Sri Lanka",
    href: "https://www.google.com/maps/place/Matara", 
  },
  {
    icon: <IoCallOutline size={24} className="text-neutral-400" />,
    text: "+94 74-033-6513",
    href: "tel:+94740336513", 
  },
  {
    icon: <IoMailOutline size={24} className="text-neutral-400" />,
    text: "romeshshan8@gmail.com",
    href: "mailto:romeshshan8@gmail.com",
  },
];

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-semibold tracking-tight text-neutral-200"
      >
        Get in Touch
      </motion.h2>

      {/* Card Style Container */}
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 shadow-lg"
      >
        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                {detail.icon}
              </div>
              {/* Text Link */}
              <a
                href={detail.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 tracking-tighter hover:text-purple-400 transition-colors"
              >
                {detail.text}
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;