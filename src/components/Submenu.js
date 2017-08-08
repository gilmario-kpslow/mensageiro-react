import React, { Component } from 'react';

export default class Submenu extends Component {

    constructor(){
        super();
        this.state = {visivel:'dropdown'};
    }

    mostrar(event){
        event.preventDefault()
        const estado= this.state.visivel === 'dropdown'? 'dropdown open':'dropdown'
        this.setState({visivel:estado});
    }

    click(event){
        event.preventDefault();
    }

    render() {
        return (
            <li className={this.state.visivel}  onClick={this.mostrar.bind(this)}>
                <a onClick={this.click.bind(this)} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.props.nome} <span className="caret"></span></a>
                <ul className="dropdown-menu">
                    {this.props.children}
                </ul>
            </li>
        );
    }
}