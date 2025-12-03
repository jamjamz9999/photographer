
import React from 'react';
import { Check, Camera, Clock, Heart, Image, Star, Coffee, Music, Sun, Smile, ArrowRight } from 'lucide-react';
import EditableText from './cms/EditableText';
import { useContent } from './cms/ContentContext';

const Services: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 animate-slide-up space-y-32">
      
      {/* --- Hero: The JRP Studio Experience --- */}
      <div className="text-center max-w-4xl mx-auto space-y-6 bg-gradient-to-b from-blue-50/20 to-transparent p-8 rounded-3xl">
        <span className="text-purple-600 font-bold uppercase tracking-widest text-xs bg-purple-50 px-3 py-1 rounded-full">The JRP Studio Experience</span>
        <EditableText section="services" contentKey="heroTitle" tag="h1" className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-blue-800 to-purple-900 pb-2" />
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        <div className="text-neutral-600 font-light text-lg leading-relaxed">
           <EditableText section="services" contentKey="heroText" multiline />
        </div>
        <p className="text-neutral-500 font-light text-lg italic">
          My approach blends warm storytelling with a subtle editorial touch, creating portraits that feel natural, elevated, and timeless.
        </p>
      </div>

      {/* --- Your Journey Section --- */}
      <div className="space-y-16">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-serif text-blue-900 mb-3">Your Journey</h2>
           <p className="text-neutral-500 font-light uppercase tracking-widest text-sm">Three chapters from booking to final delivery</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Step I */}
          <div className="bg-gradient-to-br from-white via-blue-50/20 to-white p-10 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
            <span className="text-6xl font-serif text-blue-50 absolute top-4 right-4">I</span>
            <div className="relative z-10">
              <div className="text-blue-600 mb-6 bg-blue-50 w-12 h-12 flex items-center justify-center rounded-xl"><Clock size={24} /></div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">Pre-session planning</span>
              <h3 className="text-2xl font-serif text-neutral-900 mb-4">Before Your Session</h3>
              <p className="text-neutral-600 font-light leading-relaxed mb-4">
                It all starts with connection. Once you inquire, we'll discuss your vision, location ideas, and wardrobe styling to ensure every detail feels like you.
              </p>
            </div>
          </div>

          {/* Step II */}
          <div className="bg-gradient-to-br from-white via-purple-50/20 to-white p-10 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-purple-600"></div>
            <span className="text-6xl font-serif text-purple-50 absolute top-4 right-4">II</span>
            <div className="relative z-10">
              <div className="text-purple-600 mb-6 bg-purple-50 w-12 h-12 flex items-center justify-center rounded-xl"><Camera size={24} /></div>
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2 block">The magic happens</span>
              <h3 className="text-2xl font-serif text-neutral-900 mb-4">During Your Session</h3>
              <p className="text-neutral-600 font-light leading-relaxed mb-4">
                I'll gently guide you through movement and prompts that create authentic, joy-filled moments. My sessions are relaxed and uplifting.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Dynamic Services List --- */}
      <div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-blue-800 to-purple-900 mb-4 pb-2">Investment & Packages</h2>
          <p className="text-neutral-500 font-light text-lg">Transparent pricing for timeless memories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.items.map((service) => (
            <div key={service.id} className="bg-white border border-neutral-100 rounded-3xl p-8 shadow-sm hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <h3 className="text-2xl font-serif text-neutral-900 mb-2 group-hover:text-blue-800 transition-colors">{service.title}</h3>
              <p className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600 mb-8 font-serif">{service.price}</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-600">
                    <div className="bg-green-50 p-0.5 rounded-full text-green-600">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3.5 border border-blue-200 text-blue-800 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 hover:text-white hover:border-transparent transition-all duration-300 rounded-lg shadow-sm hover:shadow-lg">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
