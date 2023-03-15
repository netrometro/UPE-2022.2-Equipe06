import styles from './Assets/cards.module.css'

const Card = ({Name, description, price, imagemUrl}) => {

    const handleToCart = () => {
        alert("ERRO: Não foi possível adicionar este item ao carrinho")
    }

    return(
        <div className={styles.card}>    
            <img src={imagemUrl}></img>  
            <h2>{Name}</h2>
            <p>{description}</p>
            <p className={styles.price}>{price}</p>
            <button className={styles.botaoAddCarrinho} onClick={handleToCart}>Adicionar ao carrinho</button>
        </div>

    );
}

export default Card;
