import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Shield, Github } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 w-full z-30 transition-all duration-300
      ${scrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-mono font-bold text-white"
          >
            <Shield className="h-6 w-6 text-green-500" />
            <span className="hidden sm:inline">jerrychips.com</span>
            <span className="inline sm:hidden">jc</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" currentPath={location.pathname} />
            <NavLink to="/tools" label="Tools" currentPath={location.pathname} />
            <NavLink to="/blog" label="Blog" currentPath={location.pathname} />
            <NavLink to="/about" label="About" currentPath={location.pathname} />
            <NavLink to="/contact" label="Contact" currentPath={location.pathname} />
            
            <a 
              href="https://github.com/jxrogue/darknode" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
            </a>
            
            <button 
              aria-label="Open Terminal"
              className="flex items-center text-gray-400 hover:text-green-500 transition-colors duration-200"
            >
              <Terminal className="h-5 w-5" />
            </button>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-4 bg-black bg-opacity-95 shadow-lg space-y-3">
          <MobileNavLink to="/" label="Home" currentPath={location.pathname} />
          <MobileNavLink to="/tools" label="Tools" currentPath={location.pathname} />
          <MobileNavLink to="/blog" label="Blog" currentPath={location.pathname} />
          <MobileNavLink to="/about" label="About" currentPath={location.pathname} />
          <MobileNavLink to="/contact" label="Contact" currentPath={location.pathname} />
          
          <div className="flex justify-between pt-3 border-t border-gray-800">
            <a 
              href="https://github.com/jxrogue/darknode" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
            </a>
            
            <button 
              aria-label="Open Terminal"
              className="text-gray-400 hover:text-green-500 transition-colors duration-200"
            >
              <Terminal className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  currentPath: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, currentPath }) => {
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));
  
  return (
    <Link 
      to={to} 
      className={`relative text-sm font-medium tracking-wider
      ${isActive ? 'text-green-500' : 'text-gray-400 hover:text-white'}
      transition-colors duration-200`}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500"></span>
      )}
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, label, currentPath }) => {
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));
  
  return (
    <Link 
      to={to} 
      className={`block py-2 text-base font-medium
      ${isActive ? 'text-green-500' : 'text-gray-400 hover:text-white'}
      transition-colors duration-200`}
    >
      {label}
    </Link>
  );
};

export default Navbar;