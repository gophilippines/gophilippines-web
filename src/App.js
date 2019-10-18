import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
//MUI
import CssBaseline from '@material-ui/core/CssBaseline';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import home from './pages/home';

//admin
import dashboard from './users/dashboard';
import login from './users/login';
import signup from './users/signup';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthProvider>
        <CssBaseline />
        
        <Router>
          <Navbar />
          <Switch>
          
            <PrivateRoute exact path="/dashboard" component={dashboard}/>
            <Route exact path="/" component={home}/>
            <Route exact path="/login" component={login}/>
            <Route exact path="/signup" component={signup}/>
           
          </Switch>
          <Footer />
        </Router>
        </AuthProvider>
      </div>
    )
  }
}

export default App
