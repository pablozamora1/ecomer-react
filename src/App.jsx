
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import{ ItemDetailContainer } from "./components/pages/itemDetail/ItemDetailContainer"
import { Navbar } from "./components/layout/navbar/Navbar";





function app() {

  return (
    <div>
      <Navbar>
        <ItemListContainer />
        <ItemDetailContainer />
      </Navbar>
    </div>
  );
}
export default app;
