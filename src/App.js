/* import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
*/

import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { pageCounterAtom } from './store';

function App() {
  const [pageCount, setPageCount] = useAtom(pageCounterAtom);

  useEffect(() => {
    setPageCount((c) => c + 1);
  }, [setPageCount]);

  return (
    <div className="App">
      {/* Votre contenu d'application ici */}
    </div>
  );
}

export default App;