import styles from "./ItemListContainer.module.css";

export const ItemListContainer = ({ articulos }) => {
  return (
    <div className={styles.banner}>
      <h1>{articulos}</h1>
    </div>
  );
};
