import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CourseManager } from './components/CourseManager';
import { CourseEditor } from './components/CourseEditor'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/editor" component={CourseEditor} />
          <Route path="/" component={CourseManager} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
