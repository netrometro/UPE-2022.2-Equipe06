import { Link } from 'react-router-dom'
import styles from "./Assets/Navbar.module.css"
import home_button from "../images/botao-de-inicio-changed.png"
import Container from './Container';
import search from "../images/search-changed.png"
import promocoes from "../images/etiqueta-de-desconto-changed.png"
import news from "../images/etiqueta-de-preco-changed.png"
import carrinho from "../images/shopping-cart-changed.png"
import perfil from "../images/perfil-de-usuario-changed.png"

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container className={styles.Container}>
                <ul>       
                <li className={styles.item}><Link className={styles.itemLink} to="/cadastro">registro</Link></li>
                <li className={styles.item}><Link className={styles.itemLink} to="/login">login</Link></li>
                <li className={styles.item}><Link to="/"> <img src={home_button} width={50} height={40} alt="home"></img></Link></li> 
                <li className={styles.item}><img src={search} width={35} height={35}></img></li>
                <li className={styles.item}><Link to="/promocoes"><img src={promocoes} width={35} height={35}></img></Link></li>
                <li className={styles.item}><Link to="/novidades"><img src={news} width={35} height={35}></img></Link></li>
                <li className={styles.item}><Link to="/carrinho"><img src={carrinho} width={35} height={35}></img></Link></li>
                <li className={styles.item}><Link to="/perfil"><img src={perfil} width={35} height={35}></img></Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;