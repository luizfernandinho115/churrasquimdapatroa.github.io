import { ChevronDown, Phone, Clock, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { restaurantInfo } from '@/data/menuData';

export function Hero() {
  const scrollToChurrasquim da Patroa Burgers = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[500px] md:min-h-[550px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1544025162-d76694265947?w=1920&auto=format&fit=crop&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white py-16">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-300 text-sm font-medium">Aberto para Delivery</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-yellow-400">Churrasco</span> & <span className="text-orange-400">Hambúrguer</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 font-light">
            {restaurantInfo.slogan}
          </p>

          {/* Info Cards */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-sm md:text-base">
            <div className="flex items-center gap-2 text-gray-300 bg-white/10 px-4 py-2 rounded-full">
              <Phone className="w-4 h-4 text-yellow-400" />
              <span>{restaurantInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 bg-white/10 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-yellow-400" />
              <span>{restaurantInfo.hours}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 bg-white/10 px-4 py-2 rounded-full">
              <Instagram className="w-4 h-4 text-yellow-400" />
              <span>{restaurantInfo.instagram}</span>
            </div>
          </div>

          <Button
            onClick={scrollToChurrasquim da Patroa Burgers}
            className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold px-8 py-6 text-lg rounded-full shadow-lg shadow-yellow-500/30 transition-all hover:scale-105"
          >
            Ver Cardápio
            <ChevronDown className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  );
}
