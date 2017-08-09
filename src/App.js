import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Relogio from './components/Relogio';


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Relogio/>
                <div className="main">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
};

App.contextTypes = {
  store : React.PropTypes.object.isRequired
}

export default App;
