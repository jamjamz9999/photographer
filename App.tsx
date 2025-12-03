
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PhotoGrid from './components/PhotoGrid';
import PhotoModal from './components/PhotoModal';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Studio from './components/Studio';
import Services from './components/Services';
import FAQ from './components/FAQ';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/cms/AdminDashboard';
import LocationPage from './components/LocationPage';
import { ContentProvider, useContent } from './components/cms/ContentContext';
import { ViewState } from './types';
import { Edit3 } from 'lucide-react';

const MainApp: React.FC = () => {
  const { content, portfolioItems, isAdmin, toggleEditMode, isEditMode, logout } = useContent();
  const [activeTab, setActiveTab] = useState<ViewState>('home');
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(null);
  
  // State for category filtering
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Scroll to top whenever activeTab changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [activeTab]);

  // Check if current tab is a custom page
  const isCustomPage = activeTab.startsWith('page-');
  const customPageSlug = isCustomPage ? activeTab.replace('page-', '') : null;
  const customPage = customPageSlug ? content.customPages.find(p => p.slug === customPageSlug) : null;

  // Derived state for displayed photos - USING CONTEXT ITEMS
  const displayPhotos = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(p => p.category === activeCategory);

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(portfolioItems.map(p => p.category)))];

  // Modal helpers
  const selectedPhoto = portfolioItems.find(p => p.id === selectedPhotoId);
  
  const handleNext = () => {
    if (!selectedPhotoId) return;
    const currentIndex = displayPhotos.findIndex(p => p.id === selectedPhotoId);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % displayPhotos.length;
    setSelectedPhotoId(displayPhotos[nextIndex].id);
  };

  const handlePrev = () => {
    if (!selectedPhotoId) return;
    const currentIndex = displayPhotos.findIndex(p => p.id === selectedPhotoId);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + displayPhotos.length) % displayPhotos.length;
    setSelectedPhotoId(displayPhotos[prevIndex].id);
  };

  const handleNav = (tab: ViewState) => {
    setActiveTab(tab);
  };

  // --- Admin Route ---
  if (activeTab === 'admin') {
    return isAdmin ? (
      <AdminDashboard 
        onLogout={() => {
          logout();
          setActiveTab('home');
        }} 
      />
    ) : <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-neutral-900 selection:text-white">
      
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Admin Toolbar */}
      {isAdmin && (
        <button 
          onClick={toggleEditMode}
          className={`fixed bottom-4 left-4 z-[100] px-4 py-2 rounded-full shadow-lg font-bold text-xs flex items-center gap-2 transition-colors ${isEditMode ? 'bg-yellow-400 text-black' : 'bg-neutral-900 text-white'}`}
        >
          <Edit3 size={16} />
          {isEditMode ? 'Exit Edit Mode' : 'Enter Edit Mode'}
        </button>
      )}

      {/* Main Content Area - Pushed right on desktop by 18rem (w-72) */}
      <main className={`w-full md:pl-72 min-h-screen flex flex-col transition-all duration-500`}>
        
        {activeTab === 'home' && (
          <Home 
            onEnter={() => handleNav('portfolio')}
            onBook={() => handleNav('contact')}
            onStudio={() => handleNav('studio')}
            onFAQ={() => handleNav('faq')}
            onServices={() => handleNav('services')}
          />
        )}

        {activeTab !== 'home' && (
          <div className="flex-grow w-full max-w-7xl mx-auto py-12 px-6 md:px-12 animate-fade-in">
            
            {activeTab === 'portfolio' && (
              <div className="rounded-3xl p-6 md:p-12 bg-gradient-to-br from-purple-50/40 via-transparent to-blue-50/40 mb-12">
                <div className="text-center mb-10 px-4">
                  <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4 tracking-wide">Selected Works</h2>
                  <p className="text-neutral-500 font-light max-w-lg mx-auto text-sm md:text-base mb-8">
                    Exploring the delicate balance between light, shadow, and the human experience.
                  </p>

                  {/* Category Filter */}
                  <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-neutral-200 pb-4 mb-8">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-xs md:text-sm uppercase tracking-widest transition-colors ${
                          activeCategory === cat 
                            ? 'text-purple-800 font-medium' 
                            : 'text-neutral-400 hover:text-purple-600'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pb-12">
                   <PhotoGrid 
                     photos={displayPhotos} 
                     onPhotoClick={(photo) => setSelectedPhotoId(photo.id)} 
                   />
                </div>
              </div>
            )}

            {activeTab === 'blog' && <Blog />}
            {activeTab === 'studio' && <Studio />}
            {activeTab === 'services' && <Services />}
            {activeTab === 'faq' && <FAQ />}
            {activeTab === 'about' && <About />}
            {activeTab === 'contact' && <Contact />}
            
            {/* Location Pages */}
            {activeTab === 'location-allentown' && <LocationPage city="Allentown" onBook={() => handleNav('contact')} />}
            {activeTab === 'location-bethlehem' && <LocationPage city="Bethlehem" onBook={() => handleNav('contact')} />}
            {activeTab === 'location-easton' && <LocationPage city="Easton" onBook={() => handleNav('contact')} />}
            {activeTab === 'location-emmaus' && <LocationPage city="Emmaus" onBook={() => handleNav('contact')} />}
            {activeTab === 'location-nazareth' && <LocationPage city="Nazareth" onBook={() => handleNav('contact')} />}
            
            {/* Render Custom Page Content from CMS */}
            {isCustomPage && customPage && (
              <div className="max-w-4xl mx-auto animate-slide-up">
                 <h1 className="text-4xl font-serif text-neutral-900 mb-8 text-center">{customPage.title}</h1>
                 <div 
                    className="prose prose-lg prose-blue max-w-none font-light text-neutral-600"
                    dangerouslySetInnerHTML={{ __html: customPage.content }}
                 />
              </div>
            )}

            {isCustomPage && !customPage && (
              <div className="text-center py-20 text-neutral-400">Page not found.</div>
            )}

          </div>
        )}

        {/* Footer is now at the bottom of the content scroll area. STRICTLY HIDDEN IN EDIT MODE. */}
        {!isEditMode && activeTab !== 'home' && <Footer onNavigate={(page) => handleNav(page)} />}

      </main>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <PhotoModal 
          photo={selectedPhoto}
          isOpen={!!selectedPhoto}
          onClose={() => setSelectedPhotoId(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ContentProvider>
      <MainApp />
    </ContentProvider>
  );
};

export default App;
