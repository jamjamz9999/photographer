
import React, { createContext, useContext, useState, useEffect } from 'react';
import { BlogPost, SiteContent, CustomPage, Photo, ServiceItem, FAQItem } from '../../types';
import { BLOG_POSTS, SITE_NAME, PORTFOLIO_ITEMS } from '../../constants';

interface ContentContextType {
  content: SiteContent;
  blogPosts: BlogPost[];
  portfolioItems: Photo[];
  isAdmin: boolean;
  isEditMode: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  toggleEditMode: () => void;
  updateContent: (section: keyof SiteContent, key: string, value: any) => void;
  addBlogPost: (post: BlogPost) => void;
  updateBlogPost: (post: BlogPost) => void;
  deleteBlogPost: (id: string) => void;
  addCustomPage: (page: CustomPage) => void;
  deleteCustomPage: (id: string) => void;
  // Gallery Actions
  addPortfolioItem: (photo: Photo) => void;
  updatePortfolioItem: (photo: Photo) => void;
  deletePortfolioItem: (id: string) => void;
  // List Actions for Services/FAQ
  updateServiceItem: (item: ServiceItem) => void;
  addServiceItem: (item: ServiceItem) => void;
  deleteServiceItem: (id: string) => void;
  updateFAQItem: (item: FAQItem) => void;
  addFAQItem: (item: FAQItem) => void;
  deleteFAQItem: (id: string) => void;
}

