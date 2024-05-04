import React, { useEffect } from "react";

import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { type } from "@testing-library/user-event/dist/type";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment";

const promise = loadStripe("pk_test_51PCNQJSJ5thDR4RgFIbNxc7WDwoxMSJwVXk6g5OuMcnmHMJsle5WT1Q3TTTxBzdbrhOsVNfweM2y3wmyqiAcxNJa00L7T9Ng6y");

function App() {
  const [{}, dispatch] = useStateValue();


  useEffect(() =>{
    //will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>',authUser);

      if(authUser) {
        //the user just logged in/ the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })//as soon as the app loads we attach this listener
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout"element={[<Header />,<Checkout/>]}/> 
          <Route path="/" element={[<Header />, <Home />]}/>
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={[
             <Header />,
             <Elements stripe={promise}>
                <Payment />
             </Elements> 
          ]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

