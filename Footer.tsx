import { Flame, Heart } from 'lucide-react';
import { restaurantInfo } from '@/data/menuData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <Flame className="w-4 h-4 text-red-900" />
            </div>
            <span className="text-white font-semibold">{restaurantInfo.name}</span>
          </div>

          {/* Copyright */}
          <p className="text-sm flex items-center gap-1">
            © {currentYear} {restaurantInfo.name}. Feito com
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            para você
          </p>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a href="#menu" className="hover:text-yellow-400 transition-colors">
              Cardápio
            </a>
            <a href="#contato" className="hover:text-yellow-400 transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
