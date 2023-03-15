import React from "react";
import styles from "./Assets/Home.module.css"
import { useEffect, useState } from "react";
import api from '../../../services/api.js'
import Card from "../cards/Card";

export const HomePage = () => {
    const [cards, setCards] = useState([]);
    const [busca, setBusca] = useState('');
    console.log(busca);

    useEffect(() => {
        api.get("/produtos")
        .then((response) => {
            setCards(response.data);
            console.log(response.data);
            
        }).catch((error) => {
            console.log(error);
          });
    }, []);

    
    const cardsFiltrados = cards.filter(card => card.name.toLowerCase().includes(busca.toLowerCase())
    || card.type.toLowerCase().includes(busca.toLowerCase()));

   
   
    return (
    <div className={styles.searchBar}>
    <h1 className={styles.h1}>Mais buscados na semana</h1>
    <input
        placeholder="Pesquisar"
        className={styles.searchBar}
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}/>
    <div className='card-map'>    
        <ul className={styles.cardList}>
        {cardsFiltrados.map((card) => <Card key={card.id} Name={card.name} description={card.description} price={card.price} imagemUrl={card.imagemUrl} type={card.type}/>)}
        </ul>
    </div>
    </div>
    
    )
};

export default HomePage;