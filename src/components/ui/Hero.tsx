import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink = '/contact',
  secondaryCtaText,
  secondaryCtaLink = '/services',
  backgroundImage = 'bg-hero-pattern',
  className = '',
}) => {
  return (
    <div
      className={`relative min-h-[80vh] flex items-center ${backgroundImage} bg-cover bg-center ${className}`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-white mb-6 animate-fade-in">{title}</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slide-up">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {ctaText && (
              <Link to={ctaLink}>
                <Button variant="primary" size="lg">
                  {ctaText}
                </Button>
              </Link>
            )}
            {secondaryCtaText && (
              <Link to={secondaryCtaLink}>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:bg-opacity-10">
                  {secondaryCtaText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;