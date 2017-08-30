import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Relogio from './components/Relogio';

class App extends Component {

    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){
        
        
    }

    render() {
        return (
            <div>
                <div className="main">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
};

export default App;
