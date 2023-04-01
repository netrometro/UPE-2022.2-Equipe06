import { useState, useEffect } from "react";
import Card from "../cards/Card";
import styles from "../Layouts/Assets/Promo.module.css";




const Promo = ({ promocoes }) => {
  const [tempoRestante, setTempoRestante] = useState(5); // lembrar que é tempo em segundos
  const [ativa, setAtiva] = useState(true); // promoção está on?

  useEffect(() => {
    const timer = setTimeout(() => {
      setTempoRestante(tempoRestante - 1);
    }, 1000);

    // limpa o contador
    return () => clearTimeout(timer);
  }, [tempoRestante]);

  // termina a promoção
  useEffect(() => {
    if (tempoRestante === 0) {
      setAtiva(false);
    }
  }, [tempoRestante]);

  // formata o tempo restante em minutos e segundos
  const minutos = Math.floor(tempoRestante / 60);
  const segundos = tempoRestante % 60;
  const tempoFormatado =
    tempoRestante > 0
      ? `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`
      : "00:00";

  return (
    <div className={styles.containerPromo}>
      <div>
        <h2 className={styles.title}>Promoções Relâmpago!!!</h2>
        <span className={styles.timer}>{tempoFormatado}</span>
        {promocoes && promocoes.length > 0 ? (
          promocoes.map((promo) => (
            <Card
              key={promo.id}
              Name={promo.name}
              description={promo.description}
              price={promo.price}
              imagemUrl={promo.imageUrl}
            />
          ))
        ) : (
          <p className={styles.nada}>Nenhuma promoção no momento!</p>
        )}
      </div>
    </div>
  );
};

export default Promo;
