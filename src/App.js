import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import TaskInput from './pages/TaskInput/TaskInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (<>
      <Router>
        {/* <Route path="/" component={Home}/> */}
        <Route path="/" component={TaskInput}/>
        <Nav/>
      </Router>
    </>
  );
}

export default App;
