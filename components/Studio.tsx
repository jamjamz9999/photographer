
import React from 'react';
import { MapPin, Camera, Coffee, Lightbulb, Palette, Snowflake, Armchair, Theater } from 'lucide-react';
import EditableText from './cms/EditableText';

const Studio: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-20 pb-20 animate-slide-up">
      
      {/* Hero / Welcome Section */}
      <div className="text-center space-y-6 py-12 max-w-3xl mx-auto">
        <span className="text-purple-600 font-bold uppercase tracking-widest text-xs bg-purple-50 px-3 py-1 rounded-full">Welcome to</span>
        <EditableText section="studio" contentKey="title" tag="h1" className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-neutral-900 via-blue-800 to-purple-900 pb-2" />
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full shadow-sm"></div>
        <div className="text-neutral-600 font-light text-lg leading-relaxed">
           <EditableText section="studio" contentKey="intro" multiline />
        </div>
      </div>

      {/* Our Spaces Section */}
      <div className="space-y-12">
        <div className="text-center">
           <h2 className="text-3xl md:text-4xl font-serif text-blue-900 mb-3">Our Spaces</h2>
           <p className="text-neutral-500 font-light">Two distinct studio environments, each designed to create stunning photography</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Studio */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
            <div className="h-64 overflow-hidden relative">
               <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1595516328192-2a620c78471e?q=80&w=1600&auto=format&fit=crop" 
                 alt="Main Studio" 
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
               />
            </div>
            <div className="p-10 text-center space-y-4">
              <h3 className="text-2xl font-serif text-neutral-900 group-hover:text-blue-700 transition-colors">Main Studio</h3>
              <p className="text-neutral-600 font-light text-sm leading-relaxed">
                Our primary shooting space features adjustable professional lighting systems and multiple backdrop options. Perfect for portrait sessions, headshots, and commercial photography.
              </p>
            </div>
          </div>

          {/* Natural Light Studio */}
          <div className="bg-gradient-to-br from-white to-purple-50/30 rounded-3xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
             <div className="h-64 overflow-hidden relative">
               <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop" 
                 alt="Natural Light Studio" 
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
               />
            </div>
            <div className="p-10 text-center space-y-4">
              <h3 className="text-2xl font-serif text-neutral-900 group-hover:text-blue-700 transition-colors">Natural Light Studio</h3>
              <p className="text-neutral-600 font-light text-sm leading-relaxed">
                A dedicated space featuring large north-facing windows and professional reflectors. Ideal for soft, flattering natural light photography and lifestyle sessions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="bg-gradient-to-br from-white/90 via-blue-50/20 to-purple-50/20 rounded-3xl p-10 md:p-16 border border-neutral-100 shadow-inner">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-blue-900 mb-3">Studio Amenities</h2>
          <p className="text-neutral-500 font-light">Everything you need for a comfortable and productive photography session</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AmenityItem icon={<Lightbulb size={24} />} title="Professional Lighting" desc="State-of-the-art lighting equipment for perfect exposure and mood" />
          <AmenityItem icon={<Palette size={24} />} title="Multiple Backdrops" desc="Variety of backgrounds from minimalist to elaborate" />
          <AmenityItem icon={<Snowflake size={24} />} title="Climate Controlled" desc="Comfortable temperature year-round" />
          <AmenityItem icon={<Armchair size={24} />} title="Comfortable Seating" desc="Lounge area for clients to relax between shots" />
          <AmenityItem icon={<Coffee size={24} />} title="Refreshments" desc="Coffee, tea, and water available for guests" />
          <AmenityItem icon={<Theater size={24} />} title="Makeup Station" desc="Professional makeup artist services available" />
        </div>
      </div>

      {/* Location Footer */}
      <div className="text-center bg-white border border-neutral-200 p-8 rounded-2xl flex flex-col items-center gap-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
         <div className="p-4 bg-purple-50 rounded-full text-purple-700">
            <MapPin size={32} />
         </div>
         <h3 className="font-serif text-2xl text-neutral-900">Visit Us</h3>
         <p className="text-neutral-500 font-light">123 Art Avenue, Allentown, PA 18101</p>
      </div>

    </div>
  );
};

const AmenityItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white/80 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-neutral-50 backdrop-blur-sm">
    <div className="text-blue-600 bg-blue-50 p-4 rounded-xl mb-4 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h4 className="text-lg font-serif text-neutral-900 mb-2">{title}</h4>
    <p className="text-sm text-neutral-500 font-light leading-relaxed">{desc}</p>
  </div>
);

export default Studio;
