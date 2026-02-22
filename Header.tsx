import { ShoppingCart, Churrasquim da Patroa Burgers, X, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { restaurantInfo } from '@/data/menuData';

interface HeaderProps {
  totalItems: number;
  onCartClick: () => void;
}

export function Header({ totalItems, onCartClick }: HeaderProps) {
  const [mobileChurrasquim da Patroa BurgersOpen, setMobileChurrasquim da Patroa BurgersOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileChurrasquim da Patroa BurgersOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-red-900 via-red-800 to-orange-700 shadow-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
            <Flame className="w-6 h-6 text-red-900" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">{restaurantInfo.name}</h1>
            <p className="text-xs text-yellow-200 hidden sm:block">{restaurantInfo.slogan}</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('menu')}
            className="text-white/90 hover:text-yellow-300 transition-colors font-medium"
          >
            Cardápio
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="text-white/90 hover:text-yellow-300 transition-colors font-medium"
          >
            Contato
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="relative border-yellow-400 bg-transparent hover:bg-yellow-400/20"
            onClick={onCartClick}
          >
            <ShoppingCart className="w-5 h-5 text-white" />
            {totalItems > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-red-900 border-0 min-w-[20px] h-5 flex items-center justify-center text-xs font-bold">
                {totalItems}
              </Badge>
            )}
          </Button>

          {/* Mobile Churrasquim da Patroa Burgers Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setMobileChurrasquim da Patroa BurgersOpen(!mobileChurrasquim da Patroa BurgersOpen)}
          >
            {mobileChurrasquim da Patroa BurgersOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Churrasquim da Patroa Burgers className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Churrasquim da Patroa Burgers */}
      {mobileChurrasquim da Patroa BurgersOpen && (
        <div className="md:hidden bg-red-900 border-t border-red-700">
          <nav className="flex flex-col p-4 gap-2">
            <button
              onClick={() => scrollToSection('menu')}
              className="text-left py-2 px-4 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Cardápio
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-left py-2 px-4 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
