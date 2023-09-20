import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

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