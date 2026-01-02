import React, { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Phone, Menu, X, Facebook, Instagram } from 'lucide-react';

const PageTransition: React.FC = () => {
  const location = useLocation();
  return (
    <div 
      key={location.pathname} 
      className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center text-white animate-slide-up pointer-events-none"
    >
      <div className="text-center animate-pulse">
        <h1 className="font-serif text-5xl md:text-7xl mb-4 tracking-tight drop-shadow-md">Salon Mita</h1>
        <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase opacity-90 border-t border-white/30 pt-4 mt-2 inline-block">The best salon in Verdun</p>
      </div>
    </div>
  );
};

// Salon Open/Closed Logic
const SalonStatus = () => {
  const [status, setStatus] = useState<'open' | 'closed'>('closed');
  
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sun, 1 = Mon, etc.
      const hour = now.getHours();

      if (day === 1) { // Monday Closed
        setStatus('closed');
      } else if (day === 0) { // Sunday 12-5
        setStatus(hour >= 12 && hour < 17 ? 'open' : 'closed');
      } else { // Tue-Sat 11-7
        setStatus(hour >= 11 && hour < 19 ? 'open' : 'closed');
      }
    };
    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-xs font-semibold tracking-wide bg-neutral-soft px-3 py-1.5 rounded-full border border-gray-100">
      <span className={`w-2 h-2 rounded-full ${status === 'open' ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></span>
      <span className="text-secondary">{status === 'open' ? "We are Open" : "Currently Closed"}</span>
    </div>
  );
};

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Refs for sliding underline
  const navRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Calculate position of the active link for the sliding line
  useEffect(() => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector(`a[data-active="true"]`) as HTMLElement;
      if (activeLink) {
        setUnderlineStyle({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
          opacity: 1
        });
      } else {
         setUnderlineStyle(prev => ({ ...prev, opacity: 0 }));
      }
    }
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: "HOME" },
    { path: '/services', label: "SERVICES" },
    { path: '/about', label: "ABOUT" },
    { path: '/booking', label: "BOOKING" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
      <PageTransition />
      
      {/* Modern Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-24 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0" onClick={closeMenu}>
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-secondary font-serif leading-none">Salon Mita</h1>
              <span className="text-[10px] tracking-[0.3em] text-primary uppercase font-medium">Montreal</span>
            </div>
          </Link>

          {/* Desktop Nav with Sliding Line */}
          <nav className="hidden md:flex relative items-center" ref={navRef}>
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                data-active={location.pathname === link.path}
                className={`px-6 py-2 text-sm font-semibold tracking-widest transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-slate-600'}`}
              >
                {link.label}
              </Link>
            ))}
            {/* The Animated Line */}
            <div 
              className="absolute bottom-0 h-[2px] bg-primary transition-all duration-300 ease-out rounded-full"
              style={{ 
                left: `${underlineStyle.left}px`, 
                width: `${underlineStyle.width}px`,
                opacity: underlineStyle.opacity,
                transform: 'translateY(8px)' // Move slightly below text
              }}
            />
          </nav>

          {/* Right Side: Status, CTA */}
          <div className="hidden md:flex items-center gap-6">
            <SalonStatus />
            
            <button 
              onClick={() => navigate('/booking')}
              className="bg-secondary hover:bg-black text-white text-xs uppercase tracking-widest font-bold px-6 py-3 rounded-sm shadow-md transition-all hover:translate-y-[-1px] active:translate-y-[1px]"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-secondary p-1 hover:text-primary transition-colors">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-32 px-8 md:hidden animate-in fade-in slide-in-from-top-5 duration-300">
           <div className="flex flex-col gap-6 items-start">
             <SalonStatus />
             <nav className="flex flex-col gap-6 text-3xl font-serif text-secondary w-full mt-4">
              {navLinks.map((link) => (
                 <Link 
                   key={link.path}
                   to={link.path} 
                   onClick={toggleMenu} 
                   className="border-b border-gray-100 pb-4 hover:text-primary transition-colors flex justify-between items-center"
                 >
                   {link.label}
                 </Link>
              ))}
            </nav>
            <div className="mt-8 flex gap-4 w-full">
               <button 
                onClick={() => { navigate('/booking'); toggleMenu(); }}
                className="flex-[2] bg-primary text-white py-3 rounded-sm font-bold tracking-widest"
              >
                 BOOK NOW
              </button>
            </div>
           </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white pt-20 pb-10 border-t border-gray-800 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="col-span-1 space-y-6 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2">
                <h4 className="text-2xl font-serif">Salon Mita</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                464 Rue de l'Église, Verdun<br/>
                QC H4G 2M6
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a 
                  href="https://www.facebook.com/profile.php?id=100064866220448&sk=photos_by" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-gray-400"
                >
                  <Facebook size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h5 className="font-serif text-lg mb-6">Explore</h5>
              <ul className="space-y-4 text-sm text-gray-400 font-light pl-0 list-none">
                {navLinks.map(link => (
                  <li key={link.path}><Link to={link.path} className="hover:text-primary transition-colors block">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center md:items-start">
              <h5 className="font-serif text-lg mb-6">Visit Us</h5>
              <ul className="space-y-5 text-sm text-gray-400 font-light pl-0 list-none">
                <li className="flex items-start justify-center md:justify-start gap-3">
                  <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                  <span>464 Rue de l'Église<br/>Verdun, QC H4G 2M6</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3">
                  <Phone size={16} className="text-primary shrink-0" />
                  <span>(514) 223-6697</span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center md:items-start">
              <h5 className="font-serif text-lg mb-6">Opening Hours</h5>
              <div className="flex flex-col gap-3 text-sm text-gray-400 font-light w-full max-w-[200px]">
                <div className="flex justify-between border-b border-gray-800 pb-2 border-dashed">
                  <span>Mon</span>
                  <span className="text-primary">Closed</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2 border-dashed">
                  <span>Tue-Sat</span>
                  <span>11am - 7pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sun</span>
                  <span>12pm - 5pm</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-light">
            <p>© 2024 Salon Mita. All rights reserved.</p>
            
            <div className="flex items-center gap-2">
              <span>Designed by</span>
              <a 
                href="https://www.instagram.com/om_das_12/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-signature text-xl text-primary hover:text-white transition-colors duration-300 relative group flex items-center gap-1"
              >
                <span className="bg-gradient-to-r from-primary via-white to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">Om Das</span>
                <Instagram size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -mt-1" />
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500 ease-in-out"></span>
              </a>
            </div>

            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;