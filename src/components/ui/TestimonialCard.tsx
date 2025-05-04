import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position?: string;
  content: string;
  rating: number;
  avatarUrl?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  content,
  rating,
  avatarUrl,
  className = '',
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}
        />
      );
    }
    return stars;
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 h-full ${className}`}>
      <div className="flex space-x-1 mb-3">{renderStars()}</div>
      <p className="text-gray-700 mb-4 italic">"{content}"</p>
      <div className="flex items-center">
        {avatarUrl ? (
          <img 
            src={avatarUrl} 
            alt={name} 
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold mr-3">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          {position && <p className="text-sm text-gray-500">{position}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;