import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Factory, Utensils, Stethoscope, Store, Warehouse } from 'lucide-react';
import { PHONE_QUOTE } from '../constants';

const Commercial: React.FC = () => {
  const industries = [
    { name: "Hospitality", icon: Building2 },
    { name: "Food Service", icon: Utensils },
    { name: "Healthcare", icon: Stethoscope },
    { name: "Retail", icon: Store },
    { name: "Office Buildings", icon: Building2 },
    { name: "Warehousing", icon: Warehouse },
  ];

  return (
    <div className="bg-white">
      <div className="bg-slate-800 text-white pt-40 pb-20 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
         <div className="relative z-10 container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Commercial Pest Control</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-8">
                Protect your reputation and your bottom line with professional pest management solutions tailored for your business.
            </p>
            <Link to="/contact-us" className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded transition-transform hover:-translate-y-1 inline-block">
                Schedule Consultation
            </Link>
         </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-800 mb-6">Customized Solutions for Business</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
                Pests can devastate a business—ruining stock, violating health codes, and destroying your hard-earned reputation. 
                At 1st Choice Pest Control, we don't just spray; we implement Integrated Pest Management (IPM) strategies to solve the root cause.
            </p>
        </div>

        {/* 4 Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
                { title: "Inspection", text: "Thorough assessment of facility, entry points, and breeding grounds." },
                { title: "Custom Plan", text: "Strategy addressing current issues & preventing future infestations." },
                { title: "Implementation", text: "Technicians implement plan using modern, safe techniques." },
                { title: "Monitoring", text: "Regular follow-ups and documentation for compliance." }
            ].map((step, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-lg border-t-4 border-green-600 shadow-sm text-center">
                    <div className="w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                        {idx + 1}
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-slate-800">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.text}</p>
                </div>
            ))}
        </div>

        {/* Industries */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {industries.map((ind, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center group">
                        <div className="bg-slate-700 p-4 rounded-full mb-4 group-hover:bg-green-600 transition-colors">
                            <ind.icon size={32} />
                        </div>
                        <h3 className="font-bold text-lg">{ind.name}</h3>
                    </div>
                ))}
            </div>
        </div>

        {/* Features / Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                 <h2 className="text-3xl font-heading font-bold text-slate-800 mb-6">Why Partner With Us?</h2>
                 <ul className="space-y-4">
                    {[
                        "Tailored Pest Control Solutions",
                        "Experienced & Certified Technicians",
                        "Eco-Friendly and Safe Methods",
                        "Fast and Discreet Service",
                        "Digital Documentation for Audits"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-slate-700 font-medium text-lg">{item}</span>
                        </li>
                    ))}
                 </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-xl border border-green-100 text-center">
                 <h3 className="text-2xl font-bold text-green-800 mb-4">Ready for a pest-free facility?</h3>
                 <p className="text-green-700 mb-6">Take the first step towards a cleaner, safer environment.</p>
                 <a href={`tel:${PHONE_QUOTE.replace(/-/g, '')}`} className="block w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition mb-4">
                    Call {PHONE_QUOTE}
                 </a>
                 <Link to="/contact-us" className="block w-full bg-white border-2 border-green-600 text-green-700 font-bold py-4 rounded-lg hover:bg-green-50 transition">
                    Request Online Quote
                 </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Commercial;