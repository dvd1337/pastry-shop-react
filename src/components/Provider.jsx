import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext();

export function Provider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Context.Provider value={{ cartItems, setCartItems }}>
      {children}
    </Context.Provider>
  );
}

// Validação de PropTypes
Provider.propTypes = {
  children: PropTypes.node.isRequired, // Aqui validamos que `children` deve ser um nó React
};
