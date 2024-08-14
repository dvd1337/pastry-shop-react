import { useContext } from "react";
import { CartContext } from "../components/CartProvider";
import PropTypes from "prop-types";

import iconAdd from "../assets/images/icon-add-to-cart.svg";
import iconIncrement from "../assets/images/icon-increment-quantity.svg";
import iconDecrement from "../assets/images/icon-decrement-quantity.svg";

function MenuItem({ name, category, price, image }) {
  const { cartItems = [], setCartItems } = useContext(CartContext); // Inicializar cartItems como um array vazio

  // Função para obter a quantidade do item atual no carrinho
  const getQuantity = () => {
    const item = cartItems.find((item) => item.name === name);
    return item ? item.quantity : 0;
  };

  // Função para adicionar o item ao carrinho
  const addItemToCart = () => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.name === name);
      if (itemIndex === -1) {
        return [...prevItems, { name, quantity: 1 }];
      } else {
        const newItems = [...prevItems];
        newItems[itemIndex].quantity = 1;
        return newItems;
      }
    });
  };

  // Função para incrementar a quantidade do item no carrinho
  const incrementQuantity = () => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.name === name);
      if (itemIndex !== -1) {
        const newItems = [...prevItems];
        newItems[itemIndex].quantity += 1;
        return newItems;
      }
      return prevItems;
    });
  };

  // Função para decrementar a quantidade do item no carrinho
  const decrementQuantity = () => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.name === name);
      if (itemIndex !== -1) {
        const newItems = [...prevItems];
        if (newItems[itemIndex].quantity > 1) {
          newItems[itemIndex].quantity -= 1;
        } else {
          newItems.splice(itemIndex, 1);
        }
        return newItems;
      }
      return prevItems;
    });
  };

  const quantity = getQuantity();

  return (
    <div className="comidas">
      <picture>
        <source
          media="(max-width: 700px)"
          srcSet={image.mobile}
          type="image/png"
        />
        <img src={image.desktop} alt={name} className="imgFood" />
      </picture>
      <div className="btn">
        {quantity === 0 ? (
          <button className="btnAddCart" onClick={addItemToCart}>
            <img src={iconAdd} alt="add-cart" className="add" />
            Add to Cart
          </button>
        ) : (
          <div className="btn-content btn-active">
            <img
              src={iconDecrement}
              alt="decrement"
              className="btn-icon"
              onClick={decrementQuantity}
            />
            <span className="btn-number">{quantity}</span>
            <img
              src={iconIncrement}
              alt="increment"
              className="btn-icon"
              onClick={incrementQuantity}
            />
          </div>
        )}
      </div>
      <p>{category}</p>
      <h2>{name}</h2>
      <h3>${price.toFixed(2)}</h3>
    </div>
  );
}

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.shape({
    mobile: PropTypes.string.isRequired,
    desktop: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuItem;
