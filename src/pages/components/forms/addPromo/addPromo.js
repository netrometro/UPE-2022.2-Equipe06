

import React, { useState } from "react";

const AddPromo = ({ addPromo }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [time, setTime] = useState(""); // novo estado para o tempo

  const handleSubmit = (e) => {
    e.preventDefault();
    addPromo({ name, description, price, imageUrl, time }); // adicionando o tempo na promoção
    setName("");
    setDescription("");
    setPrice("");
    setImageUrl("");
    setTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Descrição:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Preço:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="imageUrl">URL da imagem:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div> {/* novo campo para inserir o tempo */}
        <label htmlFor="time">Tempo da promoção:</label>
        <input
          type="text"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button type="submit">Adicionar promoção</button>
    </form>
  );
};

export default AddPromo;



