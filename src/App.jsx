import { CartWidget } from "./components/common/cartWidget/CartWidget";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";

function app() {
  return (
    <div>
      <Navbar />
      <CartWidget />
      <ItemListContainer />
    </div>
  );
}
export default app;
