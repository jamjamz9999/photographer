
import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, ArrowLeft, Calendar, Share2, Clock } from 'lucide-react';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  const postsPerPage = 4;
  const totalPages = Math.ceil(BLOG_POSTS.length / postsPerPage);
  
  // Calculate displayed posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = BLOG_POSTS.slice(indexOfFirstPost, indexOfLastPost);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Article Detail View ---
  if (selectedPost) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 animate-fade-in">
        {/* Back Button */}
        <button 
          onClick={handleBack}
          className="group flex items-center gap-2 text-neutral-500 hover:text-blue-700 transition-colors mb-8 text-xs uppercase tracking-widest font-bold"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Journal
        </button>

        {/* Article Container */}
        <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-100">
          
          {/* Hero Image */}
          <div className="h-[400px] md:h-[500px] w-full relative overflow-hidden">
            <img 
              src={selectedPost.imageUrl} 
              alt={selectedPost.title} 
              className="w-full h-full object-cover animate-pan-fast" 
              style={{ animationDuration: '30s' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white w-full">
              <div className="flex items-center gap-4 mb-4 text-xs uppercase tracking-widest opacity-90">
                <span className="flex items-center gap-1"><Calendar size={14} /> {selectedPost.date}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> 5 min read</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-serif leading-tight">{selectedPost.title}</h1>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-8 md:p-16">
             {/* Using dangerouslySetInnerHTML for the dummy HTML content structure */}
             <div 
               className="prose prose-lg prose-blue max-w-none text-neutral-600 font-light leading-loose font-serif"
               dangerouslySetInnerHTML={{ __html: selectedPost.content }} 
             />
             
             {/* Share / Footer of Article */}
             <div className="mt-16 pt-8 border-t border-neutral-100 flex justify-between items-center">
               <span className="text-sm text-neutral-400 italic">Written by Jinette Ramos</span>
               <button className="flex items-center gap-2 text-neutral-400 hover:text-blue-600 transition-colors">
                 <Share2 size={18} />
                 <span className="text-xs uppercase tracking-widest">Share</span>
               </button>
             </div>
          </div>
        </article>
      </div>
    );
  }

  // --- List View ---
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 animate-slide-up rounded-3xl bg-gradient-to-br from-blue-50/20 via-white to-purple-50/20">
      
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">Journal</h2>
        <p className="text-neutral-500 font-light text-sm md:text-base">
          Thoughts on process, gear, and the philosophy of seeing.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {currentPosts.map((post, index) => (
          <div 
            key={post.id} 
            onClick={() => handlePostClick(post)}
            className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-neutral-100 cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            
            {/* Image Container */}
            <div className="h-64 w-full overflow-hidden bg-neutral-100 relative">
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 z-10 transition-colors duration-300"></div>
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-8 flex flex-col relative">
              <div className="mb-4">
                <span className="text-[10px] uppercase tracking-widest text-purple-600 font-bold bg-purple-50 px-2 py-1 rounded-sm">
                  {post.date}
                </span>
              </div>
              
              <h3 className="text-xl font-serif text-neutral-900 mb-3 group-hover:text-blue-800 transition-colors leading-tight">
                {post.title}
              </h3>
              
              <p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow font-light line-clamp-3">
                {post.excerpt}
              </p>

              <div>
                <span className="inline-flex items-center gap-2 text-blue-700 text-xs uppercase tracking-widest font-bold group-hover:gap-3 transition-all duration-300">
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-16 flex justify-center items-center gap-2 animate-fade-in">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 ${
                currentPage === page 
                  ? 'bg-blue-700 text-white shadow-md scale-110' 
                  : 'bg-white border border-neutral-200 text-neutral-500 hover:border-blue-400 hover:text-blue-700'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}

    </div>
  );
};

export default Blog;
