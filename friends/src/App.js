import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Header, Segment } from 'semantic-ui-react'

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Friends from "./components/Friends";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
      <Segment clearing>
      <Header as='h3' floated='right'>
      <div className="links">
            <Link to="/login">Login</Link>
            <Link to="/Friends">Friends</Link>
          </div>
          </Header>
          </Segment>
        <Switch>
        <PrivateRoute exact path="/friends" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
