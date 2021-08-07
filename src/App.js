import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Details from "../src/components/Details/Details";
import MainPage from "../src/components/MainPage/MainPage";
import Registration from "../src/components/Registration/Registration";
import Store from "../src/components/Store/Store";

const history = createBrowserHistory();


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/store/:params" history={history}>
            <Store />
          </Route>
          <Route path="/details/:idMovie" history={history}>
            <Details />
          </Route>
          <Route path="/registration" history={history}>
            <Registration />
          </Route>
          <Route path="/" history={history}>
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
