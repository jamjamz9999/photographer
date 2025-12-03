
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Flag, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 animate-slide-up">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-blue-900 mb-4">Get In Touch</h1>
        
        <div className="max-w-2xl mx-auto space-y-2 bg-gradient-to-r from-blue-50/30 to-purple-50/30 p-6 rounded-2xl">
           <h2 className="text-xl md:text-2xl font-serif text-neutral-700">Let's Connect</h2>
           <p className="text-neutral-500 font-light text-lg">
             Ready to capture your story? I'd love to hear about your photography needs and discuss how we can create something beautiful together.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left Column: Contact Info */}
        <div className="md:col-span-1 space-y-8">
           
           {/* Call Me */}
           <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow hover:bg-blue-50/30">
             <div className="bg-purple-50 w-10 h-10 flex items-center justify-center rounded-full text-purple-700 mb-4">
               <Phone size={20} />
             </div>
             <h3 className="text-lg font-serif text-neutral-900 mb-2">Call Me</h3>
             <p className="text-xl font-light text-neutral-800 mb-1">(484) 274-5444</p>
             <div className="flex items-center gap-2 text-xs text-neutral-400 uppercase tracking-widest">
               <Clock size={12} />
               <span>Mon-Fri, 9am-5pm</span>
             </div>
           </div>

           {/* Email Me */}
           <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow hover:bg-blue-50/30">
             <div className="bg-blue-50 w-10 h-10 flex items-center justify-center rounded-full text-blue-700 mb-4">
               <Mail size={20} />
             </div>
             <h3 className="text-lg font-serif text-neutral-900 mb-2">Email Me</h3>
             <a href="mailto:info@jinetteramos.com" className="text-lg font-light text-neutral-800 hover:text-blue-600 transition-colors block mb-1">
               info@jinetteramos.com
             </a>
             <p className="text-xs text-neutral-400 uppercase tracking-widest">
               I respond within 24 hours
             </p>
           </div>

           {/* Location */}
           <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow hover:bg-blue-50/30">
             <div className="bg-neutral-100 w-10 h-10 flex items-center justify-center rounded-full text-neutral-600 mb-4">
               <MapPin size={20} />
             </div>
             <h3 className="text-lg font-serif text-neutral-900 mb-2">Location</h3>
             <p className="text-lg font-light text-neutral-800 mb-2">Allentown, Pennsylvania</p>
             <div className="flex flex-col gap-1 mt-2">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-neutral-500 font-bold uppercase tracking-wide">US Flag</span>
                    <span className="text-2xl" role="img" aria-label="US Flag">🇺🇸</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-neutral-500 font-bold uppercase tracking-wide">US</span>
                </div>
                <span className="text-xs text-neutral-400 uppercase tracking-widest mt-1">Available for travel</span>
             </div>
           </div>
        </div>

        {/* Right Column: Form */}
        <div className="md:col-span-2 bg-gradient-to-br from-white via-blue-50/10 to-white rounded-3xl p-8 md:p-12 shadow-lg border border-neutral-50">
           <div className="mb-10">
             <span className="text-purple-600 font-bold uppercase tracking-widest text-xs bg-purple-50 px-3 py-1 rounded-full">Start the conversation</span>
             <h2 className="text-3xl font-serif text-neutral-900 mt-4">Tell me about your vision</h2>
             <p className="text-neutral-500 font-light mt-2">Share the details of your session, timeline, or creative brief. I respond to every inquiry within one business day.</p>
           </div>

           {formStatus === 'success' ? (
            <div className="bg-green-50 border border-green-100 rounded-2xl p-12 text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <Flag size={32} />
              </div>
              <h3 className="text-2xl text-neutral-900 font-serif mb-2">Message Sent!</h3>
              <p className="text-neutral-600 mb-6">Thank you for reaching out. I will get back to you shortly.</p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="text-xs uppercase tracking-widest text-blue-600 hover:text-blue-800 font-bold border-b border-blue-200 hover:border-blue-800 pb-1 transition-all"
              >
                Send another message
              </button>
            </div>
           ) : (
             <form onSubmit={handleSubmit} className="space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                   <label htmlFor="name" className="text-xs uppercase tracking-widest text-neutral-400 font-bold">Your Name</label>
                   <input 
                     type="text" 
                     id="name" 
                     required
                     className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-500 transition-all shadow-sm"
                     placeholder="Jane Doe"
                   />
                 </div>
                 <div className="space-y-2">
                   <label htmlFor="email" className="text-xs uppercase tracking-widest text-neutral-400 font-bold">Your Email</label>
                   <input 
                     type="email" 
                     id="email" 
                     required
                     className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-500 transition-all shadow-sm"
                     placeholder="jane@example.com"
                   />
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                   <label htmlFor="phone" className="text-xs uppercase tracking-widest text-neutral-400 font-bold">Phone Number</label>
                   <input 
                     type="tel" 
                     id="phone" 
                     className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-500 transition-all shadow-sm"
                     placeholder="(555) 123-4567"
                   />
                 </div>
                 <div className="space-y-2">
                   <label htmlFor="date" className="text-xs uppercase tracking-widest text-neutral-400 font-bold">Preferred Session Date</label>
                   <input 
                     type="date" 
                     id="date" 
                     className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-500 transition-all shadow-sm"
                   />
                 </div>
               </div>

               <div className="space-y-2">
                 <label htmlFor="message" className="text-xs uppercase tracking-widest text-neutral-400 font-bold">What can I help you with?</label>
                 <textarea 
                   id="message" 
                   required
                   rows={6}
                   className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-500 transition-all resize-none shadow-sm"
                   placeholder="Share your story, inspiration, or project details..."
                 ></textarea>
               </div>

               <button 
                 type="submit"
                 disabled={formStatus === 'submitting'}
                 className="w-full md:w-auto px-12 py-4 bg-neutral-900 text-white uppercase tracking-[0.2em] text-xs font-bold rounded-lg shadow-lg hover:bg-purple-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
               >
                 {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                 <ArrowRight size={16} />
               </button>
             </form>
           )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-24 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 text-center border border-white shadow-inner">
        <h3 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-4">Let's Tell Your Story</h3>
        <p className="text-neutral-600 font-light max-w-3xl mx-auto mb-8 leading-relaxed">
          Every story is different — and every season is sacred. Whether you're celebrating new life, family milestones, or simply wanting to remember this chapter you're in, I'd be honored to capture it.
        </p>
        <button 
          onClick={() => document.getElementById('name')?.focus()}
          className="px-8 py-3 border border-purple-200 text-purple-700 bg-white hover:bg-purple-700 hover:text-white transition-all duration-300 uppercase tracking-widest text-xs font-bold rounded-full"
        >
          Book Your Session
        </button>
      </div>

    </div>
  );
};

export default Contact;
