
import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Camera, Globe, Heart, Info, Star, MapPin } from 'lucide-react';
import { SITE_NAME, TESTIMONIALS, PORTFOLIO_ITEMS } from '../constants';

interface HomeProps {
  onEnter: () => void;
  onBook: () => void;
  onStudio: () => void;
  onFAQ: () => void;
  onServices: () => void;
}

const Home: React.FC<HomeProps> = ({ onEnter, onBook, onStudio, onFAQ, onServices }) => {
  
  // Updated Button Style for Modern Look
  const buttonBaseClass = "w-full md:w-auto min-w-[200px] justify-center group relative inline-flex items-center gap-3 px-8 py-3.5 bg-white/80 backdrop-blur-sm border border-purple-200 text-purple-900 text-xs uppercase tracking-[0.2em] font-bold overflow-hidden transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-1 rounded-sm";
  
  const primaryButtonClass = "w-full md:w-auto min-w-[280px] justify-center group relative inline-flex items-center gap-4 px-10 py-4 bg-gradient-to-r from-purple-800 to-blue-800 text-white text-sm uppercase tracking-[0.2em] font-bold overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-all duration-300 rounded-sm shadow-xl";
  
  // New gradient button style for Services
  const servicesButtonClass = "w-full md:w-auto min-w-[200px] justify-center group relative inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs uppercase tracking-[0.2em] font-bold overflow-hidden transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1 rounded-sm";

  // Slideshow Logic
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        // Select a random index that is not the current one
        let nextIndex;
        do {
           nextIndex = Math.floor(Math.random() * PORTFOLIO_ITEMS.length);
        } while (nextIndex === currentImageIndex && PORTFOLIO_ITEMS.length > 1);
        
        setCurrentImageIndex(nextIndex);
        setIsFading(false);
      }, 500); // Half of the transition time
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const currentImage = PORTFOLIO_ITEMS[currentImageIndex];

  return (
    <div className="relative w-full bg-white selection:bg-blue-100 selection:text-blue-900">

      {/* Fixed Background Layer (Stays in place while content scrolls) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-white">
         
         {/* Shape 1: Large Blue Swirl - Bouncing Top-Left */}
         <svg className="absolute top-[10%] left-[10%] w-[500px] h-[500px] text-blue-200/40 animate-wander-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M42.7,-72.8C54.3,-64.7,62,-51.5,68.8,-38.4C75.6,-25.3,81.4,-12.3,80.1,0.1C78.8,12.5,70.4,24.4,61.4,35.4C52.4,46.5,42.8,56.7,31.4,64.8C20,72.9,6.8,78.8,-5.8,77.8C-18.4,76.8,-30.4,68.9,-40.8,60.2C-51.2,51.4,-60,41.7,-66.8,30.5C-73.6,19.2,-78.4,6.3,-76.9,-6C-75.3,-18.4,-67.3,-30.2,-58.1,-40.6C-48.9,-51,-38.4,-60.1,-27,-68.2C-15.6,-76.3,-3.2,-83.5,7.4,-82.2C18,-81,31.1,-80.8,42.7,-72.8Z" transform="translate(100 100)" />
         </svg>

         {/* Shape 2: White/Transparent Outline Swirl - Bouncing Center */}
         <svg className="absolute top-[30%] left-[40%] w-[600px] h-[600px] text-blue-50 animate-wander-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M46,-76.1C59.3,-69.7,69.7,-59.1,77.1,-47.1C84.5,-35.1,88.8,-21.6,85.6,-9.2C82.3,3.1,71.5,14.3,61.9,24.1C52.3,33.9,43.9,42.3,34.6,48.6C25.3,54.9,15.1,59.1,4.3,61.6C-6.5,64.1,-17.9,64.9,-28.9,61.7C-39.9,58.5,-50.5,51.3,-59.8,42.3C-69.1,33.3,-77.1,22.5,-80.4,10.4C-83.6,-1.7,-82.1,-15.1,-74.7,-26.2C-67.3,-37.3,-54,-46.1,-41.3,-52.8C-28.6,-59.5,-16.5,-64.1,-2.9,-65.8C10.7,-67.5,24.5,-66.3,32.7,-82.5" transform="translate(100 100)" />
         </svg>

         {/* Shape 3: Darker Blue Swirl Blob - Bouncing Bottom-Right */}
         <svg className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] text-blue-300/30 animate-wander-3" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
             <path fill="currentColor" d="M39.5,-65.3C50.8,-56.7,59.4,-45.1,65.8,-32.3C72.1,-19.5,76.2,-5.5,73.3,7.3C70.4,20.1,60.5,31.7,50.3,41.4C40.1,51.1,29.6,59,17.9,63.7C6.2,68.4,-6.7,70,-19.2,67.1C-31.7,64.2,-43.8,56.8,-53.4,47C-63,37.2,-70.1,24.9,-71.8,11.8C-73.5,-1.3,-69.8,-15.2,-61.7,-26.7C-53.6,-38.2,-41.1,-47.3,-29.1,-55.6C-17.1,-63.8,-5.6,-71.2,4.9,-78.7C15.4,-86.2,30.8,-93.8,39.5,-65.3Z" transform="translate(100 100)" />
         </svg>

         {/* Shape 4: Small Intense Blue Blob - Fast wander */}
         <svg className="absolute top-[50%] right-[30%] w-[250px] h-[250px] text-blue-500/20 animate-wander-1" style={{ animationDuration: '15s' }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
             <path fill="currentColor" d="M47.5,-58.1C59.6,-47.7,66.4,-30.9,67.4,-14.7C68.4,1.5,63.6,17.1,55.1,30.6C46.6,44.1,34.4,55.5,20.5,61.8C6.6,68.1,-9,69.3,-22.8,64.7C-36.6,60.1,-48.6,49.7,-57.8,36.9C-67,24.1,-73.4,8.9,-71.7,-5.5C-70,-19.9,-60.2,-33.5,-49.3,-44.4C-38.4,-55.3,-26.4,-63.5,-13.1,-64.9C0.2,-66.3,13.5,-60.9,25.4,-68.5" transform="translate(100 100)" />
         </svg>

         {/* Shape 5: Very Large Faint Swirl - Slow Background Movement */}
         <div className="absolute top-[-20%] left-[-20%] w-[140vw] h-[140vw] rounded-full bg-gradient-to-r from-blue-50/50 to-transparent blur-3xl animate-spin-slow opacity-50"></div>
      
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-6 animate-fade-in max-w-5xl mx-auto">
        
        <div className="mb-6 md:mb-10 flex flex-col items-center gap-3">
           <div className="inline-flex items-center gap-3 py-2.5 px-6 bg-white/60 backdrop-blur-md border border-blue-200/50 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-xs md:text-sm uppercase tracking-[0.3em] font-bold">
               PROFESSIONAL
             </span>
             <Camera className="w-5 h-5 text-purple-600" strokeWidth={1.5} />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-xs md:text-sm uppercase tracking-[0.3em] font-bold">
               PHOTOGRAPHER
             </span>
           </div>
        </div>

        {/* Modern Gradient Header */}
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif tracking-tight leading-[0.9] mb-10 drop-shadow-sm text-purple-800 animate-gradient-x pb-4">
          {SITE_NAME}
          <span className="block text-2xl md:text-3xl lg:text-4xl mt-6 font-sans font-light text-neutral-400 tracking-normal">
            Albany, USA
          </span>
        </h1>

        <div className="flex flex-col gap-6 w-full items-center">
          
          {/* Additional Navigation Buttons - Updated Services Button */}
          <div className="flex flex-col md:flex-row gap-4 w-full justify-center flex-wrap">
             <button onClick={onServices} className={servicesButtonClass}>
                <span className="relative z-10 flex items-center gap-2">
                   <Info size={16} /> MY SERVICES
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
             </button>
          </div>

          {/* Main Call to Actions */}
          <div className="flex flex-col md:flex-row gap-6 w-full justify-center mt-4">
            <button onClick={onEnter} className={primaryButtonClass}>
              <span className="relative z-10 flex items-center gap-3">
                Enter Portfolio
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-shine-effect"></div>
            </button>

            <button onClick={onBook} className={primaryButtonClass.replace('from-purple-800 to-blue-800', 'from-neutral-900 to-neutral-800')}>
              <span className="relative z-10 flex items-center gap-3">
                Book Me Now
                <Calendar className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
              </span>
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] animate-shine-effect"></div>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-blue-300 opacity-50">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
        </div>

      </div>

      {/* --- New Content Containers --- */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-32 space-y-32">

        {/* 1. Slideshow Box (Replaced Polaroid Reel) */}
        <div className="w-full py-12 flex justify-center">
           <div className="bg-white p-4 pb-12 shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500 border border-neutral-100 max-w-md w-full transform hover:scale-105">
             <div className="w-full h-[400px] overflow-hidden bg-neutral-100 mb-4 relative">
               <img 
                  src={currentImage.url} 
                  alt={currentImage.title} 
                  className={`w-full h-full object-cover transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`} 
               />
             </div>
             <div className="flex justify-between items-end">
                <p className={`font-handwriting font-serif italic text-neutral-600 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                  {currentImage.title}
                </p>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400">{currentImage.category}</span>
             </div>
           </div>
        </div>

        {/* 2. Intro / Bio */}
        <div className="text-center max-w-3xl mx-auto space-y-8 bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-blue-50 shadow-[0_10px_40px_rgba(0,0,0,0.03)] transform hover:-translate-y-1 transition-transform duration-500">
           <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
           <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 leading-tight">
             Jinette Ramos: The best photographer in Allen Town, USA. <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 block mt-2">Capturing Moments</span>
           </h2>
           <p className="text-neutral-600 leading-loose font-light text-lg">
             Hi, I'm Jinette Ramos, a portrait photographer, faith-filled creative, and proud mom of seven. I specialize in capturing families, expecting moms, newborns, couples, and seniors with a warm, timeless touch and a hint of editorial elegance. My passion for photography is rooted in my faith and fueled by connection, joy, and storytelling. Every session is a reflection of love, purpose, and the beauty of who you are.
           </p>
        </div>

        {/* 3. Featured Collections */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-purple-900">Featured Collections</h3>
            <p className="text-neutral-500 tracking-widest uppercase text-sm">Curated stories with luminous detail</p>
            <p className="text-neutral-600 font-light max-w-2xl mx-auto">
              Each commission is styled, art-directed, and retouched in house for a cohesive, gallery-worthy finish. Scroll through a sampling of recent collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Collection 1 */}
            <div className="bg-white p-10 rounded-2xl group hover:bg-blue-50/30 transition-all duration-500 border border-neutral-100 hover:border-blue-200 hover:shadow-xl flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <div className="mb-6 text-blue-600"><Camera size={32} strokeWidth={1.5} /></div>
              <h4 className="text-2xl font-serif text-neutral-900 mb-2 group-hover:text-blue-800 transition-colors">Family Legacies</h4>
              <p className="text-neutral-500 font-light mb-8 flex-grow">Intimate, story-driven sessions that celebrate generational bonds.</p>
              
              <div className="flex items-end justify-between border-t border-neutral-200 pt-6 mt-auto">
                <div>
                  <span className="block text-3xl font-bold text-neutral-900">40+</span>
                  <span className="text-xs uppercase tracking-wider text-neutral-400">families this year</span>
                </div>
                <button onClick={onEnter} className="text-purple-700 uppercase text-xs font-bold tracking-widest hover:underline decoration-2 underline-offset-4">View Gallery</button>
              </div>
            </div>

            {/* Collection 2 */}
            <div className="bg-white p-10 rounded-2xl group hover:bg-purple-50/30 transition-all duration-500 border border-neutral-100 hover:border-purple-200 hover:shadow-xl flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
              <div className="mb-6 text-purple-600"><Globe size={32} strokeWidth={1.5} /></div>
              <h4 className="text-2xl font-serif text-neutral-900 mb-2 group-hover:text-purple-800 transition-colors">Senior Milestones</h4>
              <p className="text-neutral-500 font-light mb-8 flex-grow">Celebrating graduation with confidence and high-fashion flair.</p>
              
              <div className="flex items-end justify-between border-t border-neutral-200 pt-6 mt-auto">
                <div>
                  <span className="block text-3xl font-bold text-neutral-900">100%</span>
                  <span className="text-xs uppercase tracking-wider text-neutral-400">joy captured</span>
                </div>
                <button onClick={onEnter} className="text-purple-700 uppercase text-xs font-bold tracking-widest hover:underline decoration-2 underline-offset-4">View Gallery</button>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Testimonials */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="text-center mb-12 relative z-10">
             <h3 className="text-3xl md:text-4xl font-serif text-blue-900 mb-4">Kind Words</h3>
             <p className="text-neutral-500 font-light">Hear from families we've had the honor of photographing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
             {TESTIMONIALS.map(testimonial => (
               <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm border border-white hover:shadow-md transition-shadow">
                  <div className="flex gap-1 mb-3 text-yellow-400">
                    {[...Array(testimonial.stars)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-neutral-600 text-sm italic mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex justify-between items-end border-t border-neutral-50 pt-4">
                    <span className="font-bold text-xs uppercase tracking-widest text-neutral-800">{testimonial.name}</span>
                    <a href="#" className="text-[10px] text-blue-400 hover:text-blue-600 underline">Google Review</a>
                  </div>
               </div>
             ))}
          </div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>
        </div>

        {/* 5. Gallery Highlights */}
        <div className="space-y-16">
           <div className="text-center">
             <h3 className="text-3xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-900 mb-3">Gallery Highlights</h3>
             <p className="text-xl font-serif italic text-purple-600 mb-6">A kaleidoscope of light</p>
             <p className="text-neutral-600 font-light max-w-3xl mx-auto leading-relaxed">
               Smiley emotion. From candid lifestyle portraits to architectural silhouettes, explore the range of disciplines we bring to every commission. Each collection is delivered with meticulous post-production and guided storytelling.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <HighlightCard 
               title="Authentic Moments" 
               category="Family Portraits" 
               desc="Capturing genuine expressions and authentic moments in a relaxed studio setting. This portrait reflects natural beauty and personality." 
             />
             <HighlightCard 
               title="Storytelling Portrait" 
               category="Couples & Engagements" 
               desc="A compelling portrait that tells a story through expert composition and emotional connection. Every element is thoughtfully placed." 
             />
             <HighlightCard 
               title="Artistic Expression" 
               category="Creative & Artistic" 
               desc="Creative portrait photography with unique style and artistic vision. This image showcases the artistry of professional portraiture." 
             />
             <HighlightCard 
               title="Portrait Excellence" 
               category="Professional Headshots" 
               desc="Professional portrait photography demonstrating technical mastery and creative artistry. A perfect balance of skill and vision." 
             />
             <HighlightCard 
               title="Studio Mastery" 
               category="Maternity & Newborns" 
               desc="High-quality studio photography with perfect lighting and professional composition. Every detail is carefully crafted." 
             />
             <HighlightCard 
               title="Senior Style" 
               category="Senior Grads" 
               desc="Artistic portrait photography showcasing talent, creativity, and professional expertise. A work of art in every frame." 
             />
           </div>
        </div>

        {/* 6. My Vision */}
        <div className="bg-gradient-to-br from-neutral-900 to-blue-950 text-white rounded-3xl p-10 md:p-20 text-center relative overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-700">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-pulse"></div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <div className="inline-block p-4 rounded-full bg-white/5 backdrop-blur-sm mb-4">
                <Heart className="w-12 h-12 text-purple-400 animate-breathe" fill="currentColor" />
            </div>
            <h3 className="text-3xl md:text-5xl font-serif leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-blue-100">
              My vision is to build a photography brand that inspires others to see the beauty in their story.
            </h3>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
            <p className="text-blue-100 font-light text-lg leading-relaxed">
              Through timeless, editorial-inspired imagery and a faith-centered approach, I aim to preserve memories that speak of love, legacy, and divine intention, while fostering a creative community rooted in encouragement, purpose, and light.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

const HighlightCard = ({ title, category, desc }: { title: string, category: string, desc: string }) => (
  <div className="bg-white p-8 border border-neutral-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl flex flex-col group relative z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-xl"></div>
    <div className="mb-4">
      <span className="text-[10px] uppercase tracking-widest font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">{category}</span>
    </div>
    <h4 className="text-xl font-serif text-neutral-900 mb-3 group-hover:text-blue-800 transition-colors">{title}</h4>
    <p className="text-neutral-500 text-sm leading-relaxed font-light flex-grow">{desc}</p>
  </div>
);

export default Home;
