import React, { useContext, useState } from "react";
import { CartContext } from "./cartContext";

function GetCarrinho() {
  const { cart, clearCart, handleRemoveItemFromCart } = useContext(CartContext)

  const valorTotal = cart.reduce((total, item) => total + item.price, 0);

  function handleFinalizarCompra() {
  }

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <p>Total de Itens: {cart.length}</p>
      <ul>
      {cart.map((item, index) => (
      <CartItem
            key={index}
            name={item.name}
            price={item.price}
            onRemove={() => handleRemoveItemFromCart(index)}
        />
        ))}
      </ul>
      <p>Valor Total: R${valorTotal ? valorTotal.toFixed(2) : '0.00'}</p>
      <button onClick={handleFinalizarCompra}>Finalizar compra</button>
      <button onClick={clearCart}>Limpar carrinho</button>
    </div>
  );

  function CartItem({ name, price, onRemove }) {
    return (
      <li>
        {name} - R${price ? price.toFixed(2) : '0.00'} <button onClick={onRemove}>Remover</button>
      </li>
    );
    }
}

export default GetCarrinho;