import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, ShieldCheck, Tag } from 'lucide-react';
import { BUNDLES, PHONE_QUOTE } from '../constants';
import EcoBanner from '../components/EcoBanner';

const BundleSave: React.FC = () => {
  const [openDetails, setOpenDetails] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setOpenDetails(openDetails === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 text-white pt-40 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 to-slate-900 z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="relative z-10 container mx-auto px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold tracking-wide uppercase mb-6 backdrop-blur-sm">
                <Tag size={14} /> Seasonal Savings
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black mb-6">Bundles</h1>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto px-4 text-slate-300 font-light">
                Get started with one of our protection plans today.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-20">
            {BUNDLES.map((bundle: any, index: any) => (
                <div key={index} className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 overflow-hidden border border-slate-100 flex flex-col hover:border-green-300 transition-all duration-300 group">
                    {/* Card Header */}
                    <div className="p-8 bg-white border-b border-slate-50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-red-50 text-red-600 text-xs font-bold px-4 py-2 rounded-bl-2xl">
                           AVG. SAVINGS <span className="text-lg ml-1">{bundle.savings}</span>
                        </div>
                        
                        <h3 className="text-2xl font-black font-heading text-slate-800 mb-6 pr-24">{bundle.title}</h3>
                        
                        <div className="flex flex-wrap gap-3">
                            {bundle.services.map((s: any, i: any) => (
                                <div key={i} className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl">
                                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-green-600">
                                        <s.icon size={16} />
                                    </div>
                                    <span className="font-bold text-slate-700 text-sm">{s.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-8 flex-grow bg-slate-50/30">
                         {/* High Level Summary */}
                        <div className="space-y-4 mb-8">
                             {bundle.details.map((d: any, i: any) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-bold text-slate-700 text-sm">{d.service.split(':')[1] || d.service}</p>
                                    </div>
                                </div>
                             ))}
                        </div>

                        {/* Collapsible Details */}
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openDetails === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-inner mb-6 space-y-6">
                                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-100 pb-2">Plan Details</h4>
                                {bundle.details.map((detail: any, idx: any) => (
                                    <div key={idx} className="relative pl-4 border-l-2 border-green-200">
                                        <p className="font-bold text-slate-800 text-sm mb-1">{detail.service}</p>
                                        <p className="text-slate-500 text-sm leading-relaxed whitespace-pre-line">
                                            {detail.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <button 
                            onClick={() => toggleDetails(index)}
                            className="w-full flex justify-center items-center gap-2 text-slate-500 hover:text-green-600 font-bold text-sm transition-colors py-2"
                        >
                            {openDetails === index ? 'Hide Info' : 'View Plan Details'}
                            {openDetails === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                    </div>

                    {/* Card Footer */}
                    <div className="p-6 bg-white border-t border-slate-100">
                        <a 
                            href={`tel:${PHONE_QUOTE.replace(/-/g, '')}`} 
                            className="flex items-center justify-center w-full bg-slate-900 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-green-900/20 transition-all transform group-hover:-translate-y-1"
                        >
                            Save Today
                        </a>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-16 text-center bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-slate-100">
             <h2 className="text-3xl font-heading font-black text-slate-800 mb-12">Why Bundle?</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left max-w-5xl mx-auto">
                <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600">
                         <ShieldCheck size={32} />
                    </div>
                    <h3 className="font-bold text-lg text-slate-800">Comprehensive Coverage</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Eliminate overlapping pests with one unified strategy. Don't let pests play tag-team on your home.</p>
                </div>
                 <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                         <Tag size={32} />
                    </div>
                    <h3 className="font-bold text-lg text-slate-800">Cost Effective</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Save hundreds annually compared to individual emergency services. Proactive care is cheaper than reactive repair.</p>
                </div>
                 <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600">
                         <Check size={32} />
                    </div>
                    <h3 className="font-bold text-lg text-slate-800">Proactive Protection</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Prevent infestations before they happen with regular monitoring. Peace of mind all year round.</p>
                </div>
             </div>
        </div>

        <div className="mt-16">
            <EcoBanner />
        </div>
      </div>
    </div>
  );
};

// Simple Icon component for reuse
const CheckCircleIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export default BundleSave;
