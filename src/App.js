import React, { useEffect } from 'react';
import './App.css';
import Header from './header/header';
import Home from './home/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { auth } from './Firebase/Firebase';
import { UseStateValue } from './StateProvider/StateProvider';
// import { UseStateValue } from './StateProvider/StateProvider';
const App = () => {
  const [state, dispatches] = UseStateValue();
  const fahad =false

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log('sdhjhjfsa', authUser);
      if (authUser) {
        dispatches({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatches({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, [dispatches]);
  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route>
              {/* <Login /> */}
              {fahad?state:null}
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
