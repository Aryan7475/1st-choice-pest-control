import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowRight, Bug } from 'lucide-react';
import { EXTENDED_LOCATIONS, PEST_LIST } from '../constants';
import EcoBanner from '../components/EcoBanner';

const Locations: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero */}
      <div className="bg-slate-900 text-white pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-600/5"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
             <h1 className="text-4xl md:text-6xl font-heading font-black mb-6">Our Locations</h1>
             <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                1st Choice Pest Control Locations
             </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar Services - Spans 3 columns */}
            <div className="lg:col-span-3">
                <div className="sticky top-32">
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm">
                        <h3 className="text-xl font-bold font-heading text-slate-800 mb-6 flex items-center gap-2">
                             <Bug className="text-green-600" size={24} /> Our Services
                        </h3>
                        <ul className="space-y-2">
                            {PEST_LIST.sort().map((pest, idx) => (
                                <li key={idx}>
                                    <Link 
                                        to={`/pest/${pest.toLowerCase().replace(/[\s&/]+/g, '-')}`}
                                        className="block px-3 py-2 rounded-lg hover:bg-white hover:text-green-600 hover:shadow-sm transition-all text-slate-600 font-medium text-sm border border-transparent hover:border-slate-100"
                                    >
                                        {pest}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Main Content - Spans 9 columns */}
            <div className="lg:col-span-9">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {EXTENDED_LOCATIONS.map((loc, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                            <div className="p-8 flex-grow">
                                <h2 className="text-2xl font-bold font-heading text-slate-800 mb-6">{loc.city}, {loc.state} Branch</h2>
                                
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-800">{loc.street}</p>
                                            {loc.zip && <p className="text-slate-600">{loc.city} {loc.state} {loc.zip}</p>}
                                        </div>
                                    </div>

                                    {loc.phone && (
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                                                <Phone size={20} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wide">Phone</p>
                                                <a href={`tel:${loc.phone}`} className="text-lg font-bold text-slate-800 hover:text-green-600 transition-colors">{loc.phone}</a>
                                            </div>
                                        </div>
                                    )}

                                    {!loc.comingSoon && (
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                                                <Clock size={20} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wide">Office Hours</p>
                                                <p className="text-slate-600 text-sm font-medium">Mon - Fri: 8:00 AM - 5:00 PM</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            {!loc.comingSoon && (
                                <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex flex-col gap-3">
                                    <Link to={`/contact-us?location=${loc.city}`} className="text-slate-600 hover:text-green-600 font-bold text-sm flex items-center gap-2 group">
                                        Learn More About This Location <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    {loc.reviewsText && (
                                        <Link to="#" className="text-green-600 hover:text-green-700 font-bold text-sm flex items-center gap-2 group">
                                            {loc.reviewsText} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    )}
                                </div>
                            )}
                            
                            {loc.comingSoon && (
                                <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 text-center">
                                    <span className="inline-block px-4 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold uppercase tracking-wider">Coming Soon</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 mb-8 text-center bg-slate-900 rounded-3xl p-10 text-white">
                    <h2 className="text-3xl font-heading font-bold mb-6">Need Pest Control in Your Area?</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link to="/contact-us" className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform hover:-translate-y-1">
                            Contact Us Now
                        </Link>
                        <a href="https://forms.gle/ExternalQuoteLink" target="_blank" rel="noreferrer" className="bg-white text-slate-900 hover:bg-slate-100 font-bold py-4 px-10 rounded-full shadow-lg transition-transform hover:-translate-y-1">
                            Request A Quote
                        </a>
                    </div>
                </div>

                <EcoBanner />

            </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;