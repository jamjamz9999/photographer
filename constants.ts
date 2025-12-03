
import { Photo, BlogPost } from './types';

export const SITE_NAME = "JINETTE RAMOS";
export const SITE_SUBTITLE = "PHOTOGRAPHY STUDIO";

// Portfolio items using high-quality Unsplash images
export const PORTFOLIO_ITEMS: Photo[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=600&auto=format&fit=crop',
    title: 'The Sunday Gathering',
    description: 'A candid moment of laughter during a multi-generational family session in the park.',
    category: 'Family Portraits',
    width: 1200,
    height: 1600
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=600&auto=format&fit=crop',
    title: 'Waiting for You',
    description: 'Soft natural light highlighting the anticipation of a new mother.',
    category: 'Maternity & Newborns',
    width: 1000,
    height: 1500
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    title: 'Class of 2025',
    description: 'Celebrating a milestone achievement with a confident urban senior portrait.',
    category: 'Senior Grads',
    width: 1200,
    height: 1800
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=600&auto=format&fit=crop',
    title: 'Golden Hour Promise',
    description: 'An engagement session captured during the last warm light of the day.',
    category: 'Couples & Engagements',
    width: 1600,
    height: 1000
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    title: 'Executive Presence',
    description: 'Clean, modern professional headshot for a creative director.',
    category: 'Professional Headshots',
    width: 1000,
    height: 1200
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1400&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=600&auto=format&fit=crop',
    title: 'Prism Light',
    description: 'An artistic exploration using light refraction and double exposure.',
    category: 'Creative & Artistic',
    width: 1400,
    height: 1400
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1500&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop',
    title: 'Home Comforts',
    description: 'Lifestyle family photography captured in the comfort of the living room.',
    category: 'Family Portraits',
    width: 1500,
    height: 1000
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1519755899023-b7882898d9f9?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1519755899023-b7882898d9f9?q=80&w=600&auto=format&fit=crop',
    title: 'Tiny Toes',
    description: 'Macro details of a newborn baby, focusing on delicate features.',
    category: 'Maternity & Newborns',
    width: 1200,
    height: 1200
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=600&auto=format&fit=crop',
    title: 'Field Dreams',
    description: 'A high school senior amidst tall grass at sunset.',
    category: 'Senior Grads',
    width: 1100,
    height: 1650
  },
  {
    id: '10',
    url: 'https://images.unsplash.com/photo-1534030347209-7147fd9e7513?q=80&w=1000&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1534030347209-7147fd9e7513?q=80&w=600&auto=format&fit=crop',
    title: 'Studio Minimalist',
    description: 'A stark, high-contrast black and white headshot.',
    category: 'Professional Headshots',
    width: 1000,
    height: 1000
  },
  {
    id: '11',
    url: 'https://images.unsplash.com/photo-1516575334481-f85287c2c81d?q=80&w=1600&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1516575334481-f85287c2c81d?q=80&w=600&auto=format&fit=crop',
    title: 'City Romance',
    description: 'A couple walking hand-in-hand through downtown historic streets.',
    category: 'Couples & Engagements',
    width: 1600,
    height: 1200
  },
  {
    id: '12',
    url: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=600&auto=format&fit=crop',
    title: 'Motion Blur Dance',
    description: 'Slow shutter speed capturing the movement of fabric in a dance.',
    category: 'Creative & Artistic',
    width: 1200,
    height: 1800
  },
   {
    id: '13',
    url: 'https://images.unsplash.com/photo-1508004680771-708b02aabdc0?q=80&w=1800&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1508004680771-708b02aabdc0?q=80&w=600&auto=format&fit=crop',
    title: 'Autumn Picnic',
    description: 'A family enjoying the fall foliage with genuine smiles.',
    category: 'Family Portraits',
    width: 1800,
    height: 1200
  },
  {
    id: '14',
    url: 'https://images.unsplash.com/photo-1519794206461-cccd9b358d15?q=80&w=1000&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1519794206461-cccd9b358d15?q=80&w=600&auto=format&fit=crop',
    title: 'Silhouette of Life',
    description: 'A dramatic silhouette maternity shot against a bright window.',
    category: 'Maternity & Newborns',
    width: 1000,
    height: 1500
  },
  {
    id: '15',
    url: 'https://images.unsplash.com/photo-1529397938791-2aba4681454f?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1529397938791-2aba4681454f?q=80&w=600&auto=format&fit=crop',
    title: 'Varsity Spirit',
    description: 'Incorporating sports gear into a dynamic senior portrait.',
    category: 'Senior Grads',
    width: 1200,
    height: 1600
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Resurgence of Film Photography in 2025',
    date: 'January 15, 2025',
    excerpt: 'Why digital natives are flocking back to 35mm and medium format for that authentic, imperfect aesthetic.',
    content: `
      <p>In an era of AI-generated imagery and hyper-perfect digital sensors, there is a growing movement towards the tangible, imperfect beauty of film. 2025 has seen a massive spike in 35mm sales.</p>
      <h3>The Tactile Experience</h3>
      <p>Slowing down to load a roll, wind the shutter, and wait for development brings a mindfulness to photography that is often lost in the spray-and-pray digital world.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1495121553079-4c61bc118bce?q=80&w=800'
  },
  {
    id: 'b2',
    title: 'Mastering Mirrorless: Top Gear of 2024',
    date: 'December 10, 2024',
    excerpt: 'A comprehensive look at the flagship mirrorless bodies that defined the professional landscape last year.',
    content: `
      <p>2024 was the year mirrorless officially killed the DSLR for professionals. With global shutters and AI autofocus, cameras like the Canon R1 and Sony A9 III changed the game.</p>
      <h3>AI Autofocus</h3>
      <p>The ability to track eyes, vehicles, and even animals through dense brush has made wildlife and sports photography more accessible than ever.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800'
  },
  {
    id: 'b3',
    title: 'Color Theory for Emotional Portraits',
    date: 'November 22, 2024',
    excerpt: 'How to use color grading to evoke specific emotions in your portrait work.',
    content: `
      <p>Color is a language. Warm tones evoke nostalgia and comfort, while cool tones can create distance or melancholy. This guide explores the psychology of color in portraiture.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800'
  },
  {
    id: 'b4',
    title: 'The Art of the Micro-Wedding',
    date: 'September 14, 2024',
    excerpt: 'Why intimate ceremonies are persisting long past the pandemic era.',
    content: `
      <p>Couples are continuing to prioritize guest experience over guest count. Small weddings allow for more editorial-style portraits and genuine connection.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800'
  },
  {
    id: 'b5',
    title: 'Lighting Setups for Small Home Studios',
    date: 'August 05, 2024',
    excerpt: 'You do not need a massive warehouse. Here is how to create stunning light in a 10x10 room.',
    content: `
      <p>One light and a V-flat can do wonders. We explore simple, one-light setups that create professional, dimensional portraits in tight spaces.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=800'
  },
  {
    id: 'b6',
    title: 'Navigating Golden Hour in Winter',
    date: 'January 30, 2024',
    excerpt: 'When the sun sets at 4 PM, timing is everything. Tips for winter light.',
    content: `
      <p>Winter light is harsh and fleeting, but it's also incredibly crisp. Learn how to plan your shoot timeline when daylight is scarce.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1477948879622-5f6913339b5f?q=80&w=800'
  },
  {
    id: 'b7',
    title: 'The Importance of Printing Your Work',
    date: 'December 12, 2023',
    excerpt: 'Don\'t let your photos die on a hard drive. The legacy of the physical print.',
    content: `
      <p>In a digital age, a physical print is a luxury. It is a tangible legacy. We discuss the best papers and labs for professional photographers in 2023.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1576514155934-2a8a0f4079da?q=80&w=800'
  },
  {
    id: 'b8',
    title: 'Posing Guide for Non-Models',
    date: 'October 08, 2023',
    excerpt: 'How to make regular clients feel comfortable and look effortless in front of the lens.',
    content: `
      <p>Most clients aren't models. They don't know what to do with their hands. Here are 5 prompts to get natural reactions and relaxed posture.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800'
  },
  {
    id: 'b9',
    title: 'Editing Trends of 2023: The "Film Look"',
    date: 'August 21, 2023',
    excerpt: 'Why grain and faded blacks are making a massive comeback in wedding photography.',
    content: `
      <p>Clean and crisp is out; mood and texture are in. We look at how presets are evolving to mimic Portra 400 and Ilford stocks.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=800'
  },
  {
    id: 'b10',
    title: 'Lens Review: Canon RF 85mm f/1.2',
    date: 'June 15, 2023',
    excerpt: 'Is this the perfect portrait lens? A deep dive into the bokeh master.',
    content: `
      <p>It's heavy, it's expensive, and it's absolutely magical. The RF 85mm defies physics with its sharpness wide open.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?q=80&w=800'
  },
  {
    id: 'b11',
    title: 'Capturing Authentic Family Chaos',
    date: 'April 02, 2023',
    excerpt: 'Embracing the mess. Why perfectly posed family photos are boring.',
    content: `
      <p>Let the kids run. Let them cry. Let them laugh. The "in-between" moments are the ones parents cherish most 20 years later.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=800'
  },
  {
    id: 'b12',
    title: 'Drone Photography for Landscapes',
    date: 'February 10, 2023',
    excerpt: 'Elevating your perspective. Legalities and composition from the sky.',
    content: `
      <p>Drones have revolutionized landscape photography. But composition rules still apply. Here is how to find leading lines from 400 feet up.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800'
  },
  {
    id: 'b13',
    title: 'The Business of Photography in 2022',
    date: 'November 18, 2022',
    excerpt: 'Pricing yourself correctly in a post-pandemic economy.',
    content: `
      <p>Inflation is up, and so are your costs. It's time to raise your prices. Here is a script for announcing rate changes to your clients.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800'
  },
  {
    id: 'b14',
    title: 'Black and White: Seeing in Monochrome',
    date: 'September 05, 2022',
    excerpt: 'When to strip away color to focus on light, texture, and emotion.',
    content: `
      <p>Black and white isn't a fix for bad white balance. It's an artistic choice. We discuss high-contrast vs. soft matte processing.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?q=80&w=800'
  },
  {
    id: 'b15',
    title: 'Travel Photography Essentials',
    date: 'July 20, 2022',
    excerpt: 'Packing light: The one-camera, one-lens philosophy for travel.',
    content: `
      <p>You don't need your whole kit. A 35mm prime and a solid body are often all you need to document a trip without being weighed down.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=800'
  },
  {
    id: 'b16',
    title: 'Understanding Flash Duration',
    date: 'May 12, 2022',
    excerpt: 'Freezing action in the studio. Why your shutter speed does not matter as much as you think.',
    content: `
      <p>If you photograph dancers or splashing liquids, flash duration is your best friend. Learn the difference between t.1 and t.5 times.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1552168324-d612d77725e3?q=80&w=800'
  },
  {
    id: 'b17',
    title: 'Backing Up Your Work: The 3-2-1 Rule',
    date: 'March 30, 2022',
    excerpt: 'Data loss is a nightmare. Here is a foolproof backup strategy for photographers.',
    content: `
      <p>3 copies of data, 2 different media types, 1 offsite. If you aren't doing this, you are playing with fire.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1588620062714-07b77df6044e?q=80&w=800'
  },
  {
    id: 'b18',
    title: 'Getting Published in 2021',
    date: 'November 08, 2021',
    excerpt: 'How to submit your work to blogs and magazines in a competitive market.',
    content: `
      <p>Editors are looking for a cohesive story, not just pretty pictures. Here is how to curate a submission that gets accepted.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=800'
  },
  {
    id: 'b19',
    title: 'Shooting Film at Night',
    date: 'August 14, 2021',
    excerpt: 'Push processing and high ISO stocks. Embracing the grain in low light.',
    content: `
      <p>CineStill 800T and Delta 3200 are your friends. Learn how to meter for shadows when the sun goes down.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800'
  },
  {
    id: 'b20',
    title: 'The Creative Rut: How to Break Out',
    date: 'February 22, 2020',
    excerpt: 'Feeling uninspired? Projects and exercises to jumpstart your creativity.',
    content: `
      <p>We all hit walls. Try a 365 project, or limit yourself to one focal length for a month. Constraint breeds creativity.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1499750310159-5b600aaf0378?q=80&w=800'
  }
];

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  stars: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    text: 'Jinette has an incredible gift! She captured our family so beautifully, managing to get smiles from our toddler and teenager alike. The photos are treasures we will keep forever.',
    stars: 5,
  },
  {
    id: 't2',
    name: 'Michael & Emily',
    text: 'We booked Jinette for our engagement shoot and felt so comfortable immediately. Her direction is natural and the results were stunningly artistic.',
    stars: 5,
  },
  {
    id: 't3',
    name: 'Jessica T.',
    text: 'The best photography experience I have ever had. The studio is gorgeous, and Jinette is so warm and professional. My headshots have completely leveled up my business branding.',
    stars: 5,
  },
  {
    id: 't4',
    name: 'The Rodriguez Family',
    text: 'From the styling advice to the final gallery, everything was perfect. She truly captured the love in our family. We will be back every year!',
    stars: 5,
  },
   {
    id: 't5',
    name: 'Amanda B.',
    text: 'I was so nervous for my maternity shoot, but Jinette made me feel like a queen. The lighting, the wardrobe, the poses—she is a true artist.',
    stars: 5,
  }
];
