import React, { Component } from 'react';

export default class PanelHeader extends Component {

render() {
        return (
            <div className="panel-titulo">
                <span className={this.props.icone}></span> {this.props.titulo}
            </div>
        );
    }
}