import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/70 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
        <a href="#" className="text-2xl font-bold text-sky-500 hover:text-sky-400 transition-colors">
          GT
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sky-400 hover:text-white transition-colors font-semibold">
              {link.name}
            </a>
          ))}
        </nav>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=georgechivalo01@gmail.com" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-sky-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-sky-600 transition-all duration-300 transform hover:scale-105">
          Hire Me
        </a>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
};

export default Header;