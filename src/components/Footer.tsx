
import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="relative bg-black overflow-hidden mt-auto">
      
      {/* Night Sky Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-purple-900"></div>
      
      {/* Moving Stars Layer - Animated Loop (20s) */}
      <div 
        className="absolute inset-0 opacity-80 animate-stars-move"
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")',
          backgroundSize: '400px 400px' 
        }}
      ></div>
      
      {/* Bright Flashing Stars Layer */}
      <div 
        className="absolute inset-0 opacity-60 animate-twinkle"
        style={{ 
          backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
          backgroundSize: '50px 50px' 
        }}
      ></div>

      {/* Glass-like Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 backdrop-blur-[1px]"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col p-8 md:p-12 max-w-7xl mx-auto w-full">
        
        {/* Main Footer Body - Split into columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          
          {/* Column 1: Socials */}
          <div className="flex flex-col items-center md:items-start justify-center gap-8">
            <div className="flex gap-8">
                {/* Facebook 3D Icon */}
                <img 
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-facebook-logo-3002096-2507626.png" 
                  alt="Facebook" 
                  className="w-16 h-16 object-contain animate-breathe"
                />
                {/* Instagram 3D Icon with Delay */}
                <img 
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-instagram-logo-3002097-2507627.png" 
                  alt="Instagram" 
                  className="w-16 h-16 object-contain animate-breathe"
                  style={{ animationDelay: '2s' }}
                />
            </div>
          </div>

          {/* Column 2: Service Areas (SEO) */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-serif text-lg mb-6 border-b border-white/20 inline-block pb-2">Service Areas</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={(e) => handleLinkClick(e, 'location-allentown')} className="text-neutral-300 hover:text-blue-300 transition-colors text-[18px] font-light">
                  Allentown
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(e, 'location-bethlehem')} className="text-neutral-300 hover:text-blue-300 transition-colors text-[18px] font-light">
                  Bethlehem
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(e, 'location-easton')} className="text-neutral-300 hover:text-blue-300 transition-colors text-[18px] font-light">
                  Easton
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(e, 'location-emmaus')} className="text-neutral-300 hover:text-blue-300 transition-colors text-[18px] font-light">
                  Emmaus
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLinkClick(e, 'location-nazareth')} className="text-neutral-300 hover:text-blue-300 transition-colors text-[18px] font-light">
                  Nazareth
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-2">
             <h4 className="text-white font-serif text-lg mb-4 border-b border-white/20 inline-block pb-2">Contact Studio</h4>
             <a href="tel:4842745444" className="text-white font-serif text-xl hover:text-blue-300 transition-colors">
              (484) 274-5444
            </a>
            <a href="mailto:info@jinetteramos.com" className="text-neutral-300 text-sm uppercase tracking-wider hover:text-white transition-colors">
              info@jinetteramos.com
            </a>
            {/* Allentown, PA is now a link to admin page */}
            <button 
              onClick={(e) => handleLinkClick(e, 'admin')} 
              className="text-neutral-400 text-xs uppercase tracking-[0.2em] font-light hover:text-white transition-colors"
            >
              Allentown, PA
            </button>
          </div>
        </div>

        {/* Bottom Row: Copyright & Made In */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full pt-4">
          
          {/* Left Side: Made in America with Love Icon */}
          <div className="flex items-center gap-2 text-white/90">
             <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-neutral-200">
               Made in America with
             </span>
             <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" />
          </div>

          <p className="text-neutral-500 text-[10px] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Jinette Ramos Photography
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
