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
            <Card Name="Bayonetta" description="Joguinho da bayonetta" price="R$70" imagemUrl="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/pt_BR/games/switch/b/bayonetta-switch/hero"/>
            <Card Name={"Resident Evil 8"} description="Resident evil com vampiros" price={"R$40"} imagemUrl="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2021/01/resident-evil-8-gameplay.jpg"/>
            <Card Name={"Album da olivia rodrigo"} description="Album que sobrou no estoque e ninguem quer" imagemUrl="https://s2.glbimg.com/XKc4iWAR1rOmbCK55PGBymr1W6w=/0x0:2000x2000/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/2/h/WCTKdxRVGnhyoE1A6jiA/oliviacapa.jpg" price={"RS0"}/>
          </>
        ) : (
          <p className={styles.nada}>Nenhuma promoção no momento!</p>
        )}
      </div>
    </div>
  );
};

export default Promo;

