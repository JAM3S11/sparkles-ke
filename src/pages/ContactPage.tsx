import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, User, Building, ArrowRight, Truck, Headphones } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    urgency: 'normal',
    message: ''
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are your delivery times?",
      answer: "Same-day delivery in Nairobi, next-day to major cities. We offer scheduled nationwide deliveries for remote locations."
    },
    {
      question: "Do you offer custom branding?",
      answer: "Yes! We provide full custom branding for amenities, packaging, and supplies with design support and quick turnaround."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, M-Pesa, credit cards, and offer 30-day credit terms for qualified clients."
    },
    {
      question: "Do you provide emergency supplies?",
      answer: "Yes, we have 24/7 emergency hotline for critical hospitality needs with priority delivery service."
    },
    {
      question: "Are your products eco-friendly?",
      answer: "We offer comprehensive eco-friendly options including biodegradable products and bulk dispensers to reduce waste."
    }
  ];

  const contactMethods = [
    {
      icon: Headphones,
      title: "Customer Support",
      description: "General inquiries and order support",
      contact: "+254 700 123 456",
      email: "support@hospitalitykenya.co.ke",
      hours: "Mon-Fri: 8AM-6PM"
    },
    {
      icon: Building,
      title: "Sales Team",
      description: "New accounts and bulk orders",
      contact: "+254 733 987 654",
      email: "sales@hospitalitykenya.co.ke",
      hours: "Mon-Fri: 8AM-6PM"
    },
    {
      icon: Truck,
      title: "Emergency Hotline",
      description: "Urgent supply needs",
      contact: "+254 733 999 888",
      email: "emergency@hospitalitykenya.co.ke",
      hours: "24/7 Available"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch With Our Team
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Have questions about our hospitality supplies? Ready to elevate your guest experience? Our expert team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>24/7 Emergency Support</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Quick Response Time</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Nationwide Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-xl p-8 border border-emerald-100 hover:shadow-xl transition-all duration-300">
                  <div className="bg-emerald-700 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <Phone className="w-4 h-4 mr-2 text-emerald-600" />
                      <span className="font-medium">{method.contact}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Mail className="w-4 h-4 mr-2 text-emerald-600" />
                      <span className="text-sm">{method.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="w-4 h-4 mr-2 text-emerald-600" />
                      <span>{method.hours}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Locations */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Hotel/Safari Lodge Name"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="+254 700 123 456"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">Select a service</option>
                      <option value="housekeeping">Housekeeping & Laundry</option>
                      <option value="kitchen">Food & Beverage Supplies</option>
                      <option value="amenities">Guest Amenities</option>
                      <option value="custom">Custom Solutions</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="normal">Normal (24-48 hours)</option>
                      <option value="urgent">Urgent (Same day)</option>
                      <option value="emergency">Emergency (Immediately)</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Tell us about your needs and how we can help..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Office Locations
              </h2>
              
              <div className="space-y-6">
                {/* Nairobi Headquarters */}
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-emerald-700">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Nairobi Headquarters
                  </h3>
                  <address className="text-gray-600 not-italic space-y-2">
                    <p className="flex items-start">
                      <MapPin className="w-5 h-5 mr-2 text-emerald-600 mt-0.5" />
                      <span>
                        Mombasa Road, Industrial Area<br />
                        Next to Sameer Business Park<br />
                        P.O. Box 12345-00100, Nairobi
                      </span>
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-emerald-600" />
                      +254 700 123 456
                    </p>
                    <p className="flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-emerald-600" />
                      nairobi@hospitalitykenya.co.ke
                    </p>
                  </address>
                </div>

                {/* Mombasa Office */}
                <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-700">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Mombasa Office
                  </h3>
                  <address className="text-gray-600 not-italic space-y-2">
                    <p className="flex items-start">
                      <MapPin className="w-5 h-5 mr-2 text-blue-600 mt-0.5" />
                      <span>
                        Nyali Road, Near City Mall<br />
                        P.O. Box 87654, Mombasa
                      </span>
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-blue-600" />
                      +254 711 234 567
                    </p>
                    <p className="flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-blue-600" />
                      mombasa@hospitalitykenya.co.ke
                    </p>
                  </address>
                </div>

                {/* Emergency Contact */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-red-900 mb-4">
                    Emergency Hotline
                  </h3>
                  <p className="text-red-700 font-medium mb-3">
                    For urgent supply needs outside business hours:
                  </p>
                  <p className="text-red-900 font-bold text-2xl mb-3">
                    +254 733 999 888
                  </p>
                  <p className="text-red-600 text-sm">
                    Available 24/7 for critical hospitality emergencies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left bg-gray-50 hover:bg-gray-100 rounded-lg p-6 transition-colors duration-200"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className={`transform transition-transform duration-200 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}>
                      <ArrowRight className="w-5 h-5 text-emerald-700 rotate-90" />
                    </div>
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="bg-white border-l-4 border-emerald-700 p-6 rounded-lg mt-2">
                    <p className="text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Response Promise */}
      <section className="bg-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            We Promise Quick Responses
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">
                &lt; 2 Hours
              </div>
              <div className="text-emerald-100 font-medium">
                Initial Response
              </div>
              <p className="text-emerald-200 text-sm mt-2">
                We acknowledge every inquiry quickly
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">
                &lt; 24 Hours
              </div>
              <div className="text-emerald-100 font-medium">
                Detailed Quote
              </div>
              <p className="text-emerald-200 text-sm mt-2">
                Comprehensive pricing and recommendations
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2">
                Same Day
              </div>
              <div className="text-emerald-100 font-medium">
                Nairobi Delivery
              </div>
              <p className="text-emerald-200 text-sm mt-2">
                Fast delivery when you need it most
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;