import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('hero')}
            className="transition-opacity hover:opacity-70"
          >
            Anu Kiiruna
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="transition-opacity hover:opacity-70"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="transition-opacity hover:opacity-70"
            >
              Tietoa minusta
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="transition-opacity hover:opacity-70"
            >
              Palvelut
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="transition-opacity hover:opacity-70"
            >
              Yhteystiedot
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-left transition-opacity hover:opacity-70"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left transition-opacity hover:opacity-70"
            >
              Tietoa minusta
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-left transition-opacity hover:opacity-70"
            >
              Palvelut
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left transition-opacity hover:opacity-70"
            >
              Yhteystiedot
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
