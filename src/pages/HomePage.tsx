import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, TrendingUp, Award, Shield, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import ServiceGrid from '../components/ServiceGrid';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Kamau",
      position: "General Manager",
      company: "Serenity Hotel Nairobi",
      content: "Hospitality Kenya has been our trusted partner for over 5 years. Their quality products and reliable service have helped us maintain our 5-star standards.",
      rating: 5
    },
    {
      name: "Michael Ochieng",
      position: "Operations Director",
      company: "Maasai Mara Eco Lodge",
      content: "The eco-friendly amenities perfectly align with our sustainability values. Our guests love the biodegradable products, and the bulk dispensers have reduced waste significantly.",
      rating: 5
    },
    {
      name: "Grace Wanjiru",
      position: "Owner",
      company: "Coastal Beach Resort",
      content: "Exceptional service and quality products. The white-label laundry service has transformed our operations, saving us time and maintaining consistency.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Hotels & Lodges", description: "Trusted partner across Kenya" },
    { number: "98%", label: "Customer Satisfaction", description: "Consistently high ratings" },
    { number: "24/7", label: "Support Available", description: "Round-the-clock assistance" },
    { number: "10+", label: "Years Experience", description: "Industry expertise" }
  ];

  const capabilities = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All products meet international standards and are specifically tested for African hospitality conditions"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "From boutique hotels to large resorts, we provide flexible supply chains that grow with your business"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Same-day delivery in Nairobi, next-day to major cities, and scheduled nationwide deliveries"
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "NEMA approved, food-grade certified, and recognized for sustainable business practices"
    },
    {
      icon: CheckCircle,
      title: "Custom Branding",
      description: "Personalized amenities and supplies that showcase your unique brand identity"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All products meet international standards and are specifically tested for African hospitality conditions"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium Hospitality Supplies for Kenya's Finest Establishments
              </h1>
              <p className="text-xl text-emerald-100 mb-8">
                Elevate your guest experience with our comprehensive range of quality supplies, from housekeeping essentials to premium amenities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/services"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/contact"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 border border-white/30 flex items-center justify-center"
                >
                  Get Quote Now
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(0, 4).map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm text-emerald-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold">Trusted by Kenya's Leading Hospitality Brands</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Sarova Hotels", "Fairmont Kenya", "Tamarind Group", "Heritage Hotels", "Elephant Bedroom"].map((brand, index) => (
              <div key={index} className="text-lg font-semibold text-gray-700">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Hospitality Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run a successful hospitality business, all from one trusted partner
            </p>
          </div>
          
          <div className="mb-12">
            <ServiceGrid limit={6} />
          </div>
          
          <div className="text-center">
            <Link 
              to="/services"
              className="inline-flex items-center bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Leading Hotels Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Unmatched quality, reliability, and service excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="group p-6 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                  <div className="bg-emerald-100 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                    <Icon className="w-6 h-6 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from industry leaders who trust us with their hospitality needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-emerald-200 mb-4" />
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-emerald-600 font-medium">{testimonial.position}</div>
                  <div className="text-gray-600 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Hospitality Business?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied hotels, lodges, and resorts across Kenya who trust us for their supply needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/about"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 border border-white/30 flex items-center justify-center"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;