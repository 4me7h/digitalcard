import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import "./Content.scss";

const Content = (props) => {
    const {name, position, company, aboutText, email, phone, whatsapp, whatsappmssg, facebook, facebookURL, twitter} = props;
    const twitterURL = `https://twitter.com/${twitter}`;
    const emailURL = `mailto:${email}`;
    const phoneURL = `tel:${phone}`;
    const whatsappURL = `https://wa.me/${whatsapp}?text=${whatsappmssg}`;

    return(
        <section className="content">
            <Container>
                <Row>
                    <Col>
                        <div className="content__container">
                            <div className="content__header">
                                <span className="content__name">{name}</span>
                                <span className="content__position">{position}</span>
                                <span className="content__company">{company}</span>
                            </div>
                            <div className="content__about">
                                <span className="content__about__text">
                                    {aboutText}
                                </span>
                            </div>
                            <div className="content__contact">
                                <span className="content__contact__title">Contáctame</span>
                                <span className="content__contact__email">E-mail: <a href={emailURL}>{email}</a></span>
                                <span className="content__contact__phone">Teléfono: <a href={phoneURL}>{phone}</a> </span>
                                <span className="content__contact__whatsapp">WhatsApp: <a href={whatsappURL} target="_blank">{phone}</a> </span>
                                <span className="content__contact__facebook">Facebook: <a href={facebookURL} target="_blank">{facebook}</a></span>
                                <span className="content__contact__twitter">Twitter: <a href={twitterURL} target="_blank">{twitter}</a></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Content;