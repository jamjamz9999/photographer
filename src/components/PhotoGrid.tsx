import React, { useState } from 'react';
import { Photo } from '../types';
import { Plus } from 'lucide-react';

interface PhotoGridProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, onPhotoClick }) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  if (photos.length === 0) {
    return (
      <div className="w-full h-64 flex flex-col items-center justify-center text-neutral-400">
        <p className="text-lg font-light">No photos found.</p>
        <p className="text-sm mt-2">Try a different category.</p>
      </div>
    );
  }

  return (
    <div className="w-full columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 px-4 md:px-0">
      {photos.map((photo) => (
        <div 
          key={photo.id}
          className="relative break-inside-avoid group cursor-pointer overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          onClick={() => onPhotoClick(photo)}
        >
          <div className={`bg-neutral-100 transition-opacity duration-700 ${loadedImages.has(photo.id) ? 'opacity-100' : 'opacity-50'}`}>
            <img 
              src={photo.thumbnail} 
              alt={photo.title}
              className={`w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02] ${loadedImages.has(photo.id) ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => handleImageLoad(photo.id)}
              loading="lazy"
            />
          </div>
          
          {/* Overlay - Light frosted */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <div className="bg-white shadow-lg p-3 rounded-full text-neutral-900 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
               <Plus size={24} strokeWidth={1.5} />
             </div>
          </div>
          
          {/* Quick Info on Hover - Light gradient */}
          <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-white/95 via-white/60 to-transparent">
             <p className="text-neutral-900 text-sm font-serif tracking-wide">{photo.title}</p>
             <p className="text-neutral-600 text-xs mt-0.5">{photo.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;