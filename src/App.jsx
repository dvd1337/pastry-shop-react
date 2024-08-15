import "./App.css";
import "./Mobile.css";
import Carrinho from "./components/Carrinho";
import { Provider } from "./components/Provider";
import Menu from "./components/Menu";
import CompraFinalizada from "./components/CompraFinalizada";
import { CompraProvider } from "./components/CompraContext";

function App() {
  return (
    <>
      <CompraProvider>
        <main>
          <Provider>
            <Menu />
            <Carrinho />
          </Provider>
        </main>
        <CompraFinalizada />
      </CompraProvider>
    </>
  );
}

export default App;
