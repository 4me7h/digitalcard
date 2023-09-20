import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import "./Content.scss";

const Content = () => {
    return(
        <section className="content">
            <Container>
                <Row>
                    <Col>
                        <div className="content__container">
                            <div className="content__header">
                                <span className="content__name">Nombre del usuario</span>
                                <span className="content__position">Cargo o profesion del usuario</span>
                                <span className="content__company">Compañía del usuario</span>
                            </div>
                            <div className="content__contact">
                                <span className="content__contact__email">E-mail: algo@algo.com</span>
                                <span className="content__contact__phone">Phone: 2343434443</span>
                                <span className="content__contact__facebook">Facebook: nombredeusuario</span>
                                <span className="content__contact__twitter">Twitter: @nombredeusuario</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Content;