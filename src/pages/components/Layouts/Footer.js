import React from "react";
import styles from "../Layouts/Assets/Footer.module.css"
import { Link } from 'react-router-dom'


const Footer = () => {
    return(
        <div className={styles.footer}>
            <li className={styles.navItem}><Link to="/contato">Contato</Link></li>
            <p>&copy;@ 2023 </p>
        </div>
    )
}

export default Footer;