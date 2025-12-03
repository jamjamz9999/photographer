
import React from 'react';
import { MapPin, Camera, Star, Heart } from 'lucide-react';

interface LocationPageProps {
  city: string;
  onBook: () => void;
}

const LocationPage: React.FC<LocationPageProps> = ({ city, onBook }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 animate-slide-up space-y-20">
      
      {/* Hero Section */}
      <div className="text-center space-y-8 py-12 bg-gradient-to-b from-blue-50/50 to-white rounded-3xl border border-blue-100/50">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-purple-700 text-xs font-bold uppercase tracking-widest">
          <MapPin size={14} />
          <span>Serving {city}, PA</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-neutral-800 to-purple-900">
          Professional Photography in {city}
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        <p className="text-xl font-light text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          Capturing timeless family portraits, weddings, and milestones in the heart of {city}, Pennsylvania.
        </p>
        <button 
          onClick={onBook}
          className="px-8 py-4 bg-neutral-900 text-white uppercase tracking-[0.2em] text-xs font-bold rounded-sm shadow-lg hover:bg-purple-900 transition-colors"
        >
          Book Your {city} Session
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-serif text-neutral-900">Your Local {city} Photographer</h2>
          <p className="text-neutral-600 font-light leading-relaxed">
            As a premier photographer serving the {city} area, I understand the unique charm and beauty of our local community. Whether you're looking for a session in a local park, downtown {city}, or in my nearby studio, I bring a blend of artistic vision and local knowledge to every shoot.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-neutral-700">
              <div className="p-2 bg-blue-100 rounded-full text-blue-600"><Camera size={16} /></div>
              <span className="font-medium">Family & Maternity Portraits</span>
            </li>
            <li className="flex items-center gap-3 text-neutral-700">
              <div className="p-2 bg-purple-100 rounded-full text-purple-600"><Star size={16} /></div>
              <span className="font-medium">Senior Graduates & Milestones</span>
            </li>
            <li className="flex items-center gap-3 text-neutral-700">
              <div className="p-2 bg-pink-100 rounded-full text-pink-600"><Heart size={16} /></div>
              <span className="font-medium">Couples & Engagements</span>
            </li>
          </ul>
        </div>
        <div className="bg-neutral-100 rounded-3xl h-96 overflow-hidden shadow-xl relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <img 
            src={`https://picsum.photos/seed/${city}/800/1000`} 
            alt={`Photography in ${city}`} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute bottom-6 left-6 text-white z-20">
            <p className="font-serif text-2xl italic">{city} Memories</p>
            <p className="text-xs uppercase tracking-widest opacity-90">Jinette Ramos Photography</p>
          </div>
        </div>
      </div>

      {/* SEO Text Block */}
      <div className="bg-neutral-50 p-10 rounded-2xl border border-neutral-200">
        <h3 className="text-xl font-serif text-neutral-900 mb-4">Why Choose Us for your {city} Photography Needs?</h3>
        <p className="text-neutral-600 font-light text-sm leading-loose mb-4">
          Finding the right photographer in {city}, PA is about more than just a camera—it's about finding someone who can tell your story. Jinette Ramos Photography specializes in creating a relaxed, faith-filled environment where your true personality shines. We serve clients throughout the Lehigh Valley, with a special focus on the beautiful communities of {city}.
        </p>
        <p className="text-neutral-600 font-light text-sm leading-loose">
          From the historic streets to the scenic parks of {city}, we know the perfect backdrops for your session. Book your session today and let's create art that celebrates your life in {city}.
        </p>
      </div>

    </div>
  );
};

export default LocationPage;
