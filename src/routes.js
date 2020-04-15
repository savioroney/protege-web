import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home/Home'
import Header from "./components/header";
import Footer from "./components/footer";

export default function Routes() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/contact">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}



