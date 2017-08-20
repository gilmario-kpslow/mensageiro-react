import React, { Component } from 'react';
import {Button } from 'react-bootstrap';

export default class TesteWebSocket extends Component {
    
    constructor(){
        super();
    }

    enviar(){
        
    }
    
    
    
    render() {
        return (
           <div>
                TESTE
                <br/>
                <Button onClick={this.enviar.bind(this)}>OK</Button>
           </div>
        );
    }
}