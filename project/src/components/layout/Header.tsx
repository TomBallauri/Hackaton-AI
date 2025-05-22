import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Le Jeu', path: '/game' },
    { name: 'Informations', path: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 shadow-lg backdrop-blur'
          : 'bg-gradient-to-r from-green-700 via-green-400 to-lime-300'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-3xl font-extrabold text-green-900 drop-shadow-lg tracking-wide"
        >
          <span className="bg-white rounded-full p-2 shadow text-green-700">🌱</span>
          CycleQuest
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-semibold px-3 py-1 rounded transition-all duration-200 ${
                location.pathname === link.path
                  ? 'bg-white text-green-700 shadow'
                  : 'text-white hover:bg-white/20 hover:text-green-900'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute left-1/2 -bottom-1 w-2 h-2 bg-green-700 rounded-full -translate-x-1/2"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white bg-green-700 rounded-full p-2 shadow hover:bg-green-800 transition"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 border-t shadow-lg backdrop-blur">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-semibold px-3 py-2 rounded transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'bg-green-700 text-white shadow'
                      : 'text-green-800 hover:bg-green-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;