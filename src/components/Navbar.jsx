import logo from '../assets/logomymy.png'; // Make sure this path is correct
import { Github, Linkedin, Instagram } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/" aria-label='Home'>
              <img src={logo} className='mx-2 w-10' alt="React Logo" />
            </a>
             <span className="ml-2 text-xl font-semibold tracking-tight">
                Shan Romesh
              </span>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://github.com/xlooser404" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-transform hover:scale-125">
                <Github />
            </a>
            <a href="https://www.linkedin.com/in/-sromesh20051129/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-transform hover:scale-125">
                <Linkedin />
            </a>
            <a href="https://www.instagram.com/_romesh_v_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-transform hover:scale-125">
                <Instagram />
            </a>
        </div>
    </nav>
  )
}

export default Navbar;