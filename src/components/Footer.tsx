import React from 'react';
import { Link } from 'react-router-dom';
import { COMMON_PESTS, LOCATIONS, PHONE_MAIN } from '../constants';
import { Bug, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const midPoint = Math.ceil(COMMON_PESTS.length / 2);
  const col1 = COMMON_PESTS.slice(0, midPoint);
  const col2 = COMMON_PESTS.slice(midPoint);

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 mb-4">
                 <div className="bg-green-600 text-white p-1.5 rounded-lg">
                    <Bug size={20} />
                </div>
                <span className="text-xl font-heading font-black text-white">1st CHOICE</span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              We provide "total pest protection" with integrity. No contracts, just honest results. State-certified and fully insured in Central Wisconsin.
            </p>
            <div className="space-y-3 pt-2">
                 <a href={`tel:${PHONE_MAIN}`} className="flex items-center gap-3 text-white hover:text-green-400 transition-colors">
                    <Phone size={18} className="text-green-500" />
                    <span className="font-bold">{PHONE_MAIN}</span>
                 </a>
                 <a href="mailto:info@1stchoicepest.com" className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors">
                    <Mail size={18} className="text-green-500" />
                    <span className="text-sm">info@1stchoicepest.com</span>
                 </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-green-500 rounded-full"></span> Useful Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                  { name: "Contact Us", to: "/contact-us" },
                  { name: "Customer Portal", to: "#" },
                  { name: "Eco-Friendly Options", to: "/eco-friendly" },
                  { name: "Locations", to: "/about-us/locations" },
                  { name: "Our Story", to: "/about-us/our-story" },
              ].map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.to} className="hover:text-green-400 transition-colors flex items-center gap-2 group">
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-green-500" />
                        {link.name}
                    </Link>
                  </li>
              ))}
            </ul>
          </div>

          {/* Common Pests */}
          <div>
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-green-500 rounded-full"></span> Common Pests
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {[...col1, ...col2].map((pest: any, idx: any) => (
                     <Link 
                        key={idx} 
                        to={`/pest/${pest.toLowerCase().replace(/[\s&/]+/g, '-')}`} 
                        className="text-sm hover:text-green-400 transition-colors"
                     >
                        {pest}
                    </Link>
                ))}
            </div>
          </div>

          {/* Locations - Custom Scrollbar */}
          <div>
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-green-500 rounded-full"></span> Service Area
            </h3>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <ul className="space-y-3 text-xs text-slate-400 max-h-48 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-green-600 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-green-500">
                {LOCATIONS.map((loc: any, idx: any) => (
                    <li key={idx} className="flex gap-2">
                        <MapPin size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <span className="text-slate-300 font-semibold block">{loc.city}</span>
                            <span>{loc.street}</span>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-center items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} 1st Choice Pest Control LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
