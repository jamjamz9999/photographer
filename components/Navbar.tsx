import React from 'react';
import { Instagram, Twitter, Facebook, HelpCircle } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  activeTab: ViewState;
  setActiveTab: (tab: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {

  const handleNavClick = (tab: ViewState) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Removed 'FAQ' from main list as requested to move it to header buttons
  const navLinks: { label: string; value: ViewState }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Services', value: 'services' },
    { label: 'Gallery', value: 'portfolio' },
    { label: 'Contact', value: 'contact' },
    { label: 'Studio', value: 'studio' },
  ];

  // Reusable Header Buttons Component with Modern Effects
  const HeaderButtons = () => (
    <div className="flex gap-3">
      <button 
        onClick={() => handleNavClick('blog')}
        className="relative group overflow-hidden px-4 py-2 text-[10px] font-bold uppercase tracking-widest border border-neutral-300 text-neutral-600 transition-all rounded-sm hover:border-purple-400 hover:text-purple-700"
      >
        <span className="relative z-10">Journal</span>
        <div className="absolute inset-0 bg-purple-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
      </button>
      <button 
        onClick={() => handleNavClick('contact')}
        className="relative group overflow-hidden px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-blue-900 to-blue-700 transition-all rounded-sm shadow-md hover:shadow-lg hover:scale-105 duration-300"
      >
        <span className="relative z-10">Book Me</span>
        <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
      </button>
      
      {/* FAQ Button - Moved here as requested */}
      <button 
        onClick={() => handleNavClick('faq')}
        className="relative group overflow-hidden px-3 py-2 text-[10px] font-bold uppercase tracking-widest border border-neutral-300 text-neutral-600 transition-all rounded-sm hover:border-blue-400 hover:text-blue-700 flex items-center gap-1"
      >
        <span className="relative z-10 flex items-center gap-1">
          <HelpCircle size={12} /> FAQ
        </span>
        <div className="absolute inset-0 bg-blue-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
      </button>
    </div>
  );

  return (
    <>
      {/* --- Mobile Header (Static/Relative, Scrolls with page) --- */}
      <div className="md:hidden w-full bg-white/90 backdrop-blur-md border-b border-neutral-200 flex flex-col relative z-40 sticky top-0">
        
        {/* Top Row: Header Buttons (Left) & Socials (Right) */}
        <div className="flex items-center justify-between px-4 py-3">
          
          {/* Top Left: Journal, Book Me, FAQ */}
          <HeaderButtons />

          {/* Right: Social Icons - Google Icon moved to left of Instagram */}
          <div className="flex gap-2">
            <GoogleIcon />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Twitter} />
            <SocialIcon Icon={Facebook} />
          </div>
        </div>

        {/* Bottom Row: Navigation Links */}
        <div className="flex w-full px-2 py-2 gap-2 bg-neutral-50/50 border-t border-neutral-100 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => handleNavClick(link.value)}
              className={`flex-1 py-2 px-3 text-[10px] uppercase tracking-widest font-bold shadow-sm transition-all duration-300 whitespace-nowrap text-center rounded-sm relative overflow-hidden group ${
                activeTab === link.value 
                  ? 'bg-gradient-to-r from-blue-900 to-purple-900 text-white' 
                  : 'bg-white text-neutral-600 hover:text-blue-700 border border-neutral-200'
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              {activeTab !== link.value && (
                 <div className="absolute inset-0 bg-blue-50 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* --- Desktop Sidebar (Fixed) --- */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-72 bg-white border-r border-neutral-100 flex-col justify-between p-8 z-50 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        
        {/* Top Left Header Area: Special Buttons */}
        <div className="mt-8 w-full">
           <HeaderButtons />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-3 w-full">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => handleNavClick(link.value)}
              className={`w-full py-3.5 px-5 text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300 rounded-sm shadow-sm block relative overflow-hidden group ${
                activeTab === link.value 
                  ? 'bg-gradient-to-r from-blue-900 to-purple-900 text-white shadow-lg transform scale-[1.02]' 
                  : 'bg-white text-neutral-600 border border-neutral-100 hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5'
              }`}
            >
              <span className="relative z-10 flex items-center justify-between w-full">
                {link.label}
                {activeTab === link.value && <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>}
              </span>
              {activeTab !== link.value && (
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
              )}
            </button>
          ))}
        </nav>

        {/* Footer / Socials in Sidebar */}
        <div className="mb-4">
          <div className="flex gap-4 mb-6 flex-wrap">
            <GoogleIcon />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Twitter} />
            <SocialIcon Icon={Facebook} />
          </div>
          <p className="text-[10px] text-neutral-400 font-light uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Jinette Ramos
          </p>
        </div>

      </aside>
    </>
  );
};

const SocialIcon = ({ Icon }: { Icon: any }) => (
  <a href="#" className="text-purple-700 hover:text-black transition-all transform hover:scale-125 hover:rotate-6 duration-300">
    <Icon size={18} strokeWidth={1.5} />
  </a>
);

const GoogleIcon = () => (
  <a href="#" className="text-purple-700 hover:text-black transition-all transform hover:scale-125 hover:rotate-6 duration-300">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8a4 4 0 1 0 4 4" />
      <path d="M16 12H12" />
    </svg>
  </a>
);

export default Navbar;