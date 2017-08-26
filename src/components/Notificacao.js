import React, { Component } from 'react';
import { Button, Panel, ControlLabel, FormControl, FormGroup, Col, Row } from 'react-bootstrap'
import PanelHeader from "./PanelHeader"
import PanelFooter from "./PanelFooter"
import musica from "../audio/audio01.mp3"
import ReactAudioPlayer from 'react-audio-player';


export default class Login extends Component {

constructor(){
    super()
    this.state ={}
}
    


    notificar() {
        new Notification("Atenção", {
            body: 'Você tem um novo Chamado'
        })
        let player = (
            <ReactAudioPlayer src={musica} autoPlay onEnded={()=>{ this.setState({player:undefined})} }/>
        )
        this.setState({player:player})
        
    }

    componentDidMount() {
        Notification.requestPermission()
    }



    render() {
        return (
            <div className="container">
                <Row>
                    <Col md={4} mdPush={4}>
                        <Panel header={<PanelHeader titulo="Teste" icone="fa fa-user" />} bsStyle="default" footer={
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
                                        {
                                            this.state.player
                                        }
                                </Col>
                            </Row>
                        </Panel>
                    </Col>
                </Row>
            </div>
        )
    }
}