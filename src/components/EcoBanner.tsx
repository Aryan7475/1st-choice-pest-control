import React from 'react';
import { Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EcoBanner: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 md:p-10 shadow-lg text-white">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-black/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
                        <Leaf className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-heading font-bold text-white mb-1">
                            Go 100% Eco-Friendly
                        </h3>
                        <p className="text-green-50 font-medium">Safe for your children, pets, and the local ecosystem.</p>
                    </div>
                </div>
                <Link 
                    to="/contact-us"
                    className="group bg-white text-green-700 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                    Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    </div>
  );
};

export default EcoBanner;