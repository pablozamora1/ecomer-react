import { MdShoppingCartCheckout } from "react-icons/md";
import styles from "./CartWidget.module.css";

export const CartWidget = () => {
  return (
    <div className={styles.CartWidget}>
      <MdShoppingCartCheckout color="black" size="50px" />
      <span> - 4 - </span>
    </div>
  );
};
