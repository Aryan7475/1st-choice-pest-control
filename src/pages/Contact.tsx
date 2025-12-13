import React from 'react';
import { Phone, MapPin, Mail, Send, CheckCircle2, Clock } from 'lucide-react';
import { PHONE_MAIN, PEST_LIST } from '../constants';
import EcoBanner from '../components/EcoBanner';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Banner */}
      <div className="bg-slate-900 text-white pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-600/5"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 tracking-tight">Contact Us</h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-green-300 font-bold uppercase text-sm tracking-wide">No Contracts Required</span>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 -mt-16 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Sidebar Info - Spans 4 columns */}
            <div className="lg:col-span-4 space-y-6">
                 
                 {/* Quick Contact Card */}
                 <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                    <h3 className="text-xl font-bold font-heading mb-6 text-slate-800">Contact Info</h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-green-50 p-3 rounded-2xl text-green-600">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-slate-400 text-xs uppercase tracking-wide mb-1">Main Office</p>
                                <a href={`tel:${PHONE_MAIN}`} className="text-xl font-bold text-slate-900 hover:text-green-600 transition-colors block">{PHONE_MAIN}</a>
                                <p className="text-xs text-slate-400 mt-1">Mon-Fri: 8am - 6pm</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-green-50 p-3 rounded-2xl text-green-600">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-slate-400 text-xs uppercase tracking-wide mb-1">Email Us</p>
                                <a href="mailto:info@1stchoicepest.com" className="text-slate-900 font-medium hover:text-green-600 break-all transition-colors">info@1stchoicepest.com</a>
                            </div>
                        </div>

                         <div className="flex items-start gap-4">
                            <div className="bg-green-50 p-3 rounded-2xl text-green-600">
                                <Clock size={24} />
                            </div>
                            <div>
                                <p className="font-bold text-slate-400 text-xs uppercase tracking-wide mb-1">Service Hours</p>
                                <p className="text-slate-900 font-medium">Fast Response</p>
                                <p className="text-xs text-slate-500 mt-1">Same or next day service often available.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Emergency Quote Card */}
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="relative z-10">
                        <h4 className="font-bold text-xl mb-2">Need a Quote Now?</h4>
                        <p className="text-green-100 text-sm mb-6 opacity-90">Call our dedicated quote line for immediate assistance.</p>
                        <a href="tel:9205365714" className="text-3xl font-black block hover:text-green-200 transition-colors mb-2">920-536-5714</a>
                        <div className="h-1 w-12 bg-white/30 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Main Form - Spans 8 columns */}
            <div className="lg:col-span-8">
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                    <div className="p-8 md:p-12">
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-800 mb-2">Send us a Message</h2>
                            <p className="text-slate-500">Fill out the form below and our team will get back to you shortly.</p>
                        </div>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Name <span className="text-red-500">*</span></label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 transition-all font-medium" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Phone <span className="text-red-500">*</span></label>
                                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 transition-all font-medium" placeholder="(555) 555-5555" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Email <span className="text-red-500">*</span></label>
                                    <input type="email" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 transition-all font-medium" placeholder="you@company.com" />
                                </div>
                                <div className="space-y-2">
                                     <label className="text-sm font-bold text-slate-700 ml-1">Contact Method</label>
                                     <div className="relative">
                                         <select className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 transition-all font-medium appearance-none">
                                            <option>Phone Call</option>
                                            <option>Text Message</option>
                                            <option>Email</option>
                                         </select>
                                         <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                         </div>
                                     </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Address</label>
                                <div className="grid grid-cols-1 gap-4">
                                    <input type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 transition-all font-medium" placeholder="Street Address" />
                                    <div className="grid grid-cols-3 gap-4">
                                        <input type="text" className="col-span-1 bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-green-500 focus:bg-white" placeholder="City" />
                                        <input type="text" className="col-span-1 bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-green-500 focus:bg-white" placeholder="State" defaultValue="WI" />
                                        <input type="text" className="col-span-1 bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-green-500 focus:bg-white" placeholder="Zip" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-slate-700 ml-1">What pests are you seeing?</label>
                                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {PEST_LIST.map(pest => (
                                            <label key={pest} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white hover:shadow-sm cursor-pointer transition-all border border-transparent hover:border-slate-100">
                                                <div className="relative flex items-center">
                                                    <input type="checkbox" className="peer w-5 h-5 border-2 border-slate-300 rounded-md checked:bg-green-600 checked:border-green-600 transition-colors appearance-none" />
                                                    <CheckCircle2 size={12} className="absolute text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none" />
                                                </div>
                                                <span className="text-sm font-medium text-slate-700">{pest}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">How can we help?</label>
                                <textarea className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 transition-all font-medium h-32 resize-none" placeholder="Please describe the issue in detail..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-slate-900 text-white font-bold text-lg py-4 rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform active:scale-[0.99] flex items-center justify-center gap-2">
                                <Send size={20} /> Send Message
                            </button>
                        </form>
                    </div>
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

export default Contact;