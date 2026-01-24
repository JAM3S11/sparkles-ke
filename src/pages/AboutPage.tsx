import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, MapPin, Heart, Target, ArrowRight, CheckCircle, Globe, Shield, Building, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Hotels & Lodges', description: 'Across Kenya' },
    { number: '10+', label: 'Years Experience', description: 'Industry leadership' },
    { number: '24/7', label: 'Support Available', description: 'Round-the-clock service' },
    { number: '98%', label: 'Client Retention', description: 'Long-term partnerships' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize our clients\' needs and build lasting partnerships based on trust and reliability.',
      color: 'bg-red-100 text-red-700'
    },
    {
      icon: Target,
      title: 'Quality Assured',
      description: 'All our products meet international standards and are specifically tested for the African hospitality market.',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: Globe,
      title: 'Local Expertise',
      description: 'Deep understanding of Kenya\'s hospitality sector with solutions designed for local conditions.',
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: Award,
      title: 'Excellence Driven',
      description: 'Continuous improvement and innovation in everything we do to serve you better.',
      color: 'bg-purple-100 text-purple-700'
    }
  ];

  const team = [
    {
      name: "David Mwangi",
      position: "Founder & CEO",
      bio: "Former hotel operations manager with 15+ years in hospitality. Passionate about improving Kenya's tourism infrastructure.",
      image: "CEO"
    },
    {
      name: "Grace Kinyua",
      position: "Operations Director",
      bio: "Supply chain expert ensuring seamless delivery across Kenya's 47 counties. Focus on efficiency and reliability.",
      image: "Operations"
    },
    {
      name: "Michael Ochieng",
      position: "Business Development",
      bio: "Hospitality specialist helping clients find the perfect solutions for their unique business needs.",
      image: "Business"
    },
    {
      name: "Sarah Kamau",
      position: "Customer Experience",
      bio: "Dedicated to ensuring every client receives exceptional service and support throughout their partnership.",
      image: "Customer"
    }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Started with a small warehouse in Nairobi and a vision to transform hospitality supplies.',
      milestone: true
    },
    {
      year: '2016',
      title: 'First Major Client',
      description: 'Partnered with Nairobi\'s leading hotel chain, establishing our reputation for quality.',
      milestone: false
    },
    {
      year: '2018',
      title: 'Expansion to Coast',
      description: 'Opened Mombasa distribution center to serve coastal hospitality businesses.',
      milestone: false
    },
    {
      year: '2020',
      title: 'Eco-Friendly Initiative',
      description: 'Launched sustainable product line in response to market demand.',
      milestone: true
    },
    {
      year: '2022',
      title: 'National Coverage',
      description: 'Achieved nationwide delivery with centers in Kisumu and Eldoret.',
      milestone: false
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as Kenya\'s premier hospitality supply partner with 500+ clients.',
      milestone: true
    }
  ];

  const certifications = [
    { name: "NEMA Certified", description: "National Environment Management Authority approved" },
    { name: "ISO 9001:2015", description: "Quality Management Systems Certified" },
    { name: "Food Grade Certified", description: "Safe for food service environments" },
    { name: "Kenya Bureau of Standards", description: "KEBS compliant products" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg inline-block px-4 py-2 mb-6">
                <span className="text-sm font-semibold">Since 2014</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Kenya's Trusted Hospitality Partner
              </h1>
              <p className="text-xl text-emerald-100 mb-8">
                Transforming Kenya's hospitality sector with premium supplies, exceptional service, and unwavering commitment to excellence.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>500+ Satisfied Clients</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  <span>Certified Quality</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  <span>Nationwide Service</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-emerald-100 font-medium">{stat.label}</div>
                  <div className="text-xs text-emerald-200">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Journey to Excellence
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Hospitality Kenya was born from a simple yet powerful observation: Kenya's vibrant tourism and hospitality sector deserved better - better products, better service, and better understanding of local needs.
                </p>
                <p>
                  What started in 2014 as a small operation with a big vision has grown into Kenya's premier hospitality supply partner. Today, we serve over 500 hotels, lodges, and resorts across the country, from the bustling streets of Nairobi to the pristine beaches of Mombasa and the wild beauty of the Maasai Mara.
                </p>
                <p>
                  Our success is built on a foundation of deep industry knowledge, unwavering commitment to quality, and genuine partnerships with our clients. We don't just supply products - we deliver solutions that help our clients exceed guest expectations and achieve their business goals.
                </p>
              </div>
              <div className="mt-8 p-6 bg-emerald-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-emerald-700" />
                  Proudly Kenyan, Globally Standard
                </h3>
                <p className="text-gray-700">
                  Based in Nairobi with strategic distribution centers nationwide, we combine local expertise with international quality standards to deliver unmatched service.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <Building className="w-20 h-20 text-emerald-700 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    10+ Years
                  </div>
                  <div className="text-gray-600">
                    of trusted partnership with Kenya's hospitality industry
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey of Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped our path to becoming Kenya's hospitality supply leader
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-emerald-200"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 pr-8 ${index % 2 === 0 ? 'text-right' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-2xl font-bold text-emerald-700 mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center z-10">
                  {item.milestone ? (
                    <Star className="w-6 h-6 text-white" />
                  ) : (
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  )}
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions and actions every day
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group text-center">
                  <div className={`rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform ${value.color}`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to serving Kenya's hospitality industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-12 h-12 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-emerald-600 font-semibold mb-4">{member.position}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quality & Compliance
            </h2>
            <p className="text-xl text-gray-600">
              Certified and recognized by leading industry authorities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 text-center hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                <Award className="w-12 h-12 text-emerald-700 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Hospitality Kenya Difference?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of leading hotels, lodges, and resorts that trust us for their hospitality supply needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/services"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 border border-white/30 flex items-center justify-center"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;