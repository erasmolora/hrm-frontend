import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Templates/Login';
import Organization from './Templates/Organization';
import SignUp from './Templates/SignUp';
import Dashboard from './Templates/Base';


export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/organization/" exact component={Organization} />
      <Route path="/organization/:organizationId">
        <Dashboard></Dashboard> 
      </Route>
    </Switch>
  );
}
