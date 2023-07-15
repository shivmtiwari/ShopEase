import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const updateLocalStorage = (updatedCartItems) => {
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      alert('Product is already added to cart');
      return;
    }

    const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
    updateLocalStorage(updatedCartItems);
  };

  const increaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    updateLocalStorage(updatedCartItems);
  };

  const decreaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    updateLocalStorage(updatedCartItems);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    updateLocalStorage(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  const getTotalTimesAdded = () => {
    return cartItems.length;
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        getTotalTimesAdded,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
