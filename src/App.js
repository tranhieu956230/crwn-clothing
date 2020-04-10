import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import ShopPage from "pages/ShopPage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
