import { useContext } from "react";
import { CartContext } from "./CartProvider";
import emptyImage from "../assets/images/illustration-empty-cart.svg";

function Carrinho() {
  const { quantity } = useContext(CartContext);

  return (
    <>
      <h3>Your Cart({quantity})</h3>
      <div id="itens-carrinho">
        {quantity === 0 ? (
          <div id="empty">
            <img src={emptyImage} alt="empty-cart" id="imgCart" />
            <p>Your added items will appear here</p>
          </div>
        ) : (
          <div id="listaCarrinho">
            <div id="pedidos"></div>
            <div id="orderCart">
              <div id="total">Order Total</div>
              <div id="preco">preco total</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Carrinho;
