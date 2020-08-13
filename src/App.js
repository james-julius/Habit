import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Router>
      <Route path="/" component={Home}/>
    </Router>
  );
}

export default App;
