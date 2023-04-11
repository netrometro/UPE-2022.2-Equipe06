import React, { useEffect, useState } from "react";
import api from "../../../services/api.js";
import Card from "../cards/Card";
import AddPromo from "../forms/addPromo/addPromo.js";
import styles from "./Assets/Home.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const HomePage = () => {
  const [cards, setCards] = useState([]);
  const [busca, setBusca] = useState("");
  const [promocoes, setPromocoes] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  useEffect(() => {
    // busca as promoções da API
    api
      .get("/promocoes")
      .then((response) => {
        setPromocoes(response.data);
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

  const addPromo = (novaPromo) => {
    setPromocoes([...promocoes, novaPromo]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mais buscados na semana</h1>
      <input
        placeholder="Pesquisar"
        className={styles.searchInput}
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <div className={styles.cardMap}>
        {cardsFiltrados.map((card) => (
          <Card
            key={card.id}
            Name={card.name}
            description={card.description}
            price={card.price}
            imagemUrl={card.imagemUrl}
            type={card.type}
          />
        ))}
      </div>
      <div>
        <button className={styles.promoButton} onClick={() => setModalIsOpen(true)}>Promoções</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            content: {
              width: "50%",
              height: "50%",
              margin: "auto",
              backgroundColor: "white",
              borderRadius: "10px",
            },
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <h2>Promoções </h2>
          <p>Aqui estão as promoções disponíveis:</p>
          <ul>
            {promocoes.map((promo) => (
              <li key={promo.id}> {promo.name} {promo.description} {promo.price}</li>
            ))}
          </ul>
          <AddPromo addPromo={addPromo} />
          <button className={styles.modalButton} onClick={() => setModalIsOpen(false)}>Fechar</button>
        </Modal>
      </div>
    </div>
  );
};

export default HomePage;
