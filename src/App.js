import React, { useEffect } from 'react';
import './Css/App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './Components/StateProvider';
import { auth } from './firebase';

function App() {

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if(authUser){
            //user is logged in...
            dispatch({
              type: "SET_USER",
              user: authUser,
            });

        }else{
            //user is logged out...
            dispatch({
              type: "SET_USER",
              user: null,
            });
        }
    });

    return () => {
      //Any clean up operations go in here...
      unsubscribe();
    }

  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>

            <Route path="/checkout">
                <Header/>
                <Checkout/>
            </Route>
            <Route path="/login">
                <Login/>
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
