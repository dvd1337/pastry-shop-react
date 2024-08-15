import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CompraContext = createContext();

export function CompraProvider({ children }) {
  const [compraConcluida, setCompraConcluida] = useState(false);

  const concluirCompra = () => {
    setCompraConcluida(true);
  };

  const reiniciarCompra = () => {
    setCompraConcluida(false);
  };

  return (
    <CompraContext.Provider
      value={{ compraConcluida, concluirCompra, reiniciarCompra }}
    >
      {children}
    </CompraContext.Provider>
  );
}

CompraProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CompraContext;
