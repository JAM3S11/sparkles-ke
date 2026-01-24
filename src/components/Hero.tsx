import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-700 to-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Seamless Hospitality Logistics for
            <span className="block text-amber-400">Kenya's Finest Establishments</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-emerald-50 leading-relaxed">
            From industrial-grade detergents to luxury linens, we deliver the essentials that keep your guests coming back.
          </p>
          
          <p className="text-lg mb-12 text-emerald-100 max-w-3xl mx-auto">
            Whether you run a boutique Airbnb in Diani or a corporate hotel in Westlands, our scheduled delivery ensures you never run out of the basics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center group">
              Request Delivery
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 border-2 border-white">
              View Service Catalogue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;