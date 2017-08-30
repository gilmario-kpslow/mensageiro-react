import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import {Route, BrowserRouter, Redirect} from 'react-router-dom'
import Login from './components/Login';
import Conversa from './components/Conversa';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {mensagem} from './reducers/mensagemReducer';
import {Provider} from 'react-redux';
import Notificacao from './components/Notificacao';
import LoginManager from './logicas/LoginManager';

//import registerServiceWorker from './registerServiceWorker';

const reducers = combineReducers({mensagem});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
let usuario;




ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/login" component={Login}/>
                <Route path="/" component={LoginManager.isLogado(usuario, Conversa, Login )} />
                <Route path="/conversa" component={Conversa}/>
                <Route path="/notificar" component={Notificacao}/>
            </App>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);
//registerServiceWorker();
