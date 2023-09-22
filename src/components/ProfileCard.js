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
                phone = "9616085205"
                whatsapp = "529616085205"
                whatsappmssg ="I'm%20interested%20in%20your%20car%20for%20sale"
                facebook = "Abraham Gómez José"
                facebookURL = "https://www.facebook.com/abraham.gomezjose" 
                twitter = "abrahamjose83"  
            />
        </section>
    );
}

export default Card;