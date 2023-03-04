import { Link } from 'react-router-dom'
import styles from "./Assets/Navbar.module.css"
import home_button from "../images/botao-de-inicio-changed.png"
import Container from './Container';

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <ul>
                    <li><Link to="/cadastro">Entrar</Link></li>
                </ul>
                <Link to="/"> <img src={home_button} width={56} height={45} alt="home"></img></Link>         
            </Container>
        </nav>
    )
}

export default Navbar;