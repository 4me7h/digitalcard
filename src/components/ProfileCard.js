import React from "react";

import Photo from './Photo';
import Content from './Content';

import './ProfileCard.scss';

const Card = () => {
    return (
        <section className="profile-card">
            <Photo />
            <Content />
        </section>
    );
}

export default Card;