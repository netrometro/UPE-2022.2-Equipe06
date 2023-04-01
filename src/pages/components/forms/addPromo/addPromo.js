

import React, { useState } from "react";

const AddPromo = ({ addPromo }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [time, setTime] = useState(""); // novo estado para o tempo
  const [novaPromo, setNovaPromo] = useState({ name: "", description: "", price: "", imageUrl: "" });

  

  
  const handleChange = (e) => {
    setNovaPromo({ ...novaPromo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPromo(novaPromo); // correção aqui
    setNovaPromo({ name: "", description: "", price: "", imageUrl: "" });
  };
  
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" value={novaPromo.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="description">Descrição:</label>
        <input type="text" name="description" value={novaPromo.description} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="price">Preço:</label>
        <input type="text" name="price" value={novaPromo.price} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="imageUrl">URL da imagem:</label>
        <input type="text" name="imageUrl" value={novaPromo.imageUrl} onChange={handleChange} />
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

