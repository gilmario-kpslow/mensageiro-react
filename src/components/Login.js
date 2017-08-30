import React, { Component } from 'react';
import {Button, Panel, ControlLabel, FormControl, FormGroup, Col, Row} from 'react-bootstrap'
import PanelHeader from "./PanelHeader"
import PanelFooter from "./PanelFooter"


export default class Login extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    onLogin(event){
        event.preventDefault();
        
    }

    render() {
        return (
            <div className="container">
                <Row>
                    <Col md={4} mdPush={4}>
                        <Panel header={<PanelHeader titulo="Login" icone="fa fa-user"/>} bsStyle="default" footer={
                            <PanelFooter>
                                <Row>
                                    <Col md={6} xs={6}>
                                        <Button block bsStyle="success" onClick={this.onLogin.bind(this)}><span className="fa fa-check" ></span> OK</Button>
                                    </Col>
                                </Row>
                            </PanelFooter>
                            }>
                            <Row>
                                <Col md={12}>
                                    <FormGroup controlId="login">
                                        <ControlLabel>Login</ControlLabel>
                                        <FormControl type="text" placeholder="Nome de usuário"/>
                                    </FormGroup>
                                    <FormGroup controlId="senha">
                                        <ControlLabel>Senha</ControlLabel>
                                        <FormControl type="password" placeholder="Senha"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Panel>
                    </Col>
                </Row>
            </div>
        );
    }

}

