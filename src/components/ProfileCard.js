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
                position = {["Abogado Especialista en", <br />, "Juicio Oral, Laboral y Penal."]}
                company = "CED: 6255376"
                aboutText = {["Mis servicios jurídicos son de brindarte una defensa técnica adecuada en materia penal, laboral, familiar y amparo.", <br />, <br />, <em>"La justicia es la constante y perpetua voluntad de dar a cada uno su derecho." Ulpiano</em> ]}
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