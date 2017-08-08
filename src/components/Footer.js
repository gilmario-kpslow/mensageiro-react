import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="container">

                </div>
                <div className="footer-copyright">
                    <div className="container">
                        <Row>
                            <Col md={4} xs={6}>
                                <span>teste</span>
                            </Col>
                            <Col md={4} xs={6}>
                                <span>teste@informatica.com.br</span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </footer>
        );
    }
}