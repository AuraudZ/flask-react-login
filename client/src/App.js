import React  from 'react';
import { ThemeProvider,theme,ColorModeProvider, CSSReset , } from '@chakra-ui/core';
import ThemeToggler from './components/ThemeToggler'
import  Login  from './pages/Login.js'
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import {useAuth} from './auth'
import Home from './pages/Home'
import Secret from  './pages/Secret'
import Register  from  './pages/Register'
import Win from './pages/Win';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
      <Router>
        <CSSReset />
        <ThemeToggler />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>   
          <Route path ="/register">
            <Register/>
          </Route>
         <Switch >
          <Route path="/" exact="true" >
              <Home/>
          </Route>   
        </Switch>  
          <Route path="/win">
            <Win/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
        <PrivateRoute path="/secret" component={Secret} />    
        </Switch>
      </Router>
      </ColorModeProvider>
    </ThemeProvider>
 
  );
 
  } 
  const PrivateRoute = ({ component: Component, ...rest }) => {
    const [logged] = useAuth();
  
    return <Route {...rest} render={(props) => (
      logged
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  }
