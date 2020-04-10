import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import Header from "components/Header";
import LoginPage from "pages/LoginPage";
import ShopPage from "pages/ShopPage";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/signin">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
