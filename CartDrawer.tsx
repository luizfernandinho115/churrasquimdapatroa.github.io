import { X, Minus, Plus, ShoppingBag, Trash2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import type { CartItem } from '@/types/menu';
import { restaurantInfo } from '@/data/menuData';
import { toast } from 'sonner';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  totalPrice: number;
  onUpdateQuantity: (itemId: string, selectedType: 'simples' | 'completo' | undefined, quantity: number) => void;
  onRemoveItem: (itemId: string, selectedType?: 'simples' | 'completo') => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  totalPrice,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);

  const handleSendOrder = () => {
    if (!customerName.trim()) {
      toast.error('Por favor, informe seu nome');
      return;
    }

    if (!address.trim()) {
      toast.error('Por favor, informe seu endereço');
      return;
    }

    let message = `*Novo Pedido - ${restaurantInfo.name}*\n\n`;
    message += `*Cliente:* ${customerName}\n`;
    message += `*Endereço:* ${address}\n\n`;
    message += `*Itens do Pedido:*\n`;

    items.forEach((item) => {
      const typeLabel = item.selectedType ? ` (${item.selectedType === 'simples' ? 'Simples' : 'Completo'})` : '';
      message += `• ${item.quantity}x ${item.name}${typeLabel} - R$ ${(
        item.price * item.quantity
      ).toFixed(2)}\n`;
    });

    message += `\n*Total: R$ ${totalPrice.toFixed(2)}*\n`;

    if (notes.trim()) {
      message += `\n*Observações:* ${notes}\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${restaurantInfo.whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    toast.success('Pedido enviado! Redirecionando para o WhatsApp...');
    onClearCart();
    setShowCheckout(false);
    setCustomerName('');
    setAddress('');
    setNotes('');
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-xl">
            <ShoppingBag className="w-5 h-5 text-red-600" />
            Seu Pedido
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Seu carrinho está vazio
            </h3>
            <p className="text-gray-500 mb-6">
              Adicione itens do cardápio para começar seu pedido
            </p>
            <Button onClick={onClose} className="bg-red-600 hover:bg-red-700">
              Ver Cardápio
            </Button>
          </div>
        ) : (
          <>
            {!showCheckout ? (
              <>
                {/* Cart Items */}
                <div className="flex-1 overflow-auto py-4">
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={`${item.id}-${item.selectedType}`}
                        className="flex gap-4 p-3 bg-gray-50 rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 truncate">
                            {item.name}
                          </h4>
                          {item.selectedType && (
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              item.selectedType === 'completo' 
                                ? 'bg-orange-100 text-orange-700' 
                                : 'bg-gray-200 text-gray-700'
                            }`}>
                              {item.selectedType === 'simples' ? 'Simples' : 'Completo'}
                            </span>
                          )}
                          <p className="text-red-600 font-medium text-sm mt-1">
                            R$ {item.price.toFixed(2)}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() =>
                                onUpdateQuantity(item.id, item.selectedType, item.quantity - 1)
                              }
                              className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                onUpdateQuantity(item.id, item.selectedType, item.quantity + 1)
                              }
                              className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => onRemoveItem(item.id, item.selectedType)}
                              className="ml-auto text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cart Footer */}
                <div className="border-t border-gray-200 pt-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-gray-900">
                      R$ {totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-red-600">
                      R$ {totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={onClearCart}
                      className="flex-1 border-gray-300"
                    >
                      Limpar
                    </Button>
                    <Button
                      onClick={() => setShowCheckout(true)}
                      className="flex-1 bg-red-600 hover:bg-red-700"
                    >
                      Finalizar Pedido
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              /* Checkout Form */
              <div className="flex-1 overflow-auto py-4">
                <button
                  onClick={() => setShowCheckout(false)}
                  className="text-gray-500 hover:text-gray-700 mb-4 flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  Voltar ao carrinho
                </button>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome completo"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Endereço *</Label>
                    <Input
                      id="address"
                      placeholder="Rua, número, bairro"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="notes">Observações (opcional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Alguma observação especial?"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Resumo do Pedido</h4>
                    <div className="space-y-1 text-sm">
                      {items.map((item) => (
                        <div key={`${item.id}-${item.selectedType}`} className="flex justify-between">
                          <span>
                            {item.quantity}x {item.name}
                            {item.selectedType && (
                              <span className="text-gray-500">
                                {' '}({item.selectedType === 'simples' ? 'Simples' : 'Completo'})
                              </span>
                            )}
                          </span>
                          <span>
                            R$ {(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-bold text-red-600">
                      <span>Total</span>
                      <span>R$ {totalPrice.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleSendOrder}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Pedido via WhatsApp
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
