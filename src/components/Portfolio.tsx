import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

interface PortfolioImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

const images: PortfolioImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1654738344031-441757e8818d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwaG90b2dyYXBoeSUyMG5hdHVyZXxlbnwxfHx8fDE3NjA2NzE0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Luontovalokuvaus",
    category: "Luonto"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1612052355380-d7c1d631f00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc2MDY5Mjg4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Muotokuva",
    category: "Muotokuva"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1643580594770-4f372d2e8ead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNpdHklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYwNjY5MDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Arkkitehtuuri",
    category: "Arkkitehtuuri"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1647730346047-649e23e3c7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYwNzIwMTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Häät",
    category: "Häät"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1671454265388-0c0672798125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjA2Mzg1NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Muoti",
    category: "Muoti"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1696776705767-42dde0f27606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjB3aWxkbGlmZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MDcwNTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Luonnonvaraiset eläimet",
    category: "Luonto"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1708004228425-85703b49692e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBwaG90b2dyYXBoeSUyMHVyYmFufGVufDF8fHx8MTc2MDYzNDQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Katuvalokuvaus",
    category: "Katu"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1596202353147-6642e72009f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBjb21tZXJjaWFsfGVufDF8fHx8MTc2MDcyMDEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Tuotekuvaus",
    category: "Kaupallinen"
  }
];

const categories = ["Kaikki", "Luonto", "Muotokuva", "Arkkitehtuuri", "Häät", "Muoti", "Katu", "Kaupallinen"];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Kaikki");

  const filteredImages = selectedCategory === "Kaikki" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">Portfolio</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map(image => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <p className="mb-1">{image.title}</p>
                      <span className="text-sm text-white/80">{image.category}</span>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0">
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
