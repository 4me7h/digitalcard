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
                        <span className="content__name">Nombre del usuario</span>
                        <span className="content__position">Cargo o profesion del usuario</span>
                        <span className="content__company">Compañía del usuario</span>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Content;