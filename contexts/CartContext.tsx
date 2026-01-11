import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Alert } from 'react-native';

export interface CartItem {
    id: string;
    title: string;
    price: string;
    category: string;
    image: string;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    clearCartSilently: () => void;
    getCartTotal: () => string;
    getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: Omit<CartItem, 'quantity'>) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);

            if (existingItem) {
                // Item already in cart, increase quantity
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                // New item, add to cart
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });

        Alert.alert(
            "Added to Cart! 🛒",
            `${item.title} has been added to your cart.`,
            [{ text: "OK" }]
        );
    };

    const removeFromCart = (id: string) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        Alert.alert(
            "Clear Cart",
            "Are you sure you want to remove all items from your cart?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Clear",
                    style: "destructive",
                    onPress: () => setCartItems([]),
                },
            ]
        );
    };

    const clearCartSilently = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        const total = cartItems.reduce((sum, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return sum + price * item.quantity;
        }, 0);
        return `$${total.toFixed(2)}`;
    };

    const getCartCount = () => {
        return cartItems.reduce((sum, item) => sum + item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                clearCartSilently,
                getCartTotal,
                getCartCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
