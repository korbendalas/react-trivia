import React from 'react';
import Setup from './components/Setup';
import Quiz from './components/Quiz';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import history from './components/history';
function App() {
  return (
  <Router history={history}>
    <div className="container">
    <Route exact path="/" component={Setup} />
    <Route exact path="/quiz" component={Quiz} />
    </div>
  </Router>
  );

}

export default App;
