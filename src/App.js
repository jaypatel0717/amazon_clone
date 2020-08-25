import React from 'react';
import './Css/App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app">
      {/* <Header/> */}
        <Switch>
        
            <Route path="/checkout">
                <h2>Checkout</h2>
            </Route>
            <Route path="/login">
                <h2>Login</h2>
            </Route>
            <Route path="/">
                <Header/>
                <Home/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
