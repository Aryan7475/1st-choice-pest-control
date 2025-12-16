import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Facebook, Youtube, Menu, X, ChevronDown, Bug, Shield, Info, MapPin } from 'lucide-react';
import { PHONE_MAIN, PEST_LIST, PREVENTION_LIST } from '../constants';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const NavItem = ({ title, id, children, to }: { title: string, id: string, children?: React.ReactNode, to?: string }) => {
    if (to) {
        return (
            <Link 
                to={to} 
                className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-green-700 transition-colors rounded-full hover:bg-green-50 whitespace-nowrap"
            >
                {title}
            </Link>
        );
    }
    return (
        <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown(id)}
            onMouseLeave={() => setActiveDropdown(null)}
        >
            <button className={`flex items-center gap-1 px-4 py-2 text-sm font-bold transition-all rounded-full whitespace-nowrap ${activeDropdown === id ? 'bg-green-50 text-green-700' : 'text-slate-600 hover:text-green-700 hover:bg-green-50'}`}>
                {title} <ChevronDown size={14} className={`transform transition-transform duration-200 ${activeDropdown === id ? 'rotate-180' : ''}`} />
            </button>
            <div 
                className={`absolute top-full left-0 pt-2 z-50 transition-all duration-200 origin-top-left ${
                    activeDropdown === id ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
                }`}
            >
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 overflow-hidden min-w-[260px]">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-green-400 to-emerald-600"></div>
                    {children}
                </div>
            </div>
        </div>
    );
  };

  return (
    <>
      <header className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        {/* Top Bar */}
        <div className="bg-slate-900 text-slate-300 text-[11px] md:text-xs font-medium py-2">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-4 md:gap-6">
                    <span className="text-emerald-400 font-bold tracking-wide uppercase hidden sm:inline">No Contracts Required</span>
                    <a href={`tel:${PHONE_MAIN}`} className="flex items-center gap-2 hover:text-white transition-colors">
                        <Phone size={12} className="text-emerald-400" />
                        <span className="font-bold tracking-wide">{PHONE_MAIN}</span>
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <span className="hidden sm:inline opacity-70">Serving Central Wisconsin</span>
                    <div className="h-3 w-px bg-slate-700 hidden sm:block"></div>
                    <div className="flex gap-3">
                        <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={14} /></a>
                        <a href="#" className="hover:text-red-500 transition-colors"><Youtube size={14} /></a>
                    </div>
                </div>
            </div>
        </div>

        {/* Main Navbar */}
        <div className="container mx-auto px-6 py-3 relative">
            <div className="flex justify-between items-center">
                
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group relative z-10 flex-shrink-0">
                    <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white p-2 rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <Bug size={24} />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-heading font-extrabold text-slate-800 leading-none tracking-tight">
                            1st CHOICE
                        </h1>
                        <span className="text-emerald-600 font-bold text-[0.6rem] tracking-[0.25em] uppercase mt-0.5">Pest Control</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex items-center gap-1 bg-slate-50 p-1 rounded-full border border-slate-100 mx-4">
                    <NavItem id="pest" title="Pest Control">
                        <div className="w-[600px] grid grid-cols-3 gap-2">
                            {PEST_LIST.map((pest: any) => (
                                <Link 
                                    key={pest} 
                                    to={`/pest/${pest.toLowerCase().replace(/[\s&/]+/g, '-')}`}
                                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-green-50 text-slate-600 hover:text-green-700 transition-colors text-sm group"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-green-500 transition-colors"></div>
                                    {pest}
                                </Link>
                            ))}
                        </div>
                    </NavItem>

                    <NavItem id="prevention" title="Prevention">
                        <div className="w-[300px] flex flex-col gap-1">
                            {PREVENTION_LIST.map((item: any, idx: any) => (
                                <Link 
                                    key={idx} 
                                    to={`/pest/${item.id}`} 
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 text-slate-600 hover:text-green-700 transition-colors text-sm font-medium"
                                >
                                    <Shield size={16} className="text-emerald-500" />
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </NavItem>

                    <NavItem id="about" title="Company">
                        <div className="w-56 flex flex-col gap-1">
                            {[
                                { name: "Our Story", icon: Info, to: "/about-us/our-story" },
                                { name: "Our Team", icon: Info, to: "/about-us/our-team" },
                                { name: "Locations", icon: MapPin, to: "/about-us/locations" },
                            ].map((item, idx) => (
                                <Link key={idx} to={item.to} className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 text-slate-600 hover:text-green-700 transition-colors text-sm font-medium">
                                    <item.icon size={16} className="text-emerald-500" />
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </NavItem>

                    <NavItem to="/commercial" title="Commercial" id="comm" />
                    <NavItem to="/contact-us" title="Contact" id="contact" />
                </nav>

                {/* Desktop Right Actions */}
                <div className="hidden xl:flex items-center gap-3">
                    <Link 
                        to="/bundle-save" 
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                    >
                        Bundle & Save
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex xl:hidden items-center gap-3">
                     <Link 
                        to="/bundle-save" 
                        className="bg-red-600 text-white px-4 py-2 rounded-full font-bold text-xs shadow-md whitespace-nowrap hidden sm:block"
                    >
                        SAVE
                    </Link>

                    <button 
                        className="p-2 text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
                        onClick={() => {
                            setMobileMenuOpen(true);
                        }}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
            className={`fixed inset-0 z-[60] bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${
                mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            onClick={() => setMobileMenuOpen(false)}
        ></div>

        <div className={`fixed top-0 right-0 z-[70] w-full max-w-sm h-full bg-white shadow-2xl transform transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">
                <div className="p-5 flex justify-between items-center border-b border-slate-100 bg-slate-50">
                    <span className="font-heading font-black text-lg text-slate-800 tracking-tight">MENU</span>
                    <button 
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 bg-white rounded-full shadow-sm hover:bg-slate-100 transition-colors"
                    >
                        <X size={20} className="text-slate-500" />
                    </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Quick Access</h3>
                            <div className="grid grid-cols-2 gap-3">
                                 <Link to="/pest/ants" className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-center hover:border-green-500 hover:bg-green-50 transition-all group">
                                    <Bug className="mx-auto mb-2 text-slate-400 group-hover:text-green-600" size={24} />
                                    <span className="block font-bold text-slate-700 text-sm">Ants</span>
                                 </Link>
                                 <Link to="/pest/rodents" className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-center hover:border-green-500 hover:bg-green-50 transition-all group">
                                    <Bug className="mx-auto mb-2 text-slate-400 group-hover:text-green-600" size={24} />
                                    <span className="block font-bold text-slate-700 text-sm">Rodents</span>
                                 </Link>
                                 <Link to="/commercial" className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-center hover:border-green-500 hover:bg-green-50 transition-all group">
                                    <Shield className="mx-auto mb-2 text-slate-400 group-hover:text-green-600" size={24} />
                                    <span className="block font-bold text-slate-700 text-sm">Commercial</span>
                                 </Link>
                                 <Link to="/contact-us" className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-center hover:border-green-500 hover:bg-green-50 transition-all group">
                                    <Phone className="mx-auto mb-2 text-slate-400 group-hover:text-green-600" size={24} />
                                    <span className="block font-bold text-slate-700 text-sm">Contact</span>
                                 </Link>
                            </div>
                        </div>

                        <div className="space-y-4">
                             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Navigation</h3>
                             <Link to="/" className="block text-xl font-bold text-slate-800 hover:text-green-600">Home</Link>
                             <Link to="/about-us/our-story" className="block text-xl font-bold text-slate-800 hover:text-green-600">Our Story</Link>
                             <Link to="/about-us/locations" className="block text-xl font-bold text-slate-800 hover:text-green-600">Locations</Link>
                             <Link to="/about-us/our-team" className="block text-xl font-bold text-slate-800 hover:text-green-600">Our Team</Link>
                             <button onClick={() => navigate('/pest/generic')} className="block text-xl font-bold text-slate-800 hover:text-green-600 text-left w-full">All Services</button>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-slate-100 bg-slate-50">
                    <Link 
                        to="/bundle-save" 
                        className="block w-full bg-red-600 text-white text-center font-bold py-4 rounded-xl shadow-lg active:scale-95 transition-transform mb-6"
                    >
                        BUNDLE & SAVE PLANS
                    </Link>
                    <div className="flex justify-center gap-6 text-slate-400">
                        <a href="#" className="hover:text-blue-600 transition-colors"><Facebook size={24} /></a>
                        <a href="#" className="hover:text-red-600 transition-colors"><Youtube size={24} /></a>
                    </div>
                </div>
            </div>
        </div>
      </header>
    </>
  );
};

export default Header;
