import "./App.css";
import "./Mobile.css";
import Carrinho from "./components/Carrinho";
import { CartProvider } from "./components/CartProvider";
import Menu from "./menu/Menu";

function App() {
  return (
    <>
      <main>
        <CartProvider>
          <Menu />
          <Carrinho />
        </CartProvider>
      </main>
    </>
  );
}

export default App;
