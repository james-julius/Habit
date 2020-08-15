import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import TaskInput from './pages/TaskInput/TaskInput';
import Insights from './pages/Insights/Insights';
import Settings from './pages/Settings/Settings.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (<>
      <Router>
        <Switch>
          <Route exact path="/" componen={Home}/>
          <Route path="/tasks" component={TaskInput}/>
          <Route path="/insights" component={Insights}/>
          <Route path="/settings" component={Settings}/>
        </Switch>
        <Nav/>
      </Router>
    </>
  );
}

export default App;
