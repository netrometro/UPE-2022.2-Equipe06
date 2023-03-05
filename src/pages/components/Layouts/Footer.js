import React from "react";
import styles from "../Layouts/Assets/Footer.module.css"
import { Link } from 'react-router-dom'


const Footer = () => {
    return(
        <Footer className={styles.footer}>
        <ul>
            <li>
                
            </li>
            <li>
                
            </li>
        </ul>
        <div className={styles.footer}>
            <li className={styles.navItem}><Link to="/contato">Contato</Link></li>
            <p>&copy; 2023 </p>
        </div>
        </Footer>
    )
}

export default Footer;