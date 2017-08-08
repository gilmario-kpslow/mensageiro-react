import React, { Component } from 'react';
import mensagemApi from '../logicas/mensagemApi';
import { Col, Row,Button } from 'react-bootstrap';

export default class Conversa extends Component {
    constructor(){
        super();
        this.state = {msg:''};
    }

    enviar(evt){
        evt.preventDefault();
        this.props.context.store.dispatch(mensagemApi.mensagem("Mensagem en"));
    }

    

    render() {
        return (
            <div>
                CONVERSA
                <br/>
                <Button onClick={this.enviar.bind(this)}>OK</Button>
            </div>
        );
    }
}