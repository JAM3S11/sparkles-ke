import React from 'react';
import { services } from '../utils/data';
import ServiceCard from './ServiceCard';

interface ServiceGridProps {
  category?: string;
  limit?: number;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ category, limit }) => {
  const filteredServices = category 
    ? services.filter(service => service.category === category)
    : services;
    
  const displayServices = limit ? filteredServices.slice(0, limit) : filteredServices;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {displayServices.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceGrid;