// CartProvider.jsx
import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

// Validação de PropTypes
CartProvider.propTypes = {
  children: PropTypes.node.isRequired, // Aqui validamos que `children` deve ser um nó React
};
