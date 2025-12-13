import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PEST_DETAILS, PHONE_QUOTE } from '../constants';
import EcoBanner from '../components/EcoBanner';
import { CheckCircle, AlertTriangle, ShieldCheck, Bug, Info, ClipboardList, MapPin } from 'lucide-react';

const PestDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Logic to find pest data, fallback to generic if not explicitly defined
  const pestId = id || 'ants';
  // Check if we have specific data, otherwise use generic but override title
  const data = PEST_DETAILS[pestId] || { 
    ...PEST_DETAILS['generic'], 
    name: id?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + " Control" 
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-slate-900 h-96 md:h-[28rem] overflow-hidden">
        <img 
            src={data.image} 
            alt={data.name} 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 container mx-auto pt-24">
            <div className="inline-block px-3 py-1 mb-4 border border-green-500/50 rounded-full bg-green-500/20 text-green-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                Professional Pest Control
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4 leading-tight">{data.name}</h1>
            <p className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl">Expert protection for your home and family in Central Wisconsin.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-16">
            
            {/* Intro & Overview */}
            <section>
                <h2 className="text-3xl font-bold font-heading text-slate-800 mb-6">Protect Your Home from {data.name.replace(' Control', '')}</h2>
                <div className="prose prose-lg text-slate-600 mb-8">
                    {data.introContent ? (
                        data.introContent.map((paragraph, i) => <p key={i} className="mb-4">{paragraph}</p>)
                    ) : (
                        <p>{data.description}</p>
                    )}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact-us" className="inline-flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-red-900/20 transition-all transform hover:-translate-y-1">
                        Schedule Inspection
                    </Link>
                    <a href={`tel:${PHONE_QUOTE.replace(/-/g, '')}`} className="inline-flex justify-center items-center gap-2 bg-white border-2 border-slate-200 hover:border-green-500 text-slate-700 hover:text-green-600 font-bold py-3 px-8 rounded-full transition-all">
                        Call {PHONE_QUOTE}
                    </a>
                </div>
            </section>

            <EcoBanner />

            {/* Identification & Behavior */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="bg-slate-50 p-6 border-b border-slate-100">
                     <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <Info className="text-blue-500" /> Identification & Behavior
                    </h3>
                </div>
                <div className="p-8 grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-slate-900 mb-3 uppercase text-xs tracking-wider">Appearance</h4>
                        <p className="text-slate-600 leading-relaxed">{data.appearance}</p>
                    </div>
                    <div>
                         <h4 className="font-bold text-slate-900 mb-3 uppercase text-xs tracking-wider">Habits</h4>
                         <ul className="space-y-2">
                            {data.behavior.map((b, i) => (
                                <li key={i} className="text-slate-600 flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                    <span className="leading-relaxed">{b}</span>
                                </li>
                            ))}
                         </ul>
                    </div>
                </div>
            </section>

            {/* Common Types (Conditional) */}
            {data.types && (
                <section>
                     <h3 className="text-2xl font-bold font-heading text-slate-800 mb-8 flex items-center gap-2">
                        <Bug className="text-green-600" /> Common Types
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.types.map((type, idx) => (
                            <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-green-200 transition-colors">
                                <h4 className="font-bold text-lg text-slate-800 mb-2">{type.name}</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">{type.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Service Process */}
            <section>
                <h3 className="text-2xl font-bold font-heading text-slate-800 mb-8 flex items-center gap-2">
                    <ClipboardList className="text-green-600" /> Our Treatment Process
                </h3>
                <div className="space-y-6">
                    {data.treatmentSteps.map((step, index) => (
                        <div key={index} className="flex gap-6 group">
                            <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 group-hover:bg-green-600 transition-all duration-300">
                                {index + 1}
                            </div>
                            <div className="pt-2">
                                <h4 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Prevention Tips (Conditional) */}
            {data.preventionTips && (
                <section className="bg-green-50 rounded-2xl p-8 border border-green-100">
                    <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-2">
                        <ShieldCheck className="text-green-600" /> Prevention Tips
                    </h3>
                    <ul className="grid gap-4">
                        {data.preventionTips.map((tip, idx) => (
                            <li key={idx} className="flex items-start gap-3 bg-white/50 p-3 rounded-lg">
                                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                                <span className="text-green-900 text-sm font-medium leading-relaxed">{tip}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Why Choose Us */}
             <section className="bg-slate-900 rounded-2xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-heading mb-8">Why Choose 1st Choice?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><CheckCircle size={20} /></div>
                            <span className="font-bold">Experienced Technicians</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><CheckCircle size={20} /></div>
                            <span className="font-bold">No Contracts Required</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><CheckCircle size={20} /></div>
                            <span className="font-bold">Eco-Friendly Options</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><CheckCircle size={20} /></div>
                            <span className="font-bold">Satisfaction Guaranteed</span>
                        </div>
                    </div>
                </div>
            </section>

             {/* Bottom CTA */}
            <div className="text-center py-10 border-t border-slate-200">
                <h3 className="text-3xl font-heading font-black text-slate-900 mb-4">Need Professional Help?</h3>
                <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">Don't let pests take over your sanctuary. Get a free, no-obligation quote today.</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                     <a 
                        href="https://forms.gle/ExternalQuoteLink" // Placeholder
                        target="_blank"
                        rel="noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-4 rounded-full font-bold shadow-xl shadow-green-900/10 transition-all transform hover:-translate-y-1"
                     >
                        Request a Quote
                     </a>
                     <div className="flex items-center gap-3 text-slate-700 px-6">
                        <span className="text-sm font-bold uppercase tracking-wide text-slate-400">Or Call</span>
                        <a href={`tel:${PHONE_QUOTE.replace(/-/g, '')}`} className="text-2xl font-black text-slate-900 hover:text-green-600 transition-colors">
                            {PHONE_QUOTE}
                        </a>
                     </div>
                </div>
            </div>

        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
            <div className="sticky top-36">
                <div className="bg-white shadow-2xl shadow-slate-200/50 rounded-2xl overflow-hidden border border-slate-100">
                    
                    {/* Free Quote Section */}
                    <div className="p-8 pb-6">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold font-heading text-slate-800">Get A Free Quote</h3>
                            <p className="text-sm text-slate-500 mt-1">Fast response • No obligation</p>
                        </div>
                        
                        <div className="space-y-4">
                            <a href={`tel:${PHONE_QUOTE.replace(/-/g, '')}`} className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-4 rounded-xl hover:bg-slate-800 transition-all transform active:scale-95 font-bold shadow-lg">
                                <span className="uppercase text-xs tracking-wider opacity-70">Call</span> {PHONE_QUOTE}
                            </a>
                            <Link to="/contact-us" className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-4 rounded-xl hover:bg-green-700 transition-all transform active:scale-95 font-bold shadow-lg shadow-green-900/10">
                                Message Us Online
                            </Link>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-100">
                            <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                                <h4 className="font-bold text-sm mb-2 text-red-800 flex items-center gap-2">
                                    <AlertTriangle size={16} /> Multi-Service Discounts
                                </h4>
                                <p className="text-xs text-red-700 leading-relaxed mb-3">
                                    Bundle {data.name.replace(' Control', '')} control with other services like Rodent or Mosquito protection and save big!
                                </p>
                                <Link to="/bundle-save" className="text-xs text-white bg-red-600 px-3 py-1.5 rounded-lg font-bold hover:bg-red-700 inline-block transition-colors">View Bundles</Link>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-slate-200 mx-8"></div>

                    {/* Service Area Section - Merged */}
                    <div className="p-8 pt-6 bg-slate-50/50">
                        <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <MapPin className="text-green-600" size={20} /> Service Area
                        </h4>
                        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                            We proudly serve Central Wisconsin including Neenah, Oshkosh, Stevens Point, and surrounding areas.
                        </p>
                        <Link to="/about-us/locations" className="text-sm font-bold text-green-700 hover:text-green-800 flex items-center gap-1 group">
                            View all locations <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </Link>
                    </div>

                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default PestDetail;