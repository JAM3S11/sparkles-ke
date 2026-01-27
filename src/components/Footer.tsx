import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Sparkles Kenya
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Your trusted partner for premium hospitality supplies across Kenya. We deliver excellence from industrial detergents to luxury amenities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start group">
                <div className="bg-amber-500/20 p-3 rounded-lg group-hover:bg-amber-500/30 transition-colors mr-3">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Nairobi HQ</div>
                  <div className="text-gray-400 text-sm">Nationwide Service</div>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-amber-500/20 p-3 rounded-lg group-hover:bg-amber-500/30 transition-colors mr-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">+254 700 123 456</div>
                  <div className="text-gray-400 text-sm">24/7 Emergency</div>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-amber-500/20 p-3 rounded-lg group-hover:bg-amber-500/30 transition-colors mr-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Quick Response</div>
                  <div className="text-gray-400 text-sm">Within 2 hours</div>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-amber-500/20 p-3 rounded-lg group-hover:bg-amber-500/30 transition-colors mr-3">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Business Hours</div>
                  <div className="text-gray-400 text-sm">Mon-Sat 8AM-6PM</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="flex items-center text-gray-300 hover:text-amber-400 transition-all duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center text-gray-300 hover:text-amber-400 transition-all duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center text-gray-300 hover:text-amber-400 transition-all duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Get Quote
                </Link>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-300 hover:text-amber-400 transition-all duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Emergency Support
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-400">Services</h4>
            <ul className="space-y-3 mb-6">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Housekeeping & Laundry</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Food & Beverage</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Guest Amenities</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Custom Solutions</a></li>
            </ul>
            
            <div>
              <h5 className="text-sm font-semibold mb-3 text-amber-400">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="bg-gray-700 hover:bg-amber-500 p-2 rounded-lg transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-700 hover:bg-amber-500 p-2 rounded-lg transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-700 hover:bg-amber-500 p-2 rounded-lg transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} Sparkles Kenya. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;