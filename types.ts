
export interface Photo {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  category: 'Family Portraits' | 'Maternity & Newborns' | 'Senior Grads' | 'Couples & Engagements' | 'Professional Headshots' | 'Creative & Artistic';
  width: number;
  height: number;
}

export type ViewState = 'home' | 'portfolio' | 'about' | 'contact' | 'blog' | 'studio' | 'faq' | 'services' | 'admin' | 'location-allentown' | 'location-bethlehem' | 'location-easton' | 'location-emmaus' | 'location-nazareth' | string;

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
}

export interface SearchResponse {
  matchedIds: string[];
}

// CMS Types

export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SiteContent {
  home: {
    heroTitle: string;
    heroSubtitle: string;
    introHeading: string;
    introText: string;
    visionHeading: string;
    visionText: string;
  };
  about: {
    title: string;
    bio: string;
    funFactsTitle: string;
    philosophyTitle: string;
    philosophyText: string;
  };
  studio: {
    title: string;
    intro: string;
  };
  contact: {
    title: string;
    intro: string;
    phone: string;
    email: string;
    address: string;
  };
  services: {
    heroTitle: string;
    heroText: string;
    items: ServiceItem[];
  };
  faq: {
    title: string;
    intro: string;
    items: FAQItem[];
  };
  footer: {
    phone: string;
    email: string;
    location: string;
  };
  customPages: CustomPage[];
}

export interface CustomPage {
  id: string;
  title: string;
  slug: string;
  content: string;
}
