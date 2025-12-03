import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Maximize2 } from 'lucide-react';
import { Photo } from '../types';

interface PhotoModalProps {
  photo: Photo;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ photo, isOpen, onClose, onNext, onPrev }) => {
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col md:flex-row animate-fade-in overflow-hidden">
      
      {/* Close Button - Absolute Positioned for easy access */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-3 bg-white/90 backdrop-blur hover:bg-neutral-100 rounded-full text-neutral-900 shadow-sm transition-all duration-200 group border border-neutral-200"
        title="Close"
      >
        <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* Left Panel: Image Display */}
      <div className="relative w-full md:w-[65%] lg:w-[70%] h-[50vh] md:h-full bg-neutral-50 flex items-center justify-center p-4 md:p-12 select-none">
        
        {/* Navigation Controls - Floating */}
        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-neutral-400 hover:text-purple-700 hover:bg-white rounded-full transition-all duration-300 border border-transparent hover:border-neutral-100 hover:shadow-lg"
        >
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>
        
        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-neutral-400 hover:text-purple-700 hover:bg-white rounded-full transition-all duration-300 border border-transparent hover:border-neutral-100 hover:shadow-lg"
        >
          <ChevronRight size={32} strokeWidth={1.5} />
        </button>

        {/* The Image */}
        <img 
          src={photo.url} 
          alt={photo.title}
          className="max-h-full max-w-full object-contain shadow-xl rounded-sm"
        />
      </div>

      {/* Right Panel: Content Details */}
      <div className="w-full md:w-[35%] lg:w-[30%] h-[50vh] md:h-full bg-white flex flex-col border-l border-neutral-100 overflow-y-auto">
        <div className="p-8 md:p-12 flex flex-col h-full justify-center max-w-xl mx-auto md:mx-0">
          
          <div className="mb-6">
            <span className="inline-block px-3 py-1 border border-purple-200 text-purple-700 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full bg-purple-50/50">
              {photo.category}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-900 mb-6 leading-tight">
            {photo.title}
          </h2>

          <div className="w-16 h-1 bg-purple-600 mb-8"></div>

          <p className="text-neutral-600 leading-loose font-light text-sm md:text-base mb-10">
            {photo.description}
          </p>

          {/* Mock Technical Details Section */}
          <div className="mt-auto border-t border-neutral-100 pt-8">
            <div className="grid grid-cols-2 gap-6">
               <div>
                 <div className="flex items-center gap-2 text-neutral-400 mb-1">
                   <Camera size={14} />
                   <span className="text-[10px] uppercase tracking-widest font-bold">Camera</span>
                 </div>
                 <p className="text-neutral-800 text-sm font-medium">Canon R5</p>
               </div>
               <div>
                 <div className="flex items-center gap-2 text-neutral-400 mb-1">
                   <Maximize2 size={14} />
                   <span className="text-[10px] uppercase tracking-widest font-bold">Dimensions</span>
                 </div>
                 <p className="text-neutral-800 text-sm font-medium">{photo.width} x {photo.height}</p>
               </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-neutral-400 font-mono">
               <span>ID: {photo.id}</span>
               <span>•</span>
               <span>Format: RAW</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default PhotoModal;