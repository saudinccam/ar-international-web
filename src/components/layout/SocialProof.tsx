import React from 'react';
import { Facebook, Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <div className="bg-secondary-900 text-white py-2 fixed w-full top-0 z-50">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
          <a 
            href="https://g.co/kgs/nLAFWqU" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:text-primary-300 transition-colors"
          >
            <div className="flex items-center mr-2">
              <Star size={16} className="text-amber-400 fill-amber-400" />
              <Star size={16} className="text-amber-400 fill-amber-400" />
              <Star size={16} className="text-amber-400 fill-amber-400" />
              <Star size={16} className="text-amber-400 fill-amber-400" />
              <Star size={16} className="text-amber-400 fill-amber-400" />
            </div>
            <span>Trusted by Thousands - 4.9/5 on Google</span>
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61571540566820" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:text-primary-300 transition-colors"
          >
            <Facebook size={16} className="mr-2" />
            <span>Join Our Growing Community on Facebook</span>
          </a>
          <a 
            href="https://wa.me/+919211461774" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:text-primary-300 transition-colors"
          >
            <span>WhatsApp: +91 92114 61774</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;