import React, { useEffect } from 'react';
import './App.css';
import Header from './header/header';
import Home from './home/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { auth } from './Firebase/Firebase';
import { UseStateValue } from './StateProvider/StateProvider';
import Payment from './Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Order from './order/Order';
const promise = loadStripe(
  'pk_test_51HQcxaIJj1Xhx6S6juS9ntE1YorDUkJmoKKLvG2IJbRLVS8M4bsMaaLVVTmJXOeROS90XRXOGbPzcG5PqdkO7IUJ00HmgTwql3'
);
const App = () => {
  const [state, dispatches] = UseStateValue();
  const fahad = false;

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
            <Route path="/order">
              <Order />
            </Route>
            <Route path="/payment">
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route>
              {/* <Login /> */}
              {fahad ? state : null}
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
