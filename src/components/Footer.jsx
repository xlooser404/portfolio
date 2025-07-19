import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

// Social links from your CV
const socialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={24} />,
    url: "https://linkedin.com/in/sromesh20051129",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={24} />,
    url: "https://github.com/xlooser404",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={24} />,
    url: "https://instagram.com/_romesh_v_",
  },
  // Optional: Add other links like Instagram if you have them
  // { name: "Instagram", icon: <FaInstagram size={24} />, url: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-900 px-8 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Copyright Notice */}
        <div className="text-center sm:text-left">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Shan Romesh Vidanage. All Rights Reserved.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-neutral-500 transition-colors hover:text-purple-400"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;