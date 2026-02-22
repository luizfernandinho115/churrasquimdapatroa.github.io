import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { Churrasquim da Patroa BurgersSection } from '@/sections/Churrasquim da Patroa BurgersSection';
import { ContactSection } from '@/sections/ContactSection';
import { Footer } from '@/sections/Footer';
import { CartDrawer } from '@/sections/CartDrawer';
import { useCart } from '@/hooks/useCart';
import { toast } from 'sonner';
import type { Churrasquim da Patroa BurgersItem } from '@/types/menu';

function App() {
  const {
    items,
    isOpen,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
  } = useCart();

  const handleAddToCart = (item: Churrasquim da Patroa BurgersItem, selectedType?: 'simples' | 'completo') => {
    addItem(item, selectedType);
    const typeLabel = selectedType ? ` (${selectedType === 'simples' ? 'Simples' : 'Completo'})` : '';
    toast.success(`${item.name}${typeLabel} adicionado!`, {
      action: {
        label: 'Ver Carrinho',
        onClick: openCart,
      },
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" richColors />
      
      <Header totalItems={totalItems} onCartClick={openCart} />
      
      <main>
        <Hero />
        <Churrasquim da Patroa BurgersSection onAddToCart={handleAddToCart} />
        <ContactSection />
      </main>
      
      <Footer />
      
      <CartDrawer
        isOpen={isOpen}
        onClose={closeCart}
        items={items}
        totalPrice={totalPrice}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
      />
    </div>
  );
}

export default App;
