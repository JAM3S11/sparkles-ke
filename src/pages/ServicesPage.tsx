import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, CheckCircle, TrendingUp, Users, Clock, ArrowRight, Star, Package } from 'lucide-react';
import Navigation from '../components/Navigation';
import ServiceGrid from '../components/ServiceGrid';
import Footer from '../components/Footer';
import { serviceCategories } from '../utils/data';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const caseStudies = [
    {
      title: "Serenity Hotel Nairobi",
      category: "Housekeeping & Laundry",
      challenge: "Inconsistent linen quality affecting guest satisfaction",
      solution: "Implemented premium linen supply with 400-thread count bedsheets and white-label laundry service",
      results: ["35% increase in guest satisfaction", "40% reduction in linen replacement costs", "24-hour turnaround time"],
      image: "hotel-case"
    },
    {
      title: "Maasai Mara Eco Lodge",
      category: "Guest Amenities",
      challenge: "Need for sustainable, eco-friendly guest products",
      solution: "Switched to biodegradable toiletries and bulk dispensers reducing plastic waste",
      results: ["Zero single-use plastic", "Positive guest feedback on sustainability", "Cost savings of 25%"],
      image: "eco-lodge-case"
    },
    {
      title: "Coastal Beach Resort",
      category: "Food & Beverage",
      challenge: "Food safety compliance and kitchen efficiency",
      solution: "Implemented food-grade certified chemicals and color-coded cleaning systems",
      results: ["100% health inspection compliance", "30% improvement in kitchen efficiency", "Staff satisfaction increase"],
      image: "resort-case"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Quality Guaranteed",
      description: "All products meet international hospitality standards and local requirements"
    },
    {
      icon: TrendingUp,
      title: "Cost Effective",
      description: "Competitive pricing with bulk discounts and flexible payment terms"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated account managers and training for your staff"
    },
    {
      icon: Clock,
      title: "Reliable Delivery",
      description: "Nationwide distribution with same-day delivery in major cities"
    }
  ];



  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Hospitality Services
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
              Comprehensive solutions designed to elevate guest experience and streamline operations for Kenya's hospitality sector
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center">
                <Package className="w-5 h-5 mr-2" />
                <span>8+ Service Categories</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center">
                <Star className="w-5 h-5 mr-2" />
                <span>98% Client Satisfaction</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex items-center gap-3 overflow-x-auto">
              <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === null
                      ? 'bg-emerald-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-emerald-50'
                  }`}
                >
                  All Services
                </button>
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-emerald-700 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-emerald-50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Description */}
      {selectedCategory && (
        <section className="bg-emerald-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-700 text-white rounded-lg p-3">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {serviceCategories.find(cat => cat.id === selectedCategory)?.name}
                </h3>
                <p className="text-gray-600">
                  {serviceCategories.find(cat => cat.id === selectedCategory)?.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceGrid category={selectedCategory || undefined} />
          
          {selectedCategory && (
            <div className="text-center mt-8">
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-emerald-700 hover:text-emerald-800 font-medium flex items-center justify-center mx-auto"
              >
                <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
                Back to all services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're more than just suppliers - we're your strategic hospitality partner
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                    <Icon className="w-8 h-8 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how we've helped Kenyan hospitality businesses thrive
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  {caseStudy.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {caseStudy.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Challenge</h4>
                    <p className="text-gray-600 text-sm">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Solution</h4>
                    <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.map((result, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Hospitality Business?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Get personalized recommendations and a custom quote tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Get Custom Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/about"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 border border-white/30 flex items-center justify-center"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;