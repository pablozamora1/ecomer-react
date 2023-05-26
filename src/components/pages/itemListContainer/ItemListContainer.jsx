//import styles from "./ItemListContainer.module.css";

export const ItemListContainer = ({ articulos }) => {
  return (
    <div>
      <h1 style={{display:"flex" ,flexDirection: "row" ,justifyContent: "center"}}>{articulos}</h1>
    </div>
  );
  
};
