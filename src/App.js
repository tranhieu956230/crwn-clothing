import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import Header from "components/Header";
import LoginPage from "pages/LoginPage";
import ShopPage from "pages/ShopPage";

import { auth, createUserProfileDocument } from "./firebase";

import "./App.css";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    return auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }, []);

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
