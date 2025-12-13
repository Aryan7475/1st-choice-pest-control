import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Star, Quote, ArrowRight, MapPin } from 'lucide-react';
import EcoBanner from '../components/EcoBanner';
import { LOCATIONS, PHONE_MAIN } from '../constants';

const OurStory: React.FC = () => {
  return (
    <div className="bg-slate-50">
      
      {/* Hero */}
      <div className="bg-slate-900 text-white pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
             <img 
                 src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80" 
                 alt="Our Team Working Together" 
                 className="w-full h-full object-cover opacity-20"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
             <h1 className="text-4xl md:text-6xl font-heading font-black mb-6">Our Story</h1>
             <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                A dream, a vision, and a desire to provide superior customer service with a family-friendly feel.
             </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
             <p className="text-xl font-medium text-slate-800 mb-6 leading-relaxed">
                At 1st Choice Pest Control, it all starts on the front lines, the face of our business, our technicians. Our technicians are state-certified with multiple certifications.
             </p>
             <div className="flex justify-center gap-6">
                 <Link to="/contact-us" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1">
                    Pest Inspections
                 </Link>
                 <a href={`tel:${PHONE_MAIN.replace(/-/g, '')}`} className="flex items-center gap-2 text-2xl font-black text-slate-900 hover:text-green-600 transition-colors">
                    {PHONE_MAIN}
                 </a>
             </div>
        </div>

        {/* Content & Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                    Established 2014
                </div>
                <h2 className="text-3xl font-heading font-bold text-slate-800">About Us</h2>
                <div className="prose prose-lg text-slate-600">
                    <p>
                        Like most businesses, we had a dream, a vision, and a desire. That will be my story. A dream to have a balanced work and family life, a vision to create a company focused on both customers and employees and a desire to be the best pest control company around.
                    </p>
                    <p>
                        In October 2014 our dream, vision, and desire became a reality with the start of our story. It all started with 1 man and 1 truck on a mission. Through his hard work and dedication, our business got off the ground and running. With passion and drive, we have been able to succeed and grow by providing superior customer service. Over the next 8 years, we were able to add to our family one by one while keeping the same dream, vision, and desire at our core.
                    </p>
                    <p>
                        Today, our team of technicians, sales representatives, managers, and owners comes together with a mission to provide and deliver superior customer service with a family-friendly feel.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <img 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80" 
                    alt="Technician working" 
                    className="rounded-2xl shadow-lg w-full h-64 object-cover" 
                />
                 <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" 
                    alt="Team handshake" 
                    className="rounded-2xl shadow-lg w-full h-64 object-cover mt-12" 
                />
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
             <div className="order-2 lg:order-1">
                 <img 
                    src="https://images.unsplash.com/photo-1532630571098-79e3d222b00d?auto=format&fit=crop&w=800&q=80" 
                    alt="Pest Control Truck Fleet" 
                    className="rounded-2xl shadow-xl w-full h-96 object-cover" 
                />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl font-heading font-bold text-slate-800">Our Technicians Are The Backbone</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                    At 1st Choice Pest Control, it all starts on the front lines, the face of our business, our technicians.
                    Our technicians are state certified with multiple certifications. Additionally, we have 2 of less than 150 Master Technicians in the state of Wisconsin. Our dedicated technicians are the backbone of what we do.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                    They ensure that our vision and our passion are delivered to you, our customers, by offering the best possible pest solutions and customer service you will find. We were meant to be a family and a team. Our teamwork has fulfilled our dream and has taught us to never stop dreaming.
                </p>
                <Link to="/contact-us" className="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-700 hover:underline text-lg">
                    Contact Us Now <ArrowRight size={20} />
                </Link>
            </div>
        </div>

        <EcoBanner />

        {/* Locations List */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mt-16 text-center border border-slate-100">
            <h3 className="text-2xl font-bold mb-8 text-slate-800">Click on a location below & scroll down to read our reviews!</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {LOCATIONS.filter(l => l.street !== "Coming Soon").map((loc, idx) => (
                    <a key={idx} href="#" className="flex items-center justify-center gap-2 p-4 rounded-xl border border-slate-200 hover:border-green-500 hover:bg-green-50 transition-all font-bold text-slate-700 hover:text-green-700">
                        <MapPin size={18} /> {loc.city} Branch
                    </a>
                ))}
            </div>
        </div>

        {/* Award Section */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-10 md:p-16 relative overflow-hidden text-center">
             <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 rounded-full blur-[100px]"></div>
             <div className="relative z-10 max-w-4xl mx-auto">
                 <div className="inline-block p-4 bg-yellow-400 rounded-full text-yellow-900 mb-8">
                    <Award size={48} />
                 </div>
                 <h2 className="text-2xl md:text-4xl font-heading font-bold mb-6">
                    1st Choice Pest Control Honored as a Highest Rated Company in Wisconsin by Top Rated Local®
                 </h2>
                 <p className="text-slate-300 mb-8 italic">
                    APRIL 12, 2019 — 1st Choice Pest Control is excited to announce that they have been honored on the list of highest rated companies in Wisconsin by Top Rated Local®.
                 </p>
                 <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm relative">
                    <Quote className="absolute top-4 left-4 text-yellow-400 opacity-50" size={32} />
                    <p className="text-lg text-white font-medium mb-4 relative z-10">
                        “Winning a Top Rated Local award is a true acknowledgment of exceptional customer service, as it directly reflects the opinions of the customers. I congratulate 1st Choice Pest Control on this significant achievement.”
                    </p>
                    <p className="text-yellow-400 font-bold">— JB Kellogg, co-founder of Top Rated Local</p>
                 </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default OurStory;