import styles from "./Assets/cards.module.css";
import React, {useContext} from 'react'
import { CartContext } from "../utils/cartContext";

const Card = ({ Name, description, price, imagemUrl }) => {
  const {handleAddItemToCart} = useContext(CartContext)

  function addItemToCart(item) {
    handleAddItemToCart(item);
  }

  return (
    <div className={styles.card}>
      <img src={"http://localhost:3030/api/images/" + imagemUrl}></img>
      <h2>{Name}</h2>
      <p>{description}</p>
      <p className={styles.price}>{"R$ " + price + ",00"}</p>
      <button className={styles.botaoAddCarrinho} onClick={addItemToCart}>
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default Card;
