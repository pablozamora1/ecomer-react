
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";

function app() {

    let articulos = "Bienvenidos a la mejor tienda de productos para tu pc"
  return (
    <div>
      <Navbar />
      <ItemListContainer articulos={articulos} />
    </div>
  );
}
export default app;
