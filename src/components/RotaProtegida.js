import { React } from 'react-dom'
import { Redirect, Route } from 'react-router-dom'
import LoginManager from "../logicas/LoginManager"


export default ({ user: user, component: Component, ...rest }) => (
    <Route {...rest} render={props => (
       LoginManager.isLogado(user) ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )


