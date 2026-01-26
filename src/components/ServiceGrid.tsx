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
        <div className="max-w-md mx-auto">
          <div className="bg-gray-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">No Services Found</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We couldn't find any services matching your search criteria. Try adjusting your filters or search terms.
          </p>
          <div className="space-y-2 text-sm text-gray-500">
            <p>💡 Try different keywords like "laundry" or "amenities"</p>
            <p>🔍 Browse all services by removing filters</p>
            <p>📞 Contact our team for custom solutions</p>
          </div>
        </div>
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