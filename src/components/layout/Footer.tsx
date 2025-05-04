import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AR International</h3>
            <p className="text-gray-300 mb-4">
              With over 25 years of experience, we are India's trusted partner for document attestation, apostille, and visa services.
            </p>
            <p className="flex items-start mb-2">
              <MapPin size={18} className="mr-2 flex-shrink-0 mt-1 text-primary-500" />
              <span className="text-gray-300">30 Kilokari, Ring Road, New Delhi, India - 110014</span>
            </p>
            <p className="flex items-center mb-2">
              <Phone size={18} className="mr-2 text-primary-500" />
              <span className="text-gray-300">+91 98765 43210</span>
            </p>
            <p className="flex items-center mb-2">
              <Mail size={18} className="mr-2 text-primary-500" />
              <span className="text-gray-300">info@arinternational.in</span>
            </p>
            <p className="flex items-center">
              <Clock size={18} className="mr-2 text-primary-500" />
              <span className="text-gray-300">Mon-Sat: 9AM - 6PM</span>
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/apostille" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                  Apostille Services
                </Link>
              </li>
              <li>
                <Link to="/services/attestation" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                  Embassy Attestation
                </Link>
              </li>
              <li>
                <Link to="/services/visa-stamping" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                  Visa Stamping
                </Link>
              </li>
              <li>
                <Link to="/services/translation" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                  Translation Services
                </Link>
              </li>
              <li>
                <Link to="/services/dataflow" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                  DataFlow Services
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest services and offers.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 text-gray-800 rounded-l-md focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-md transition-colors duration-200"
                >
                  Go
                </button>
              </div>
            </form>
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61571540566820"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-800 hover:bg-primary-500 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} AR International. All rights reserved. MEA Registered.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;