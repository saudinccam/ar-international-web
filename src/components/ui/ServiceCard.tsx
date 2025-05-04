import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  url,
  className = '',
}) => {
  return (
    <div className={`card group ${className}`}>
      <div className="card-body flex flex-col h-full">
        <div className="bg-primary-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="card-title text-lg md:text-xl">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Link 
          to={url} 
          className="inline-flex items-center text-primary-500 hover:text-primary-600 group-hover:translate-x-1 transition-all duration-300"
        >
          Learn More <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;