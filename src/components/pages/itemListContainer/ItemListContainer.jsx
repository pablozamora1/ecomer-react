import { useEffect, useState } from "react";

import { products } from "../../../productsMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
      reject("la promesa salio mal ");
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
