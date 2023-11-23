// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Market from './components/Market';
import Trade from './components/Trade';
import Pricing from './components/Pricing';
import Download from './components/Download';
import Help from './components/Help';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/market" component={Market} />
        <Route path="/trade" component={Trade} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/download" component={Download} />
        <Route path="/help" component={Help} />
      </Switch>
    </Router>
  );
}

export default App;
