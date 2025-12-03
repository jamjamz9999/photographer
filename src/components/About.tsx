
import React, { useEffect } from 'react';
import { Camera, Coffee, Music, Sun, MapPin, Award, BookOpen, Star } from 'lucide-react';
import EditableText from './cms/EditableText';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12 animate-slide-up">
      
      {/* Header Section */}
      <div className="text-center space-y-4 py-8">
        <EditableText section="about" contentKey="title" tag="h1" className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-neutral-900 via-blue-800 to-purple-900 pb-2" />
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      </div>

      {/* Main Bio Container with Gradient */}
      <div className="bg-gradient-to-br from-blue-50/20 via-white/80 to-purple-50/20 rounded-3xl p-8 md:p-12 shadow-lg border border-neutral-100 flex flex-col gap-6 hover:shadow-2xl transition-shadow duration-500 backdrop-blur-sm">
        <div className="space-y-6">
          <h2 className="text-2xl font-serif text-blue-900 border-l-4 border-purple-500 pl-4">About Me</h2>
          <div className="text-neutral-600 font-light leading-relaxed text-sm md:text-base">
             <EditableText section="about" contentKey="bio" multiline />
          </div>
        </div>
      </div>

      {/* Fun Facts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
           <h3 className="text-xl font-serif text-blue-900 mb-6 flex items-center gap-2">
             <div className="p-1.5 bg-blue-100 rounded-lg text-blue-600"><Star size={20} /></div> 
             <EditableText section="about" contentKey="funFactsTitle" tag="span" />
           </h3>
           <ul className="space-y-4 text-neutral-700 text-sm">
             <li className="flex gap-3 items-start">
               <Camera size={18} className="text-blue-600 shrink-0 mt-0.5" />
               <span>I'm obsessed with natural light and storytelling details.</span>
             </li>
             <li className="flex gap-3 items-start">
               <Coffee size={18} className="text-blue-600 shrink-0 mt-0.5" />
               <span>I can't start my day without coffee.</span>
             </li>
             <li className="flex gap-3 items-start">
               <Music size={18} className="text-blue-600 shrink-0 mt-0.5" />
               <span>There's always music playing during sessions — it helps everyone relax and have fun.</span>
             </li>
             <li className="flex gap-3 items-start">
               <Sun size={18} className="text-blue-600 shrink-0 mt-0.5" />
               <span>I love statement fashion, bold creativity, and photos that feel alive and full of purpose.</span>
             </li>
           </ul>
        </div>

        {/* Experience Stats */}
        <div className="bg-neutral-900 p-8 rounded-3xl text-white flex flex-col justify-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="mb-6 relative z-10">
            <h3 className="text-xl font-serif mb-2">Experience & Expertise</h3>
            <p className="text-neutral-400 text-xs font-light">Crafted over a decade of focused practice.</p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center divide-x divide-neutral-800 relative z-10">
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">10+</div>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500 mt-1">Years</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">500+</div>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500 mt-1">Sessions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">1k+</div>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500 mt-1">Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-gradient-to-r from-white to-blue-50/50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-500">
        <EditableText section="about" contentKey="philosophyTitle" tag="h3" className="text-2xl font-serif text-blue-900 mb-6" />
        <div className="prose prose-blue max-w-none text-neutral-600 font-light">
           <EditableText section="about" contentKey="philosophyText" multiline />
        </div>
      </div>

      {/* Location & Skills Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Location */}
        <div className="md:col-span-1 bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-lg transition-shadow">
          <MapPin size={32} className="text-blue-600 mb-4" />
          <h4 className="text-lg font-serif text-neutral-900 mb-2">Allentown, PA</h4>
          <p className="text-sm text-neutral-500 font-light">
            Allentown's Premier Photographer. Based in Allentown, PA, I bring a unique blend of artistic vision and technical mastery to every project.
          </p>
        </div>

        {/* Skills List */}
        <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex flex-col justify-center gap-4 hover:shadow-lg transition-shadow">
           <div className="flex gap-4 items-start">
             <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Award size={20} /></div>
             <div>
               <h5 className="font-bold text-sm text-neutral-900 uppercase tracking-wide">Skills</h5>
               <p className="text-xs text-neutral-500">Expertise in diverse photography genres, advanced editing techniques, and client communication.</p>
             </div>
           </div>
           <div className="flex gap-4 items-start">
             <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><BookOpen size={20} /></div>
             <div>
               <h5 className="font-bold text-sm text-neutral-900 uppercase tracking-wide">Knowledge</h5>
               <p className="text-xs text-neutral-500">Comprehensive understanding of photographic principles, industry trends, and equipment.</p>
             </div>
           </div>
           <div className="flex gap-4 items-start">
             <div className="bg-green-100 p-2 rounded-lg text-green-600"><Star size={20} /></div>
             <div>
               <h5 className="font-bold text-sm text-neutral-900 uppercase tracking-wide">Qualifications</h5>
               <p className="text-xs text-neutral-500">Certified professional photographer with a portfolio of award-winning work and satisfied clients.</p>
             </div>
           </div>
        </div>
      </div>

    </div>
  );
};

export default About;
