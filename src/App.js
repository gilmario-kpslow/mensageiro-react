import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Relogio from './components/Relogio';

class App extends Component {
    render() {
        return (
            <div className="main">
                    <Header/>
                        <Relogio/>
                        {this.props.children}
                    <Footer/>
            </div>
        );
    }
};

App.contextTypes = {
  store : React.PropTypes.object.isRequired
}

export default App;
