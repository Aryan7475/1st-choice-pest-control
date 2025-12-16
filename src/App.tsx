import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import BundleSave from './pages/BundleSave';
import Commercial from './pages/Commercial';
import PestDetail from './pages/PestDetail';
import OurStory from './pages/OurStory';
import OurTeam from './pages/OurTeam';
import Locations from './pages/Locations';

// Wrapper to handle scroll to top on route change (simulated since ScrollRestoration works with data router usually)
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => window.location, []);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans text-slate-800 antialiased">
        <ScrollToTop />
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/bundle-save" element={<BundleSave />} />
            <Route path="/about-us/our-story" element={<OurStory />} />
            <Route path="/about-us/our-team" element={<OurTeam />} />
            <Route path="/about-us/locations" element={<Locations />} />
            
            {/* Dynamic Route for all pest pages */}
            <Route path="/pest/:id" element={<PestDetail />} />
            
            {/* Fallback routes for About sections to generic pages for demo purposes */}
            <Route path="/about-us/*" element={<div className="container mx-auto py-20 text-center"><h1 className="text-4xl font-bold mb-4">About Us</h1><p>Content for this section is structured similarly to the Home page.</p></div>} />
             <Route path="/blog" element={<div className="container mx-auto py-20 text-center"><h1 className="text-4xl font-bold mb-4">Blog</h1><p>Latest updates coming soon.</p></div>} />
             <Route path="/eco-friendly" element={<Contact />} /> 
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;