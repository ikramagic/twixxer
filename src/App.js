import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        {/* Ajoutez d'autres routes ici */}
      </Switch>
    </Router>
  );
}

export default App;
