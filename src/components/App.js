import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FormBuilder from './FormBuilder';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FormBuilder} />
      </Switch>
    </Router>
  );
}

export default App;
