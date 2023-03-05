import React from "react";
import styles from "../Layouts/Assets/Footer.module.css"
import { Link } from 'react-router-dom'
import {FaFacebook, FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return(
        <footer className={styles.footer}>          
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram />
                </li>
            </ul>
            <div className={styles.contactContainer}>
                <Link className={styles.contact} to="/contato">Contato</Link>
                <p>&copy; 2023 </p>
            </div>
        </footer>
    )
}

export default Footer;