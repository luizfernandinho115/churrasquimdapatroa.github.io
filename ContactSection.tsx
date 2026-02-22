import { Phone, Clock, Instagram, MapPin } from 'lucide-react';
import { restaurantInfo } from '@/data/menuData';

export function ContactSection() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-gradient-to-br from-red-900 via-red-800 to-orange-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-yellow-400 font-medium tracking-wider uppercase mb-2">
            Entre em Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Faça seu Pedido
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Delivery em toda a cidade! Peça pelo WhatsApp ou Instagram.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <a 
            href={`https://wa.me/${restaurantInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-colors cursor-pointer"
          >
            <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-green-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
            <p className="text-white/70">{restaurantInfo.phone}</p>
            <p className="text-yellow-400 text-sm mt-2">Clique para pedir</p>
          </a>

          {/* Instagram */}
          <a 
            href={`https://instagram.com/churrascodapatroa06`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-colors cursor-pointer"
          >
            <div className="w-14 h-14 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-7 h-7 text-pink-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Instagram</h3>
            <p className="text-white/70">{restaurantInfo.instagram}</p>
            <p className="text-yellow-400 text-sm mt-2">Siga-nos</p>
          </a>

          {/* Hours */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
            <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-yellow-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Horário</h3>
            <p className="text-white/70">{restaurantInfo.hours}</p>
          </div>

          {/* Address */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
            <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Delivery</h3>
            <p className="text-white/70">{restaurantInfo.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
