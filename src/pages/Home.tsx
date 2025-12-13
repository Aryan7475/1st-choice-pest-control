import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Award, Leaf, ArrowRight, Check, Star, Phone } from 'lucide-react';
import EcoBanner from '../components/EcoBanner';
import { PEST_LIST } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
        {/* Modern Hero Section */}
        <div className="relative bg-slate-900 min-h-[85vh] flex items-center justify-center pt-40 pb-24">
             {/* Background Image with Overlay */}
             <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80" 
                    alt="Clean Modern Home Exterior" 
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/60"></div>
                
                {/* Abstract Blobs */}
                <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-green-600/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[80px]"></div>
             </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Serving Central Wisconsin
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white mb-8 leading-[1.1] tracking-tight">
                        Defend Your <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Sanctuary.</span>
                    </h1>
                    
                    <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed mx-auto md:mx-0">
                        Professional, eco-friendly pest control without the binding contracts. 
                        We bring peace of mind back to your home and business.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                        <Link 
                            to="/contact-us" 
                            className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg shadow-green-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Get Protected
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link 
                            to="/bundle-save" 
                            className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white text-lg font-bold py-4 px-10 rounded-full transition-all transform hover:-translate-y-1 flex items-center justify-center"
                        >
                            View Plans
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/* Highlight Section (Boxelder) - Moved Up */}
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100">
                    <div className="grid md:grid-cols-2">
                        <div className="p-12 md:p-16 flex flex-col justify-center">
                            <div className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 font-bold text-xs uppercase tracking-wider mb-6 w-fit">
                                Seasonal Alert
                            </div>
                            <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900 mb-6">
                                Boxelder Bugs Are Moving In.
                            </h2>
                            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                                As the seasons change, these pests seek warmth in your walls. 
                                Our specialized exterior barrier treatment stops them before they make themselves at home.
                            </p>
                            
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Check size={14} /></div>
                                    Prevents staining on fabrics
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Check size={14} /></div>
                                    Eco-friendly perimeter defense
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Check size={14} /></div>
                                    Long-lasting protection
                                </li>
                            </ul>

                            <Link 
                                to="/pest/boxelder-bugs" 
                                className="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-700 hover:underline text-lg group w-fit"
                            >
                                Learn About Treatment 
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="relative h-96 md:h-auto">
                            <img 
                                src="https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?auto=format&fit=crop&w=1000&q=80" 
                                alt="Autumn Maple Leaves" 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg max-w-xs">
                                <p className="text-slate-800 font-bold text-sm">Targeting Fall Invaders</p>
                                <p className="text-slate-500 text-xs">Boxelders, Beetles & more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Pests Grid */}
        <section className="py-24 bg-white relative">
             <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
             
             <div className="container mx-auto px-6 text-center">
                <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-3 block">Comprehensive Coverage</span>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-slate-900 mb-16">
                    What's Bugging You?
                </h2>
                
                <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                    {PEST_LIST.map(pest => (
                        <Link 
                            key={pest} 
                            to={`/pest/${pest.toLowerCase().replace(/[\s&/]+/g, '-')}`}
                            className="px-6 py-3 rounded-full border border-slate-200 text-slate-600 hover:border-green-500 hover:bg-green-50 hover:text-green-700 transition-all font-semibold text-sm"
                        >
                            {pest}
                        </Link>
                    ))}
                </div>
            </div>
        </section>

        {/* Features & Trust Section (Moved from top) */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
             <div className="container mx-auto px-6">
                 {/* Trust Indicators */}
                 <div className="flex flex-col sm:flex-row items-center gap-8 text-slate-600 text-sm font-bold justify-center mb-16 uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                            <Star className="text-yellow-400 fill-yellow-400" size={24} />
                            <span>5-Star Rated Service</span>
                        </div>
                        <div className="w-px h-8 bg-slate-300 hidden sm:block"></div>
                        <div className="flex items-center gap-2">
                            <Shield className="text-green-600" size={24} />
                            <span>Licensed & Insured</span>
                        </div>
                  </div>

                 {/* Features Grid */}
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {[
                        { icon: Shield, title: "No Contracts", desc: "We earn your trust with every visit. No long-term lock-ins.", color: "text-blue-500" },
                        { icon: Leaf, title: "Eco-Friendly", desc: "Safe treatments for your kids, pets, and the planet.", color: "text-green-500" },
                        { icon: Award, title: "Certified Pros", desc: "State-licensed experts who know Wisconsin pests.", color: "text-purple-500" },
                        { icon: Clock, title: "Fast Response", desc: "Same-day or next-day service often available.", color: "text-red-500" }
                    ].map((feature, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 flex flex-col items-center text-center">
                            <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 ${feature.color}`}>
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
                        </div>
                    ))}
                 </div>

                 {/* Eco Banner */}
                 <EcoBanner />
             </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
             <div className="absolute inset-0 bg-green-600/10"></div>
             <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-green-500/20 rounded-full blur-[100px]"></div>
             <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
                    Ready to Reclaim Your Space?
                </h2>
                <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
                    Get a customized protection plan that fits your needs and budget. 
                    Fast quotes, no pressure.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                     <Link to="/contact-us" className="bg-white text-slate-900 text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:bg-green-50 transition-all transform hover:-translate-y-1">
                        Get a Free Quote
                    </Link>
                    <a href="tel:9202149917" className="group flex items-center gap-3 px-8 py-4 rounded-full border border-slate-700 hover:border-green-500 transition-colors">
                        <div className="bg-green-600 p-2 rounded-full text-white group-hover:scale-110 transition-transform">
                            <Phone size={20} />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-slate-400 uppercase tracking-wide font-bold">Call 24/7</p>
                            <p className="text-xl font-bold text-white">920-214-9917</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Home;