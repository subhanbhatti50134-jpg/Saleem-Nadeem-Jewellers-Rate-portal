import React, { useState } from 'react';

type Category = 'all' | 'gold-biscuits' | 'gold-jewellery' | 'silver-biscuits' | 'silver-jewellery';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: Exclude<Category, 'all'>;
  imageUrl: string;
  alt: string;
  badge?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Gold Bars — Investment Grade',
    description: 'Premium 24K gold bars, certified and hallmarked. Ideal for investment.',
    category: 'gold-biscuits',
    imageUrl: 'https://images.pexels.com/photos/33539235/pexels-photo-33539235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Gold bars stacked - investment grade',
    badge: '24K Pure',
  },
  {
    id: 2,
    title: 'Gold Bullion Collection',
    description: 'Stacked gold bullion bars representing wealth and financial security.',
    category: 'gold-biscuits',
    imageUrl: 'https://images.pexels.com/photos/33539242/pexels-photo-33539242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Gold bullion bars',
    badge: 'ARY Gold',
  },
  {
    id: 3,
    title: 'Premium Gold Investment',
    description: 'Rows of shiny gold bars — the finest investment in precious metals.',
    category: 'gold-biscuits',
    imageUrl: 'https://images.pexels.com/photos/33539240/pexels-photo-33539240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Premium gold investment bars',
    badge: 'Hallmarked',
  },
  {
    id: 4,
    title: 'Luxury Gold Necklace Set',
    description: 'Exquisite gold necklaces and rings displayed in our premium collection.',
    category: 'gold-jewellery',
    imageUrl: 'https://images.pexels.com/photos/33569933/pexels-photo-33569933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Luxury gold necklace set',
    badge: '22K Gold',
  },
  {
    id: 5,
    title: 'Bridal Gold Jewellery',
    description: 'Stunning wedding rings and pearl necklace set for the most special day.',
    category: 'gold-jewellery',
    imageUrl: 'https://images.pexels.com/photos/28436705/pexels-photo-28436705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Bridal gold jewellery set',
    badge: 'Bridal',
  },
  {
    id: 6,
    title: 'Gold Diamond Ring Set',
    description: 'Luxurious gold ring and necklace set with diamonds on a cream backdrop.',
    category: 'gold-jewellery',
    imageUrl: 'https://images.pexels.com/photos/32797482/pexels-photo-32797482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Gold diamond ring and necklace',
    badge: 'Diamond',
  },
  {
    id: 7,
    title: 'Gold Jewellery Display',
    description: 'Elegant arrangement of gold jewelry on a wooden display tray.',
    category: 'gold-jewellery',
    imageUrl: 'https://images.pexels.com/photos/4155254/pexels-photo-4155254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Gold jewelry display',
    badge: 'Collection',
  },
  {
    id: 8,
    title: 'Silver Bullion & Coins',
    description: 'Certified silver bars and collectible coins — pure investment silver.',
    category: 'silver-biscuits',
    imageUrl: 'https://images.pexels.com/photos/20979926/pexels-photo-20979926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Silver bullion bar and coins',
    badge: 'Pure Silver',
  },
  {
    id: 9,
    title: 'PAMP Silver Bar',
    description: 'Premium PAMP silver bar and coin — globally recognized silver standard.',
    category: 'silver-biscuits',
    imageUrl: 'https://images.pexels.com/photos/20979924/pexels-photo-20979924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'PAMP silver bar',
    badge: 'Certified',
  },
  {
    id: 10,
    title: 'Silver Bullion Coins',
    description: 'Intricate silver bullion coins with premium designs on reflective surface.',
    category: 'silver-biscuits',
    imageUrl: 'https://images.pexels.com/photos/8442431/pexels-photo-8442431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Silver bullion coins',
    badge: 'Collectible',
  },
  {
    id: 11,
    title: 'Silver Bracelets Collection',
    description: 'Elegant silver bracelets and rings — refined and timeless.',
    category: 'silver-jewellery',
    imageUrl: 'https://images.pexels.com/photos/9649313/pexels-photo-9649313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Silver bracelets and rings',
    badge: '925 Silver',
  },
  {
    id: 12,
    title: 'Gold & Silver Bangles',
    description: 'Stylish gold and silver bangles — perfect for every occasion.',
    category: 'silver-jewellery',
    imageUrl: 'https://images.pexels.com/photos/32874211/pexels-photo-32874211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Gold and silver bangles',
    badge: 'Bangles',
  },
  {
    id: 13,
    title: 'Silver Heart Bracelet',
    description: 'Delicate silver heart bracelet — a perfect gift of love.',
    category: 'silver-jewellery',
    imageUrl: 'https://images.pexels.com/photos/34549909/pexels-photo-34549909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Silver heart bracelet',
    badge: 'Gift',
  },
];

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'gold-biscuits', label: 'Gold Biscuits' },
  { id: 'gold-jewellery', label: 'Gold Jewellery' },
  { id: 'silver-biscuits', label: 'Silver Biscuits' },
  { id: 'silver-jewellery', label: 'Silver Jewellery' },
];

const CollectionSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxImg, setLightboxImg] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="collection"
      className="py-24 px-4"
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #080600 50%, #0a0a0a 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-16 bg-[#c9a84c]" />
            <span className="font-['Lato'] text-[#c9a84c] text-xs tracking-[0.4em] uppercase">
              Our Products
            </span>
            <div className="h-px w-16 bg-[#c9a84c]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#e8d5a0] font-bold mb-4">
            Our Collection
          </h2>
          <p className="font-['Cormorant_Garamond'] text-[#9a8a6a] text-xl italic">
            Finest gold & silver — biscuits, bullion, and exquisite jewellery
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-['Lato'] text-xs tracking-widest uppercase px-6 py-2.5 rounded-sm border transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#c9a84c] text-[#0a0a0a] border-[#c9a84c] font-bold'
                  : 'border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-lg overflow-hidden border border-[#c9a84c]/20 hover:border-[#c9a84c]/60 transition-all duration-400 cursor-pointer bg-[#0f0900]"
              onClick={() => setLightboxImg(item)}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Gold overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0500]/90 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/10 transition-all duration-300" />

                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-3 right-3 bg-[#c9a84c] text-[#0a0a0a] font-['Lato'] text-xs font-bold tracking-wider px-2 py-1 rounded-sm">
                    {item.badge}
                  </div>
                )}

                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#c9a84c]/90 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-['Playfair_Display'] text-[#d4b866] font-semibold text-sm mb-1">
                  {item.title}
                </h3>
                <p className="font-['Lato'] text-[#888] text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#0f0900] rounded-lg border border-[#c9a84c]/30 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center text-[#0a0a0a] font-bold hover:bg-[#f0d080] transition-colors"
              onClick={() => setLightboxImg(null)}
            >
              ✕
            </button>
            <img
              src={lightboxImg.imageUrl}
              alt={lightboxImg.alt}
              className="w-full max-h-[70vh] object-contain"
            />
            <div className="p-5">
              <h3 className="font-['Playfair_Display'] text-[#c9a84c] text-xl font-bold mb-1">
                {lightboxImg.title}
              </h3>
              <p className="font-['Lato'] text-[#888] text-sm">{lightboxImg.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CollectionSection;
