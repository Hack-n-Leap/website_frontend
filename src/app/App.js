import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
// import Login from './pages/Login';
// import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/leaderboard" component={Leaderboard} />
        {/* <Route path="/login" component={Login} />
        <Route path="/register" component={Register} /> */}
      </Switch>
    </Router>
  );
}

export default App;