import React from "react";
import styles from "./Assets/Home.module.css";
import { useEffect, useState } from "react";
import api from "../../../services/api.js";
import Card from "../cards/Card";

export const Notebooks = () => {
  const [cards, setCards] = useState([]);
  const [busca, setBusca] = useState("");

  console.log(busca);

  useEffect(() => {
    api
      .get("/produtos")
      .then((response) => {
        setCards(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const cardsFiltrados = cards.filter(
    (card) =>
      card.name.toLowerCase().includes(busca.toLowerCase()) ||
      card.type.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className={styles.searchBar}>
      <h1 className={styles.h1}>Notebooks</h1>
      <input
        placeholder="Pesquisar"
        className={styles.searchBar}
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <div className="card-map">
        <ul className={styles.cardList}>
          {cardsFiltrados
            .filter((card) => (card.type = "Notebooks"))
            .map((cardsFiltradosType) => (
              <Card
                key={cardsFiltradosType.id}
                Name={cardsFiltradosType.name}
                description={cardsFiltradosType.description}
                price={cardsFiltradosType.price}
                imagemUrl={cardsFiltradosType.imagemUrl}
                type={cardsFiltradosType.type}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Notebooks;
