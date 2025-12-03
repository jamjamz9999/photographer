
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "When should I book my session?",
      answer: "I recommend booking at least 2-3 months in advance, especially if you are looking for a weekend date or a specific time during the busy fall season. For maternity sessions, it's best to reach out during your second trimester."
    },
    {
      question: "Where do sessions take place?",
      answer: "We can shoot in my comfortable, light-filled studio in Allentown, PA, or at an outdoor location within the Lehigh Valley area. I have a curated list of beautiful parks, fields, and urban spots that I love to use."
    },
    {
      question: "Do you offer wardrobe or styling help?",
      answer: "Absolutely! Styling is a huge part of the final look. Upon booking, you'll receive a detailed style guide. For maternity and newborn sessions, you also have access to my client wardrobe filled with high-end, photogenic pieces."
    },
    {
      question: "How do I book a session?",
      answer: "It's easy! You can click the 'Book Me Now' button on the homepage or fill out the form on the Contact page. I'll reply within 24-48 hours to discuss dates and details."
    },
    {
      question: "What payment methods do you accept?",
      answer: "I accept all major credit cards, checks, and Venmo. A non-refundable retainer is required to secure your date on my calendar, with the remaining balance due on the day of the session."
    },
    {
      question: "What happens if it rains or I need to reschedule?",
      answer: "If we have an outdoor session scheduled and the weather is severe, we will reschedule to the next available date at no extra cost. For illness or emergencies, I am happy to transfer your retainer to a new date one time."
    },
    {
      question: "What if I'm running late?",
      answer: "Please text or call me as soon as you know. Sessions are scheduled back-to-back or based on lighting conditions, so a late arrival may result in a shorter shooting time."
    },
    {
      question: "When will I receive my images?",
      answer: "My standard turnaround time is 2-3 weeks for portrait sessions. You will receive a private online gallery where you can view, download, and order prints of your high-resolution edited images."
    },
    {
      question: "How many photos do I get?",
      answer: "This depends on the package you choose. A standard full family session typically includes 50+ fully edited images. I believe in giving you the full story, not just a few shots."
    },
    {
      question: "Can I share my photos on social media?",
      answer: "Yes, please do! I love seeing clients share their memories. I just ask that you tag Jinette Ramos Photography and do not apply additional filters to the edited images."
    },
    {
      question: "What's your cancellation policy?",
      answer: "Retainers are non-refundable as they reserve your specific date and time, preventing others from booking. However, they are transferable to a future session if rescheduled with appropriate notice."
    },
    {
      question: "Do you photograph events or weddings?",
      answer: "My primary focus is on portraits (families, maternity, seniors), but I do take on a very limited number of intimate elopements and micro-weddings each year. Please inquire for availability."
    },
    {
      question: "What makes your work different?",
      answer: "My approach is deeply rooted in faith and connection. I don't just want to take a pretty picture; I want to capture the spirit of who you are. I blend editorial elegance with genuine emotion to create images that feel both artistic and deeply personal."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-20 animate-slide-up">
      
      {/* Header */}
      <div className="text-center mb-12 space-y-4">
        <span className="text-purple-700 font-bold uppercase tracking-widest text-xs bg-purple-50 px-3 py-1 rounded-full">Studio Policies</span>
        <h1 className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-blue-800 to-purple-900 pb-2">Frequently Asked Questions</h1>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        <p className="text-neutral-500 font-light text-lg">Because every great experience starts with clarity and care.</p>
      </div>

      {/* Accordion Container with Gradient */}
      <div className="bg-gradient-to-b from-blue-50/20 to-purple-50/20 p-8 rounded-3xl mb-20">
        <h3 className="text-center text-neutral-400 uppercase tracking-widest text-xs font-bold mb-6">
          Common Questions — Click on any question to reveal the answer
        </h3>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-neutral-100 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'bg-white shadow-lg border-blue-100 scale-[1.02]' : 'bg-white hover:shadow-md hover:border-blue-200'
              }`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-serif font-medium transition-colors ${
                  openIndex === index ? 'text-blue-900' : 'text-neutral-800'
                }`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-all duration-300 ${
                  openIndex === index ? 'bg-blue-600 text-white rotate-180' : 'bg-neutral-100 text-neutral-500 group-hover:bg-blue-50'
                }`}>
                  {<ChevronDown size={20} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-neutral-600 font-light leading-relaxed border-t border-neutral-50">
                  <div className="pt-4">{faq.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Note */}
      <div className="bg-gradient-to-br from-neutral-900 to-blue-950 text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
         <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-block p-4 bg-white/10 rounded-full backdrop-blur-sm">
               <Heart className="w-10 h-10 text-purple-400 mx-auto animate-pulse" fill="currentColor" />
            </div>
            <h3 className="text-2xl md:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-blue-100">Final Note</h3>
            <p className="text-blue-100 font-light leading-loose text-lg">
              Every session is personal to me — it's not just about taking pictures but about telling your story through emotion. My goal is that when you look at your photos, you feel seen, valued, and reminded of God's goodness in your life.
            </p>
         </div>
         {/* Subtle background pattern */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 animate-spin-slow"></div>
      </div>

    </div>
  );
};

export default FAQ;
