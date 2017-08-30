import React, { Component } from 'react';
import mensagemApi from '../logicas/mensagemApi';
import { Col, Row, Button } from 'react-bootstrap';
import Conexao from '../logicas/Conexao';
import Header from './Header';


export default class Conversa extends Component {
    constructor() {
        super();
        this.state = { msg: '' };
        this.conexao = new Conexao('teste', () => { console.log("open") }, this.mensagem.bind(this), (data) => { console.log(data) });
    }

    mensagem(data) {
        this.setState({ msg: `${this.state.msg} ${<br />} ${data}` });
    }

    enviar(evt) {
        evt.preventDefault();
        this.conexao.enviar("Mensagem");
    }

    render() {
        return (
            <div>
            <Header/>
            <div className="container">
                
                <Row>
                    <Col md={12}>
                        <span>{this.state.msg}</span>
                        <Button onClick={this.enviar.bind(this)}>OK</Button>
                    </Col>
                    <Col md={6} xs={6}>
                        <Button block bsStyle="success"><span className="fa fa-check"></span> OK</Button>
                    </Col>
                </Row>
            </div>
            </div>
        );
    }
}