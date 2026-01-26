import React from 'react';
import { services } from '../utils/data';
import ServiceCard from './ServiceCard';

interface ServiceGridProps {
  category?: string;
  limit?: number;
  searchTerm?:string;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ category, limit, searchTerm = '' }) => {
  const filteredServices = services.filter(service => {
    const matchCategories = !category || service.category === category;

    const matchSearches = !searchTerm ||
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      service.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategories && matchSearches
  })
    
  const displayServices = limit ? filteredServices.slice(0, limit) : filteredServices;

  // When no results show the below
  if(displayServices.length === 0){
    return (
      <div className='text-center py-20'>
        <div className='text-gray-500 text-lg font-bold tracking-wide'>No service founding matching your criteria...</div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {displayServices.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceGrid;