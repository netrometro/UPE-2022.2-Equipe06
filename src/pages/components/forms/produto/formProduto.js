import React from "react";
import styles from "../cadastro/FormCadastro.module.css";
import api from "../../../../services/api.js";
import { useState } from "react";

function FormProduto() {
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);
  const [type, setType] = useState();
  const [imageName, setImageName] = useState();

  const submit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("type", type);

    const result = await api
      .post("/produto/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        alert("Produto cadastrado!");
      })
      .catch((error) => {
        alert("Erro!");
      });

    setImageName(result.data.imageName);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          placeholder="Nome do produto"
          onChange={(e) => setName(e.target.value)}
          type="text"
        ></input>
        <input
          placeholder="Descrição do produto"
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        ></input>
        <input
          placeholder="preço do produto"
          onChange={(e) => setPrice(e.target.value)}
          type="text"
        ></input>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">--Selecione uma opção--</option>
          <option value="Notebook">Notebook</option>
          <option value="Celular">Celular</option>
          <option value="TV">TV</option>
        </select>
        <input
          filename={file}
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          accept="image/*"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormProduto;
