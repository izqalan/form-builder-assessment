import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FormBuilder from './FormBuilder';
import FormView from './FormView';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FormBuilder} />
        <Route exact path="/form" component={FormView} />
      </Switch>
    </Router>
  );
}

export default App;
