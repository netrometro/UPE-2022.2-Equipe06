import React from "react";
import styles from "../Layouts/Assets/Footer.module.css"
import { Link } from 'react-router-dom'
import {FaFacebook, FaInstagram} from 'react-icons/fa'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';



const ContatoButton = ({ tipo, contato, mensagem }) => {
  
  const handleClick = () => {
    if (tipo === 'whatsapp') {
      // Manda pro wpp
      window.open(`https://wa.me/${contato}?text=${mensagem}`, '_blank');
    } else if (tipo === 'email') {
      // Manda pra o email com o endereço colocado
      window.location.href = `mailto:${contato}`;
    } else if (tipo==='insta'){
      //Manda pro insta
      window.open(`https://www.instagram.com/${contato}/`, '_blank');
    } else if (tipo === 'face'){
      window.open(`https://pt-br.facebook.com/people/${contato}`, '_blank');

  }}

  return (
    <button onClick={handleClick}>
      {tipo === 'whatsapp' ? (
        <FaWhatsapp />
      ) : tipo === 'email' ? (
        <FaEnvelope  />
      ) : tipo ==='insta' ? (
        <FaInstagram/>
      ) : tipo ==='face' ? (
        <FaFacebook/>
      )
      : ("")
      
      }
    </button>
  );
};

const Footer = () => {
    return(
        <footer className={styles.footer}>          
            <ul className={styles.social_list}>
                
                <li>
                <ContatoButton tipo={"email"} contato="mikhaelvini@gmail.com"/>
                <ContatoButton tipo={"insta"} contato="badmyke_"/>
               
                <ContatoButton tipo={"whatsapp"} contato="558182238577" mensagem={" Olá, você será redirecionado para a nossa atendente pessoal. "}/>

                </li>
            </ul>
            <div className={styles.contactContainer}>
                <Link className={styles.contact} to="/contato"></Link>
                <p>&copy; 2023 </p>
            </div>
        </footer>
    )
}


export default Footer;


