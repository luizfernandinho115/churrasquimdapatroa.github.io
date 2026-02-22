import { useState } from 'react';
import { Plus, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { menuItems, categories } from '@/data/menuData';
import type { Churrasquim da Patroa BurgersItem } from '@/types/menu';

interface Churrasquim da Patroa BurgersSectionProps {
  onAddToCart: (item: Churrasquim da Patroa BurgersItem, selectedType?: 'simples' | 'completo') => void;
}

export function Churrasquim da Patroa BurgersSection({ onAddToCart }: Churrasquim da Patroa BurgersSectionProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const hasPriceComplete = (item: Churrasquim da Patroa BurgersItem) => {
    return item.priceComplete !== undefined && item.priceComplete > 0;
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-medium tracking-wider uppercase mb-2">
            Nosso Cardápio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Escolha seu Pedido
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hambúrgueres artesanais, espetinhos na brasa e muito mais!
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="mb-10"
        >
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-red-600 data-[state=active]:text-white px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-100 transition-all text-sm"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Churrasquim da Patroa Burgers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.popular && (
                  <Badge className="absolute top-3 left-3 bg-yellow-500 text-red-900 border-0 flex items-center gap-1 font-bold">
                    <Flame className="w-3 h-3" />
                    Mais Pedido
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-red-600 transition-colors mb-1">
                  {item.name}
                </h3>

                {item.description && (
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                )}

                {/* Price and Add Button */}
                <div className="mt-auto space-y-3">
                  {/* Simples option (always available) */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-500">Simples</span>
                      <p className="font-bold text-red-600 text-lg">
                        R$ {item.price.toFixed(2)}
                      </p>
                    </div>
                    <Button
                      onClick={() => onAddToCart(item, 'simples')}
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                  </div>

                  {/* Completo option (if available) */}
                  {hasPriceComplete(item) && (
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <div>
                        <span className="text-xs text-gray-500">Completo</span>
                        <p className="font-bold text-orange-600 text-lg">
                          R$ {item.priceComplete?.toFixed(2)}
                        </p>
                      </div>
                      <Button
                        onClick={() => onAddToCart(item, 'completo')}
                        size="sm"
                        className="bg-orange-500 hover:bg-orange-600 text-white"
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              Nenhum item encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
