import React from 'react';
import { CheckCircle, Truck, Leaf, Award, Droplets, BedDouble, Beaker, Wrench, Database, Gift, Package } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
    trustBadges: string[];
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ElementType> = {
      Droplets,
      BedDouble,
      Truck,
      Beaker,
      Wrench,
      Leaf,
      Database,
      Gift
    };
    return iconMap[iconName] || Package;
  };

  const getBadgeIcon = (badge: string) => {
    if (badge.includes('Eco') || badge.includes('Biodegradable')) return Leaf;
    if (badge.includes('Delivery')) return Truck;
    return Award;
  };

  const Icon = getIcon(service.icon);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 hover:border-emerald-300 group card-hover transform-gpu animate-fadeInUp">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-emerald-700" />
        </div>
        <h3 className="ml-3 text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{service.title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors">{service.description}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
          <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
          Key Features:
        </h4>
        <ul className="space-y-2">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: `${index * 100}ms` }}>
              <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {service.trustBadges.map((badge, index) => {
          const BadgeIcon = getBadgeIcon(badge);
          return (
            <div 
              key={index} 
              className="flex items-center px-3 py-1 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-full text-xs font-semibold text-amber-800 hover:scale-105 transition-transform duration-200"
            >
              <BadgeIcon className="w-3 h-3 mr-1" />
              {badge}
            </div>
          );
        })}
      </div>
      
      <button className="w-full bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-800 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg btn-animate">
        Request Quote
      </button>
    </div>
  );
};

export default ServiceCard;