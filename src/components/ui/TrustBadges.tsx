import React from 'react';
import { Shield, Award, Users, CheckCircle } from 'lucide-react';

interface TrustBadge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TrustBadges: React.FC = () => {
  const badges: TrustBadge[] = [
    {
      icon: <Shield size={40} className="text-primary-500" />,
      title: "MEA Authorized",
      description: "Officially recognized by the Ministry of External Affairs, Government of India"
    },
    {
      icon: <Award size={40} className="text-primary-500" />,
      title: "25+ Years Experience",
      description: "Serving clients with excellence and integrity since 1995"
    },
    {
      icon: <Users size={40} className="text-primary-500" />,
      title: "10,000+ Happy Clients",
      description: "Trusted by individuals and businesses across India"
    },
    {
      icon: <CheckCircle size={40} className="text-primary-500" />,
      title: "Embassy Approved",
      description: "Recognized and approved by major embassies and consulates"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {badges.map((badge, index) => (
        <div 
          key={index}
          className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="mb-4">
            {badge.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{badge.title}</h3>
          <p className="text-gray-600">{badge.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;