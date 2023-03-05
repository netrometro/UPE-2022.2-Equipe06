import React from "react";
import styles from "../Layouts/Assets/Footer.module.css"
import { Link } from 'react-router-dom'
import {FaFacebook, FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return(
        <footer className={styles.footer}>
        <div>
            <li className={styles.contact}><Link to="/contato">Contato</Link></li>
            <p>&copy; 2023 </p>
        </div>
        <ul className={styles.social_list}>
            <li>
                <FaFacebook />
            </li>
            <li>
                <FaInstagram />
            </li>
        </ul>
        </footer>
    )
}

export default Footer;