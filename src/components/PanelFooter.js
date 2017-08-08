import React, { Component } from 'react';

export default class PanelFooter extends Component {

render() {
        return (
            <div className="panel-footerd">
                {this.props.children}
            </div>
        );
    }
}