import { CartWidget } from "../../common/cartWidget/CartWidget";
import styles from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <div className={styles.navbar}>

      <h4>Compumundo Hipermegared</h4>
      <ul>
        <li><a href="">PCs De Escritorio</a></li>
        <li><a href="">Noteboks</a> </li>
        <li><a href="">Placas de Video</a> </li>
        <li><a href="">Monitores</a> </li>
        <li><a href="">Micros</a> </li>
      </ul>
      <div>
        <CartWidget />
      </div>
    </div>
  );
};
