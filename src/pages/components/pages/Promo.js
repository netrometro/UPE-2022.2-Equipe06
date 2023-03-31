import styles from "../Layouts/Assets/Promo.module.css"
import Card from '../cards/Card'
import React, { useState, useEffect } from 'react';


const Promo = () => {
  const [tempoRestante, setTempoRestante] = useState(1500); // lembrar que é tempo em segundos
  const [ativa, setAtiva] = useState(true); // promoção está on?

  useEffect(() => {
    const timer = setTimeout(() => {
      setTempoRestante(tempoRestante - 1);
    }, 1000);

    // limpa o contador
    return () => clearTimeout(timer);
  }, [tempoRestante]);

  // termina a propomoção
  useEffect(() => {
    if (tempoRestante === 0) {
      setAtiva(false);
    }
  }, [tempoRestante]);
  
  // converte segundos em minutos
  const minutos = Math.floor(tempoRestante / 60);
  const segundos = tempoRestante % 60;
  const tempoFormatado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

  return (
    <div className={styles.containerPromo}>
      <div>
        <h2 className={styles.title}>Promoções Relâmpago!!!</h2>
        {ativa && (
          <span className={styles.timer}>{tempoFormatado}</span>
        )}
        {ativa ? (
          <>
         
          </>
        ) : (
          <p className={styles.nada}>Nenhuma promoção no momento!</p>
        )}
      </div>
    </div>
  );
};

export default Promo;

