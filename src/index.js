import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import {Route, BrowserRouter} from 'react-router-dom'
import Login from './components/Login';
import Conversa from './components/Conversa';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {mensagem} from './reducers/mensagemReducer';
import {Provider} from 'react-redux';
import WebSocket from './components/TesteWebSocket';

//import registerServiceWorker from './registerServiceWorker';

const reducers = combineReducers({mensagem});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/login" component={Login}/>
                <Route path="/teste" component={WebSocket}/>
                <Route path="/conversa" component={Conversa}/>
            </App>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);
//registerServiceWorker();
