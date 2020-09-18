import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Works from './pages/Works.jsx';
import Blog from './pages/Blog.jsx';
import Certificates from './pages/Certificates.jsx';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/works" component={Works}/>
        <Route exact path="/certificates" component={Certificates}/>
      </div>
    </Router>
  );
}

export default App;
