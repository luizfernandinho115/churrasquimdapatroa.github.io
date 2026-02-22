import { useState, useCallback } from 'react';
import type { Churrasquim da Patroa BurgersItem, CartItem } from '@/types/menu';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((menuItem: Churrasquim da Patroa BurgersItem, selectedType?: 'simples' | 'completo') => {
    setItems((prev) => {
      const existingItem = prev.find((item) => 
        item.id === menuItem.id && item.selectedType === selectedType
      );
      
      if (existingItem) {
        return prev.map((item) =>
          item.id === menuItem.id && item.selectedType === selectedType
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prev, { 
        ...menuItem, 
        quantity: 1, 
        selectedType,
        price: selectedType === 'completo' && menuItem.priceComplete 
          ? menuItem.priceComplete 
          : menuItem.price 
      }];
    });
  }, []);

  const removeItem = useCallback((itemId: string, selectedType?: 'simples' | 'completo') => {
    setItems((prev) => prev.filter((item) => 
      !(item.id === itemId && item.selectedType === selectedType)
    ));
  }, []);

  const updateQuantity = useCallback((itemId: string, selectedType: 'simples' | 'completo' | undefined, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId, selectedType);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId && item.selectedType === selectedType 
          ? { ...item, quantity } 
          : item
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const toggleCart = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const openCart = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    items,
    isOpen,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
  };
}
