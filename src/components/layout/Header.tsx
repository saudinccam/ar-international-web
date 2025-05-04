import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-black/50 py-4'
      } top-8`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className={`text-2xl font-bold font-heading ${isScrolled ? 'text-secondary-500' : 'text-white'}`}>
            AR <span className="text-primary-500">International</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-sm font-medium ${
              location.pathname === '/'
                ? 'text-primary-500'
                : isScrolled
                ? 'text-gray-800 hover:text-primary-500'
                : 'text-white hover:text-primary-300'
            } transition-colors duration-200 relative animated-border`}
          >
            Home
          </Link>
          
          <div className="relative group">
            <button
              className={`flex items-center text-sm font-medium ${
                location.pathname.includes('/services')
                  ? 'text-primary-500'
                  : isScrolled
                  ? 'text-gray-800 hover:text-primary-500'
                  : 'text-white hover:text-primary-300'
              } transition-colors duration-200 relative animated-border`}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white shadow-lg rounded-lg py-2 overflow-hidden">
                <Link
                  to="/services/apostille"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-500"
                >
                  Apostille Services
                </Link>
                <Link
                  to="/services/attestation"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-500"
                >
                  Embassy Attestation
                </Link>
                <Link
                  to="/services/visa-stamping"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-500"
                >
                  Visa Stamping
                </Link>
                <Link
                  to="/services/translation"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-500"
                >
                  Translation Services
                </Link>
                <Link
                  to="/services/dataflow"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-500"
                >
                  DataFlow Services
                </Link>
              </div>
            </div>
          </div>
          
          <Link
            to="/about"
            className={`text-sm font-medium ${
              location.pathname === '/about'
                ? 'text-primary-500'
                : isScrolled
                ? 'text-gray-800 hover:text-primary-500'
                : 'text-white hover:text-primary-300'
            } transition-colors duration-200 relative animated-border`}
          >
            About Us
          </Link>
          
          <Link
            to="/faq"
            className={`text-sm font-medium ${
              location.pathname === '/faq'
                ? 'text-primary-500'
                : isScrolled
                ? 'text-gray-800 hover:text-primary-500'
                : 'text-white hover:text-primary-300'
            } transition-colors duration-200 relative animated-border`}
          >
            FAQs
          </Link>
          
          <Link
            to="/contact"
            className={`btn-primary ${!isScrolled && 'bg-opacity-90 hover:bg-opacity-100'}`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-20 animate-fade-in">
          <div className="py-2">
            <Link
              to="/"
              className={`block px-4 py-2 text-sm ${
                location.pathname === '/' ? 'text-primary-500 font-medium' : 'text-gray-800'
              }`}
            >
              Home
            </Link>
            
            <div>
              <button
                className={`flex items-center justify-between w-full px-4 py-2 text-sm ${
                  location.pathname.includes('/services') ? 'text-primary-500 font-medium' : 'text-gray-800'
                }`}
                onClick={toggleServices}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {isServicesOpen && (
                <div className="bg-gray-50 py-1">
                  <Link
                    to="/services/apostille"
                    className="block px-8 py-2 text-sm text-gray-700 hover:text-primary-500"
                  >
                    Apostille Services
                  </Link>
                  <Link
                    to="/services/attestation"
                    className="block px-8 py-2 text-sm text-gray-700 hover:text-primary-500"
                  >
                    Embassy Attestation
                  </Link>
                  <Link
                    to="/services/visa-stamping"
                    className="block px-8 py-2 text-sm text-gray-700 hover:text-primary-500"
                  >
                    Visa Stamping
                  </Link>
                  <Link
                    to="/services/translation"
                    className="block px-8 py-2 text-sm text-gray-700 hover:text-primary-500"
                  >
                    Translation Services
                  </Link>
                  <Link
                    to="/services/dataflow"
                    className="block px-8 py-2 text-sm text-gray-700 hover:text-primary-500"
                  >
                    DataFlow Services
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              to="/about"
              className={`block px-4 py-2 text-sm ${
                location.pathname === '/about' ? 'text-primary-500 font-medium' : 'text-gray-800'
              }`}
            >
              About Us
            </Link>
            
            <Link
              to="/faq"
              className={`block px-4 py-2 text-sm ${
                location.pathname === '/faq' ? 'text-primary-500 font-medium' : 'text-gray-800'
              }`}
            >
              FAQs
            </Link>
            
            <div className="px-4 py-2">
              <Link
                to="/contact"
                className="btn-primary w-full text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;