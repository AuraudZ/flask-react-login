import React  from 'react';
import { ThemeProvider,theme,ColorModeProvider, CSSReset , } from '@chakra-ui/core';
import ThemeToggler from './components/ThemeToggler'
import  Login  from './pages/Login.js'
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import {useAuth} from './auth'
import Home from './pages/Home'
import Secret from  './pages/Secret'
import Register  from  './pages/Register'
import AccountButton from './components/AccountButton';
import Win from './pages/Win';
import Main from './pages/Main.js'
export default function App() {
  return (
    <Router>
    <ThemeProvider theme={theme}>
    <ColorModeProvider>
    <CSSReset />
    <ThemeToggler />
    <AccountButton/>
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>   
      <Route path ="/register">
        <Register/>
      </Route>
      </Switch>
     <Switch >
      <Route exact path="/" >
          <Redirect to='/home'/>
      </Route>   
      <Route exact path='/home'>
        <Home/>
      </Route>
      </Switch>  
      <Switch>
      <Route exact path="/win">
       <Win/>
      </Route>
        <Route path ="/main">
          <Main/>
          </Route>
        </Switch>
      <PrivateRoute path="/secret" component={Secret} />    
    </ColorModeProvider>
  </ThemeProvider>
</Router>
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

//   <Router>
//  

// </Router>