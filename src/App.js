import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import Header from "components/Header";
import LoginPage from "pages/LoginPage";
import ShopPage from "pages/ShopPage";

import { auth } from "./firebase";

import "./App.css";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    return auth.onAuthStateChanged((user) => setCurrentUser(user));
  });

  return (
    <div>
      <Header currentUser={currentUser} />
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
