import { Award, Users, Clock, Heart } from 'lucide-react';
import { restaurantInfo } from '@/data/menuData';

const features = [
  {
    icon: Award,
    title: 'Qualidade Premium',
    description: 'Ingredientes selecionados e receitas tradicionais com toque contemporâneo',
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Chefs experientes apaixonados pela arte da culinária',
  },
  {
    icon: Clock,
    title: 'Atendimento Rápido',
    description: 'Seu pedido preparado com agilidade sem perder a qualidade',
  },
  {
    icon: Heart,
    title: 'Feito com Amor',
    description: 'Cada prato é preparado com dedicação e carinho',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80"
                alt="Chef preparando comida"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm opacity-90">Anos de Experiência</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-amber-600 font-medium tracking-wider uppercase mb-2">
              Sobre Nós
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Uma História de Sabor e Dedicação
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              O {restaurantInfo.name} nasceu da paixão pela gastronomia italiana 
              e do desejo de trazer aos nossos clientes uma experiência única. 
              Combinamos técnicas tradicionais com ingredientes frescos e de 
              alta qualidade para criar pratos que encantam o paladar.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nossa missão é proporcionar momentos especiais através da comida, 
              em um ambiente acolhedor e com um atendimento que faz você se 
              sentir em casa.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
