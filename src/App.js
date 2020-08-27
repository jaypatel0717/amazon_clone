import React from 'react';
import './Css/App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app">
      <Header/>
        <Switch>
        
            <Route path="/checkout">
                <Checkout/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
