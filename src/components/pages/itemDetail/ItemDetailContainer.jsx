import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemDetail from "./itemDetail";


const ItemDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  let id = 3;

  useEffect(() => {
    let productFind = products.find((product) => product.id === id);

    const getProduct = new Promise((res, rej) => {
      res(productFind);
    });

    getProduct
      .then((res) => setProductSelect(res))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(productSelected);

  return <ItemDetail productSelected={productSelected} />;
};

export default ItemDetailContainer;

