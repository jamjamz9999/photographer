
import React, { useState } from 'react';
import { Search, Loader2, X } from 'lucide-react';
import { searchPhotosWithGemini } from '../services/geminiService';
import { Photo } from '../types';

interface SmartSearchProps {
  allPhotos: Photo[];
  onSearchResults: (ids: string[] | null) => void; // null means reset/show all
}

const SmartSearch: React.FC<SmartSearchProps> = ({ allPhotos, onSearchResults }) => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setActiveFilter(query);
    
    const matchedIds = await searchPhotosWithGemini(query, allPhotos);
    
    onSearchResults(matchedIds);
    setIsSearching(false);
  };

  const clearSearch = () => {
    setQuery('');
    setActiveFilter(null);
    onSearchResults(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-12 px-4">
      <form onSubmit={handleSearch} className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          {isSearching ? (
            <Loader2 className="h-5 w-5 text-neutral-400 animate-spin" />
          ) : (
            <Search className="h-5 w-5 text-neutral-500 group-focus-within:text-neutral-300 transition-colors" />
          )}
        </div>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search portfolio (e.g., 'joyful family' or 'creative senior')..."
          className="w-full bg-neutral-900/50 border border-neutral-800 text-neutral-200 rounded-full py-3 pl-12 pr-12 focus:outline-none focus:ring-1 focus:ring-neutral-600 focus:bg-neutral-900 transition-all text-sm font-light tracking-wide placeholder:text-neutral-600"
        />

        {/* Search Button (Hidden visually but allows Enter key submit, or visible icon click) */}
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-neutral-500 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </form>
      
      {activeFilter && !isSearching && (
        <div className="text-center mt-4 text-sm text-neutral-500 animate-fade-in">
          Showing results for <span className="text-neutral-300 italic">"{activeFilter}"</span>
          <button 
            onClick={clearSearch}
            className="ml-2 text-xs text-blue-400 hover:text-blue-300 underline"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default SmartSearch;