const defaultContent: SiteContent = {
  home: {
    heroTitle: SITE_NAME,
    heroSubtitle: "Albany, USA",
    introHeading: "Jinette Ramos: The best photographer in Allen Town, USA. Capturing Moments",
    introText: "Hi, I'm Jinette Ramos, a portrait photographer, faith-filled creative, and proud mom of seven. I specialize in capturing families, expecting moms, newborns, couples, and seniors with a warm, timeless touch and a hint of editorial elegance. My passion for photography is rooted in my faith and fueled by connection, joy, and storytelling. Every session is a reflection of love, purpose, and the beauty of who you are.",
    visionHeading: "My vision is to build a photography brand that inspires others to see the beauty in their story.",
    visionText: "Through timeless, editorial-inspired imagery and a faith-centered approach, I aim to preserve memories that speak of love, legacy, and divine intention, while fostering a creative community rooted in encouragement, purpose, and light."
  },
  about: {
    title: "Professional Photographer & Visual Storyteller",
    bio: "I'm the heart and eye behind Jinette Ramos Photography — a portrait photographer based in the Lehigh Valley, Pennsylvania. I specialize in family photography, maternity portraits, newborn sessions, couples, and senior graduates, creating timeless imagery with a subtle editorial flare.",
    funFactsTitle: "Fun Facts About Me",
    philosophyTitle: "My Philosophy",
    philosophyText: "Photography is empathy translated into light. Sessions are designed to feel easy, collaborative, and deeply personal so every image holds true emotion. I balance intentional posing with candid storytelling, making space for laughter, stillness, and the quiet moments in between."
  },
  studio: {
    title: "The Studio",
    intro: "A light-filled, creative space designed for comfort and versatility. The perfect environment to bring your photography vision to life."
  },
  contact: {
    title: "Get In Touch",
    intro: "Ready to capture your story? I'd love to hear about your photography needs and discuss how we can create something beautiful together.",
    phone: "(484) 274-5444",
    email: "info@jinetteramos.com",
    address: "Allentown, Pennsylvania"
  },
  services: {
    heroTitle: "More Than Photos — It's a Moment to Remember",
    heroText: "At Jinette Ramos Photography, I believe your session should feel just as meaningful as the images themselves. Every detail — from our first conversation to your final gallery — is intentionally crafted to reflect your story, your connection, and the beauty in your life.",
    items: [
      { id: 's1', title: "Family Sessions", price: "Starting at $450", features: ["1 Hour Session", "On-Location or Studio", "50+ Edited High-Res Images", "Online Gallery"] },
      { id: 's2', title: "Maternity & Newborn", price: "Starting at $550", features: ["Up to 2 Hours", "Access to Client Wardrobe", "Family Portraits Included", "Heirloom Print Credit"] },
      { id: 's3', title: "Senior Portraits", price: "Starting at $400", features: ["2 Outfit Changes", "Multiple Locations", "Yearbook Submission", "Social Media Files"] },
      { id: 's4', title: "Couples & Engagements", price: "Starting at $450", features: ["Sunset Golden Hour", "Styling Assistance", "Online Print Store", "Engagement Guide"] },
      { id: 's5', title: "Professional Headshots", price: "Starting at $250", features: ["30 Minute Session", "Studio or Environmental", "3 Retouched Images", "Commercial Usage Rights"] }
    ]
  },
  faq: {
    title: "Frequently Asked Questions",
    intro: "Because every great experience starts with clarity and care.",
    items: [
      { id: 'f1', question: "When should I book my session?", answer: "I recommend booking at least 2-3 months in advance." },
      { id: 'f2', question: "Where do sessions take place?", answer: "We can shoot in my comfortable, light-filled studio in Allentown, PA, or at an outdoor location." },
      { id: 'f3', question: "Do you offer wardrobe or styling help?", answer: "Absolutely! Styling is a huge part of the final look." }
    ]
  },
  footer: {
    phone: "(484) 274-5444",
    email: "info@jinetteramos.com",
    location: "Allentown, PA"
  },
  customPages: []
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from localStorage or defaults
  const [content, setContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem('site_content_v2'); // Versioned to force refresh if needed
    return saved ? JSON.parse(saved) : defaultContent;
  });

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('site_blog_posts');
    return saved ? JSON.parse(saved) : BLOG_POSTS;
  });

  const [portfolioItems, setPortfolioItems] = useState<Photo[]>(() => {
    const saved = localStorage.getItem('site_portfolio_items');
    return saved ? JSON.parse(saved) : PORTFOLIO_ITEMS;
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('site_is_admin') === 'true';
  });

  const [isEditMode, setIsEditMode] = useState(false);

  // Persistence
  useEffect(() => {
    localStorage.setItem('site_content_v2', JSON.stringify(content));
  }, [content]);

  useEffect(() => {
    localStorage.setItem('site_blog_posts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem('site_portfolio_items', JSON.stringify(portfolioItems));
  }, [portfolioItems]);

  useEffect(() => {
    localStorage.setItem('site_is_admin', String(isAdmin));
  }, [isAdmin]);

  // Actions
  const login = (username: string, pass: string) => {
    if (username === 'admin' && pass === 'james') {
      setIsAdmin(true);
      setIsEditMode(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    setIsEditMode(false);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const updateContent = (section: keyof SiteContent, key: string, value: any) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  const addBlogPost = (post: BlogPost) => {
    setBlogPosts(prev => [post, ...prev]);
  };

  const updateBlogPost = (updatedPost: BlogPost) => {
    setBlogPosts(prev => prev.map(p => p.id === updatedPost.id ? updatedPost : p));
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(p => p.id !== id));
  };

  const addCustomPage = (page: CustomPage) => {
    setContent(prev => ({
      ...prev,
      customPages: [...prev.customPages, page]
    }));
  };

  const deleteCustomPage = (id: string) => {
    setContent(prev => ({
      ...prev,
      customPages: prev.customPages.filter(p => p.id !== id)
    }));
  };

  // Portfolio Actions
  const addPortfolioItem = (photo: Photo) => {
    setPortfolioItems(prev => [photo, ...prev]);
  };

  const updatePortfolioItem = (updatedPhoto: Photo) => {
    setPortfolioItems(prev => prev.map(p => p.id === updatedPhoto.id ? updatedPhoto : p));
  };

  const deletePortfolioItem = (id: string) => {
    setPortfolioItems(prev => prev.filter(p => p.id !== id));
  };

  // Services Actions
  const updateServiceItem = (item: ServiceItem) => {
    const newItems = content.services.items.map(i => i.id === item.id ? item : i);
    updateContent('services', 'items', newItems);
  };

  const addServiceItem = (item: ServiceItem) => {
    const newItems = [...content.services.items, item];
    updateContent('services', 'items', newItems);
  };

  const deleteServiceItem = (id: string) => {
    const newItems = content.services.items.filter(i => i.id !== id);
    updateContent('services', 'items', newItems);
  };

  // FAQ Actions
  const updateFAQItem = (item: FAQItem) => {
    const newItems = content.faq.items.map(i => i.id === item.id ? item : i);
    updateContent('faq', 'items', newItems);
  };

  const addFAQItem = (item: FAQItem) => {
    const newItems = [...content.faq.items, item];
    updateContent('faq', 'items', newItems);
  };

  const deleteFAQItem = (id: string) => {
    const newItems = content.faq.items.filter(i => i.id !== id);
    updateContent('faq', 'items', newItems);
  };

  return (
    <ContentContext.Provider value={{
      content,
      blogPosts,
      portfolioItems,
      isAdmin,
      isEditMode,
      login,
      logout,
      toggleEditMode,
      updateContent,
      addBlogPost,
      updateBlogPost,
      deleteBlogPost,
      addCustomPage,
      deleteCustomPage,
      addPortfolioItem,
      updatePortfolioItem,
      deletePortfolioItem,
      updateServiceItem,
      addServiceItem,
      deleteServiceItem,
      updateFAQItem,
      addFAQItem,
      deleteFAQItem
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
