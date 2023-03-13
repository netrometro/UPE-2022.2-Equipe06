import React from "react";
import styles from "./Assets/Home.module.css"
import { useEffect, useState } from "react";
import api from '../../../services/api.js'
import Card from "../cards/Card";

export const HomePage = () => {

    const [card, setCards] = useState([]);
    useEffect(() => {
        api.get("/produtos")
        .then((response) => {
            setCards(response.data);
            console.log(response.data);
            
        }).catch((error) => {
            console.log(error);
          });
      }, []);

    return (
    <div className='card-map'>
        <h1 className={styles.h1}>Mais buscados na semana</h1>
        <Card name={card.Name} description={card.description} price={card.price}/>  
    </div>
    )
};

export default HomePage;