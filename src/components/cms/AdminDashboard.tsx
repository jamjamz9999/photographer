
import React, { useState } from 'react';
import { useContent } from './ContentContext';
import { BlogPost, CustomPage, Photo, ServiceItem, FAQItem, SiteContent } from '../../types';
import { Plus, Trash2, Edit2, X, Save, Layout, FileText, Image as ImageIcon, List, Globe, Type } from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const { 
    blogPosts, addBlogPost, deleteBlogPost, updateBlogPost, 
    content, updateContent, addCustomPage, deleteCustomPage,
    portfolioItems, addPortfolioItem, updatePortfolioItem, deletePortfolioItem,
    updateServiceItem, addServiceItem, deleteServiceItem,
    updateFAQItem, addFAQItem, deleteFAQItem
  } = useContent();
  
  const [activeTab, setActiveTab] = useState<'posts' | 'pages' | 'gallery' | 'lists'>('gallery');
  
  // --- State Management ---
  const [isEditingPost, setIsEditingPost] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<BlogPost>>({});

  const [isEditingPage, setIsEditingPage] = useState(false);
  const [currentPage, setCurrentPage] = useState<Partial<CustomPage>>({});

  const [isEditingStandardPage, setIsEditingStandardPage] = useState(false);
  const [selectedStandardPage, setSelectedStandardPage] = useState<keyof SiteContent | null>(null);

  const [isEditingPhoto, setIsEditingPhoto] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState<Partial<Photo>>({});

  // --- Blog Handlers ---
  const handleEditPost = (post: BlogPost) => { setCurrentPost(post); setIsEditingPost(true); };
  const handleNewPost = () => {
    setCurrentPost({ id: `b${Date.now()}`, title: '', date: new Date().toLocaleDateString(), excerpt: '', content: '', imageUrl: 'https://picsum.photos/800/600' });
    setIsEditingPost(true);
  };
  const savePost = () => {
    if (currentPost.id && currentPost.title) {
      const postToSave = currentPost as BlogPost;
      blogPosts.find(p => p.id === postToSave.id) ? updateBlogPost(postToSave) : addBlogPost(postToSave);
      setIsEditingPost(false); setCurrentPost({});
    }
  };
  const deletePost = (id: string) => { if (window.confirm('Delete this post?')) deleteBlogPost(id); };

  // --- Page Handlers ---
  const handleNewPage = () => {
    setCurrentPage({ id: `p${Date.now()}`, title: '', slug: '', content: '<h1>New Page</h1>' });
    setIsEditingPage(true);
  };
  const savePage = () => {
    if (currentPage.title && currentPage.slug) {
       const pageToSave = currentPage as CustomPage;
       pageToSave.slug = pageToSave.slug.toLowerCase().replace(/\s+/g, '-');
       addCustomPage(pageToSave); setIsEditingPage(false); setCurrentPage({});
    }
  };
  const deletePage = (id: string) => { if (window.confirm('Delete this page?')) deleteCustomPage(id); };

  const handleEditStandardPage = (section: keyof SiteContent) => {
    setSelectedStandardPage(section);
    setIsEditingStandardPage(true);
  };

  // --- Gallery Handlers ---
  const handleEditPhoto = (photo: Photo) => { setCurrentPhoto(photo); setIsEditingPhoto(true); };
  const handleNewPhoto = () => {
    setCurrentPhoto({ 
      id: `ph${Date.now()}`, 
      url: 'https://picsum.photos/1200/1600', 
      thumbnail: 'https://picsum.photos/600/800', 
      title: '', 
      description: '', 
      category: 'Family Portraits', 
      width: 1200, 
      height: 1600 
    });
    setIsEditingPhoto(true);
  };
  const savePhoto = () => {
    if (currentPhoto.id && currentPhoto.url) {
      const photoToSave = currentPhoto as Photo;
      portfolioItems.find(p => p.id === photoToSave.id) ? updatePortfolioItem(photoToSave) : addPortfolioItem(photoToSave);
      setIsEditingPhoto(false); setCurrentPhoto({});
    }
  };
  const deletePhoto = (id: string) => { if (window.confirm('Delete this photo?')) deletePortfolioItem(id); };

  // --- Render Edit Forms ---
  if (isEditingPost) return <EditPostForm post={currentPost} setPost={setCurrentPost} onSave={savePost} onCancel={() => setIsEditingPost(false)} />;
  if (isEditingPage) return <EditPageForm page={currentPage} setPage={setCurrentPage} onSave={savePage} onCancel={() => setIsEditingPage(false)} />;
  if (isEditingPhoto) return <EditPhotoForm photo={currentPhoto} setPhoto={setCurrentPhoto} onSave={savePhoto} onCancel={() => setIsEditingPhoto(false)} />;
  
  if (isEditingStandardPage && selectedStandardPage) {
    return (
      <EditStandardPageForm 
        section={selectedStandardPage} 
        data={content[selectedStandardPage]} 
        updateContent={updateContent} 
        onBack={() => setIsEditingStandardPage(false)} 
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-fade-in text-neutral-800">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-serif text-neutral-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-purple-900">CMS Dashboard</h1>
          <p className="text-neutral-500 text-sm font-light tracking-wide mt-1">Manage your portfolio content and settings</p>
        </div>
        
        <div className="flex items-center gap-4">
           <div className="flex bg-white rounded-xl p-1.5 shadow-sm border border-neutral-200 overflow-x-auto max-w-full">
            {[
              { id: 'gallery', icon: ImageIcon, label: 'Gallery' },
              { id: 'posts', icon: FileText, label: 'Journal' },
              { id: 'pages', icon: Layout, label: 'Pages' },
              { id: 'lists', icon: List, label: 'Lists & Data' },
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)} 
                className={`px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-neutral-900 text-white shadow-md' : 'text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900'}`}
              >
                <tab.icon size={16} /> {tab.label}
              </button>
            ))}
          </div>
          <button onClick={onLogout} className="px-4 py-2.5 rounded-xl border border-neutral-200 text-neutral-500 hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-colors text-xs font-bold uppercase tracking-widest">
            Logout
          </button>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white overflow-hidden min-h-[600px]">
        
        {/* --- GALLERY TAB --- */}
        {activeTab === 'gallery' && (
          <>
            <div className="p-8 border-b border-neutral-100 flex justify-between items-center bg-neutral-50/50">
              <div>
                <h3 className="font-serif text-xl text-neutral-900">Portfolio Images</h3>
                <p className="text-neutral-400 text-xs mt-1">Total items: {portfolioItems.length}</p>
              </div>
              <button onClick={handleNewPhoto} className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 flex items-center gap-2 text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-200 transition-all hover:scale-105">
                <Plus size={16} /> Add Photo
              </button>
            </div>
            <div className="p-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {portfolioItems.map(photo => (
                <div key={photo.id} className="group relative border border-neutral-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={photo.thumbnail} alt={photo.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-bold truncate text-neutral-900">{photo.title || 'Untitled'}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-widest rounded-full font-bold truncate max-w-full">
                      {photo.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-neutral-900/60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                    <button onClick={() => handleEditPhoto(photo)} className="p-3 bg-white rounded-full text-neutral-900 hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-lg transform hover:scale-110"><Edit2 size={16} /></button>
                    <button onClick={() => deletePhoto(photo.id)} className="p-3 bg-white rounded-full text-neutral-900 hover:bg-red-50 hover:text-red-600 transition-colors shadow-lg transform hover:scale-110"><Trash2 size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* --- POSTS TAB --- */}
        {activeTab === 'posts' && (
          <>
             <div className="p-8 border-b border-neutral-100 flex justify-between items-center bg-neutral-50/50">
              <div>
                <h3 className="font-serif text-xl text-neutral-900">Blog Posts</h3>
                <p className="text-neutral-400 text-xs mt-1">Published: {blogPosts.length}</p>
              </div>
              <button onClick={handleNewPost} className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 flex items-center gap-2 text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-200 transition-all hover:scale-105">
                <Plus size={16} /> New Post
              </button>
            </div>
            <div className="divide-y divide-neutral-100">
              {blogPosts.map(post => (
                <div key={post.id} className="p-6 flex items-center justify-between hover:bg-blue-50/30 transition-colors group">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm">
                        <img src={post.imageUrl} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-serif text-lg text-neutral-900 mb-1">{post.title}</p>
                        <div className="flex items-center gap-2 text-xs text-neutral-400">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span className="truncate max-w-xs">{post.excerpt.substring(0, 60)}...</span>
                        </div>
                      </div>
                   </div>
                   <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => handleEditPost(post)} className="px-4 py-2 bg-white border border-neutral-200 rounded-lg text-xs font-bold uppercase tracking-wider hover:border-blue-300 hover:text-blue-600 shadow-sm">Edit</button>
                      <button onClick={() => deletePost(post.id)} className="p-2 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={18} /></button>
                   </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* --- PAGES TAB --- */}
        {activeTab === 'pages' && (
          <>
            <div className="p-8 border-b border-neutral-100 flex justify-between items-center bg-neutral-50/50">
              <div>
                <h3 className="font-serif text-xl text-neutral-900">Website Pages</h3>
                <p className="text-neutral-400 text-xs mt-1">Manage all static and dynamic pages</p>
              </div>
              <button onClick={handleNewPage} className="bg-neutral-900 text-white px-6 py-3 rounded-xl hover:bg-neutral-800 flex items-center gap-2 text-xs font-bold uppercase tracking-widest shadow-lg shadow-neutral-200 transition-all hover:scale-105">
                <Plus size={16} /> Create New Page
              </button>
            </div>
            
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {/* Standard Pages Section */}
               <div className="col-span-full">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 flex items-center gap-2">
                    <Globe size={14} /> Standard Pages
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { id: 'home', label: 'Home Page', desc: 'Hero, Intro, Vision' },
                      { id: 'about', label: 'About', desc: 'Bio, Philosophy' },
                      { id: 'studio', label: 'Studio', desc: 'Spaces, Amenities Intro' },
                      { id: 'services', label: 'Services', desc: 'Experience, Journey Text' },
                      { id: 'faq', label: 'FAQ', desc: 'Intro Text' },
                      { id: 'contact', label: 'Contact', desc: 'Details, Form Intro' },
                      { id: 'footer', label: 'Footer', desc: 'Global Footer Info' },
                    ].map(page => (
                      <div key={page.id} className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer" onClick={() => handleEditStandardPage(page.id as keyof SiteContent)}>
                         <div className="flex justify-between items-start mb-3">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                               <Layout size={20} />
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-50 p-1.5 rounded-full text-neutral-400">
                               <Edit2 size={14} />
                            </div>
                         </div>
                         <h5 className="font-serif text-lg text-neutral-900 mb-1">{page.label}</h5>
                         <p className="text-xs text-neutral-400">{page.desc}</p>
                      </div>
                    ))}
                  </div>
               </div>

               {/* Custom Pages Section */}
               <div className="col-span-full border-t border-neutral-100 pt-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 flex items-center gap-2">
                    <FileText size={14} /> Custom Pages
                  </h4>
                  
                  {content.customPages.length === 0 ? (
                    <div className="bg-neutral-50 rounded-2xl p-8 text-center border border-dashed border-neutral-200">
                       <p className="text-neutral-400 text-sm mb-4">No custom pages created yet.</p>
                       <button onClick={handleNewPage} className="text-blue-600 text-xs font-bold uppercase tracking-widest hover:underline">Create Your First Page</button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {content.customPages.map(page => (
                        <div key={page.id} className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                          <div className="flex justify-between items-start mb-4">
                              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                <FileText size={20} />
                              </div>
                              <button onClick={() => deletePage(page.id)} className="p-2 text-neutral-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"><Trash2 size={14} /></button>
                          </div>
                          <h5 className="font-serif text-lg text-neutral-900 mb-1 truncate">{page.title}</h5>
                          <p className="text-xs text-neutral-400 mb-4">/{page.slug}</p>
                          <button onClick={() => { setCurrentPage(page); setIsEditingPage(true); }} className="w-full py-2 border border-neutral-200 rounded-lg text-xs font-bold text-neutral-500 uppercase tracking-wider hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all">Edit Content</button>
                        </div>
                      ))}
                    </div>
                  )}
               </div>
            </div>
          </>
        )}

        {/* --- LISTS/DATA TAB --- */}
        {activeTab === 'lists' && (
          <div className="p-8 md:p-12">
             <div className="mb-8">
               <h3 className="font-serif text-2xl text-neutral-900 mb-2">Structured Content</h3>
               <p className="text-neutral-500 font-light">Manage repeated data lists like Services and FAQs.</p>
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Services List */}
                <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm">
                   <div className="flex justify-between items-center mb-6 pb-4 border-b border-neutral-100">
                      <h4 className="font-bold text-neutral-800 flex items-center gap-2"><List size={16} /> Services Packages</h4>
                      <button onClick={() => addServiceItem({ id: `s${Date.now()}`, title: 'New Service', price: '$0', features: [] })} className="text-[10px] font-bold uppercase tracking-widest bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full hover:bg-blue-600 hover:text-white transition-all flex items-center gap-1"><Plus size={12} /> Add</button>
                   </div>
                   <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                      {content.services.items.map(item => (
                         <div key={item.id} className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 group hover:border-blue-200 transition-colors">
                            <div className="flex justify-between items-start gap-4 mb-2">
                               <input 
                                 className="font-bold bg-transparent w-full text-neutral-900 focus:bg-white focus:px-1 rounded" 
                                 value={item.title} 
                                 onChange={e => updateServiceItem({...item, title: e.target.value})} 
                                 placeholder="Service Title"
                               />
                               <button onClick={() => deleteServiceItem(item.id)} className="text-neutral-300 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
                            </div>
                            <input 
                                 className="text-blue-600 font-medium text-sm bg-transparent w-full focus:bg-white focus:px-1 rounded mb-2" 
                                 value={item.price} 
                                 onChange={e => updateServiceItem({...item, price: e.target.value})} 
                                 placeholder="Price"
                            />
                            <div className="text-xs text-neutral-400">
                               <p className="mb-1 uppercase tracking-wider text-[10px]">Features (comma separated)</p>
                               <textarea 
                                 className="w-full bg-white border border-neutral-200 rounded p-2 text-neutral-600 focus:outline-none focus:border-blue-400"
                                 value={item.features.join(', ')}
                                 onChange={e => updateServiceItem({...item, features: e.target.value.split(',').map(s => s.trim())})}
                                 rows={2}
                               />
                            </div>
                         </div>
                      ))}
                   </div>
                </div>

                {/* FAQ List */}
                <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm">
                   <div className="flex justify-between items-center mb-6 pb-4 border-b border-neutral-100">
                      <h4 className="font-bold text-neutral-800 flex items-center gap-2"><List size={16} /> FAQs</h4>
                      <button onClick={() => addFAQItem({ id: `f${Date.now()}`, question: 'New Question', answer: 'Answer' })} className="text-[10px] font-bold uppercase tracking-widest bg-purple-50 text-purple-600 px-3 py-1.5 rounded-full hover:bg-purple-600 hover:text-white transition-all flex items-center gap-1"><Plus size={12} /> Add</button>
                   </div>
                   <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                      {content.faq.items.map(item => (
                         <div key={item.id} className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 group hover:border-purple-200 transition-colors">
                            <div className="flex gap-2 mb-2">
                                <span className="text-purple-400 font-bold">Q.</span>
                                <input 
                                    className="font-bold bg-transparent w-full text-neutral-900 text-sm focus:bg-white focus:px-1 rounded" 
                                    value={item.question} 
                                    onChange={e => updateFAQItem({...item, question: e.target.value})} 
                                    placeholder="Question"
                                />
                            </div>
                            <div className="flex gap-2">
                                <span className="text-neutral-300 font-bold">A.</span>
                                <textarea 
                                    className="text-neutral-500 bg-transparent w-full text-xs resize-none focus:bg-white focus:p-2 rounded border border-transparent focus:border-purple-100 outline-none leading-relaxed" 
                                    rows={3}
                                    value={item.answer} 
                                    onChange={e => updateFAQItem({...item, answer: e.target.value})} 
                                    placeholder="Answer"
                                />
                            </div>
                            <div className="text-right mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                               <button onClick={() => deleteFAQItem(item.id)} className="text-red-400 hover:text-red-600 text-[10px] uppercase font-bold tracking-wider">Delete Item</button>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Sub-components for Forms ---

const EditPostForm: React.FC<{ post: Partial<BlogPost>, setPost: any, onSave: any, onCancel: any }> = ({ post, setPost, onSave, onCancel }) => (
  <div className="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-xl animate-fade-in border border-neutral-100">
     <div className="flex justify-between items-center mb-8 pb-6 border-b border-neutral-100">
        <h2 className="text-2xl font-serif text-neutral-900">Edit Journal Entry</h2>
        <button onClick={onCancel} className="p-2 hover:bg-neutral-100 rounded-full transition-colors"><X size={20} /></button>
     </div>
     <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Title</label>
              <input className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none" placeholder="Title" value={post.title} onChange={e => setPost({...post, title: e.target.value})} />
           </div>
           <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Publish Date</label>
              <input className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none" placeholder="Date" value={post.date} onChange={e => setPost({...post, date: e.target.value})} />
           </div>
        </div>
        <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Cover Image URL</label>
            <input className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none text-sm font-mono text-neutral-600" placeholder="Image URL" value={post.imageUrl} onChange={e => setPost({...post, imageUrl: e.target.value})} />
        </div>
        <div className="space-y-2">
             <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Short Excerpt</label>
            <textarea className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none" rows={3} placeholder="Excerpt" value={post.excerpt} onChange={e => setPost({...post, excerpt: e.target.value})} />
        </div>
        <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Full Content (HTML Supported)</label>
            <textarea className="w-full p-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none font-mono text-sm leading-relaxed" rows={12} placeholder="HTML Content" value={post.content} onChange={e => setPost({...post, content: e.target.value})} />
        </div>
        <div className="pt-4 flex justify-end gap-4">
           <button onClick={onCancel} className="px-6 py-3 border border-neutral-200 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-neutral-50">Cancel</button>
           <button onClick={onSave} className="px-8 py-3 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all">Save Post</button>
        </div>
     </div>
  </div>
);

const EditPageForm: React.FC<{ page: Partial<CustomPage>, setPage: any, onSave: any, onCancel: any }> = ({ page, setPage, onSave, onCancel }) => (
  <div className="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-xl animate-fade-in border border-neutral-100">
     <div className="flex justify-between items-center mb-8 pb-6 border-b border-neutral-100">
        <h2 className="text-2xl font-serif text-neutral-900">Edit Custom Page</h2>
        <button onClick={onCancel} className="p-2 hover:bg-neutral-100 rounded-full transition-colors"><X size={20} /></button>
     </div>
     <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Page Title</label>
              <input className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none" placeholder="Page Title" value={page.title} onChange={e => setPage({...page, title: e.target.value})} />
           </div>
           <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">URL Slug</label>
              <input className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none" placeholder="my-new-page" value={page.slug} onChange={e => setPage({...page, slug: e.target.value})} />
           </div>
        </div>
        <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Page Content (HTML)</label>
            <textarea className="w-full p-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none font-mono text-sm leading-relaxed" rows={20} placeholder="HTML Content" value={page.content} onChange={e => setPage({...page, content: e.target.value})} />
        </div>
        <div className="pt-4 flex justify-end gap-4">
           <button onClick={onCancel} className="px-6 py-3 border border-neutral-200 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-neutral-50">Cancel</button>
           <button onClick={onSave} className="px-8 py-3 bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg hover:bg-neutral-800 hover:scale-105 transition-all">Save Page</button>
        </div>
     </div>
  </div>
);

const EditPhotoForm: React.FC<{ photo: Partial<Photo>, setPhoto: any, onSave: any, onCancel: any }> = ({ photo, setPhoto, onSave, onCancel }) => (
  <div className="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-xl animate-fade-in border border-neutral-100">
     <div className="flex justify-between items-center mb-8 pb-6 border-b border-neutral-100">
        <h2 className="text-2xl font-serif text-neutral-900">Edit Photo Details</h2>
        <button onClick={onCancel} className="p-2 hover:bg-neutral-100 rounded-full transition-colors"><X size={20} /></button>
     </div>
     <div className="flex flex-col md:flex-row gap-8">
        {/* Image Preview */}
        <div className="w-full md:w-1/3 space-y-4">
            <div className="aspect-[3/4] bg-neutral-100 rounded-xl overflow-hidden border border-neutral-200 shadow-inner">
               <img src={photo.thumbnail} className="w-full h-full object-cover" />
            </div>
            <p className="text-center text-xs text-neutral-400">Preview</p>
        </div>
        
        {/* Form Fields */}
        <div className="w-full md:w-2/3 space-y-6">
            <div className="space-y-2">
               <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Title</label>
               <input className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none" placeholder="Title" value={photo.title} onChange={e => setPhoto({...photo, title: e.target.value})} />
            </div>
            <div className="space-y-2">
               <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Category</label>
               <select className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none" value={photo.category} onChange={e => setPhoto({...photo, category: e.target.value})}>
                  <option>Family Portraits</option>
                  <option>Maternity & Newborns</option>
                  <option>Senior Grads</option>
                  <option>Couples & Engagements</option>
                  <option>Professional Headshots</option>
                  <option>Creative & Artistic</option>
               </select>
            </div>
            <div className="space-y-2">
               <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Full Image URL</label>
               <input className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none text-sm font-mono" placeholder="Image URL" value={photo.url} onChange={e => setPhoto({...photo, url: e.target.value})} />
            </div>
            <div className="space-y-2">
               <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Thumbnail URL</label>
               <input className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none text-sm font-mono" placeholder="Thumbnail URL" value={photo.thumbnail} onChange={e => setPhoto({...photo, thumbnail: e.target.value})} />
            </div>
            <div className="space-y-2">
               <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Description</label>
               <textarea className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none" rows={3} placeholder="Description" value={photo.description} onChange={e => setPhoto({...photo, description: e.target.value})} />
            </div>
            <div className="pt-4 flex justify-end gap-4">
               <button onClick={onCancel} className="px-6 py-3 border border-neutral-200 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-neutral-50">Cancel</button>
               <button onClick={onSave} className="px-8 py-3 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all">Save Photo</button>
            </div>
        </div>
     </div>
  </div>
);

const EditStandardPageForm: React.FC<{ section: keyof SiteContent, data: any, updateContent: any, onBack: any }> = ({ section, data, updateContent, onBack }) => {
  const formatLabel = (key: string) => key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-3xl shadow-xl animate-fade-in border border-neutral-100 mb-12">
      <div className="flex justify-between items-center mb-8 pb-6 border-b border-neutral-100">
        <div className="flex items-center gap-4">
           <button onClick={onBack} className="p-2 bg-neutral-50 hover:bg-neutral-100 rounded-full text-neutral-500 transition-colors"><X size={20} /></button>
           <div>
              <h2 className="text-2xl font-serif text-neutral-900 capitalize">{section} Page Content</h2>
              <p className="text-neutral-400 text-xs mt-1">Editing text fields for {section} page</p>
           </div>
        </div>
        <button onClick={onBack} className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 flex items-center gap-2 text-xs font-bold uppercase tracking-widest shadow-lg shadow-green-200 transition-all">
           <Save size={16} /> Done Editing
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {Object.keys(data).map(key => {
          if (Array.isArray(data[key])) return null;
          
          const value = data[key];
          const isLongText = value.length > 100;

          return (
             <div key={key} className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                   <Type size={12} /> {formatLabel(key)}
                </label>
                {isLongText ? (
                   <textarea 
                      className="w-full p-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none leading-relaxed"
                      rows={5}
                      value={value}
                      onChange={(e) => updateContent(section, key, e.target.value)}
                   />
                ) : (
                   <input 
                      className="w-full p-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none"
                      value={value}
                      onChange={(e) => updateContent(section, key, e.target.value)}
                   />
                )}
             </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminDashboard;
