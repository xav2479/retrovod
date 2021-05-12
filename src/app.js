import React from 'react'
import { HashRouter as Router, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { Home, Browse, Signup, Signin, Contact, Condition, Politique} from './pages'
import { IsUserRedirect, ProtectedRoute }  from './helpers/route'
import { useAuthListener } from './hooks'


export default function App() {
  
  const {user} = useAuthListener()
 
  return (
    <Router>
      <Switch>
        <IsUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE} 
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE} 
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute 
          user={user} 
          path={ROUTES.BROWSE} 
        >
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE} 
          path={ROUTES.HOME}
          exact
        >
          <Home /> 
        </IsUserRedirect>
        <IsUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE} 
          path={ROUTES.CONTACT}
        >
          <Contact />
        </IsUserRedirect> 
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.CONDITIONS}
        >
        <Politique />
        </IsUserRedirect>
        </Switch>
    </Router>
  );
}


