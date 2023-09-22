import React from "react";

import Photo from './Photo';
import Content from './Content';

import './ProfileCard.scss';
import img from '../images/img.jpg'


const Card = () => {
    return (
        <section className="profile-card">
            <Photo 
                photo = {img}
            />
            <Content 
                name = "Abraham Gómez José"
                position = "Especialista en Juicio Oral Penal"
                company = "Especialista en Juicio Laboral"
                aboutText = "La defensa legal que mereces, en cada palabra y argumento, sirviendo con experiencia."
                email = "abrahamjose83@gmail.com"
                phone = "961 60 85 205"
                whatsapp = "529616085205"
                whatsappmssg ="Estoy%20interesado%20en%20tu%20servicio"
                facebook = "Abraham Gómez José"
                facebookURL = "https://www.facebook.com/abraham.gomezjose" 
                twitter = "@abrahamjose83"  
            />
        </section>
    );
}

export default Card;