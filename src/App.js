import React from 'react';
import './Css/App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
            <Route path="/checkout">
                <h2>Checkout</h2>
            </Route>
            <Route path="/login">
                <h2>Login</h2>
            </Route>
            <Route path="/">
                <Header/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
