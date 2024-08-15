import { useCompra } from "./UseCompra";
import Content from "./CompraContent";

function CompraFinalizada() {
  const { compraConcluida, reiniciarCompra } = useCompra(); 

  return (
    <>
      {compraConcluida && (
        <div id="compra">
          <div id="pedido">
            <img src="assets/images/icon-order-confirmed.svg" alt="" />
            <h1>Order Confirmed</h1>
            <p>We hope you enjoy your food!</p>
            <div id="foods">
              <div id="content">
                <Content />
              </div>
              <p id="order">Order Total</p>
              <p id="totalPriceContent">$00.00</p>
            </div>
            <button id="btnNewOrder" onClick={reiniciarCompra}>
              Start New Order
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CompraFinalizada;
