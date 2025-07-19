import logo from '../assets/react.svg'; // Make sure this path is correct
import { Github, Linkedin, Instagram } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/" aria-label='Home'>
              <img src={logo} className='mx-2 w-10' alt="React Logo" />
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-transform hover:scale-125">
                <Github />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-transform hover:scale-125">
                <Linkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-transform hover:scale-125">
                <Instagram />
            </a>
        </div>
    </nav>
  )
}

export default Navbar;