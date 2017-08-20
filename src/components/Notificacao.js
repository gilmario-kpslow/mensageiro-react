import React, { Component } from 'react';
import {Button, Panel, ControlLabel, FormControl, FormGroup, Col, Row} from 'react-bootstrap'
import PanelHeader from "./PanelHeader"
import PanelFooter from "./PanelFooter"
import musica from "../audio/alerta.mp3"

export default class Login extends Component {

    notificar(){
        console.log(musica)
    
        new Notification("Atenção",{
            body:'Você tem um novo Chamado',
             sound: musica
        })
    }

    componentDidMount(){
        Notification.requestPermission()
    }

    render() {
        return (
            <div className="container">
                <Row>
                    <Col md={4} mdPush={4}>
                        <Panel header={<PanelHeader titulo="Teste" icone="fa fa-user"/>} bsStyle="default" footer={
                            <PanelFooter>
                                <Row>
                                    <Col md={6} xs={6}>
                                        <Button block bsStyle="success" onClick={this.notificar.bind(this)}><span className="fa fa-check"></span> OK</Button>
                                    </Col>
                                </Row>
                            </PanelFooter>
                            }>
                            <Row>
                                <Col md={12}>

                                </Col>
                            </Row>
                        </Panel>
                    </Col>
                </Row>
            </div>
        );
    }

}

