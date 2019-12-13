import React from 'react';
import './App.css';
import styles from './app.module.css'

import Header from './components/header'
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'

import { Container } from 'reactstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom';



function App() {
  return (
    <div className={styles.body}>
      <Router>
        <Route path="/" component={Header}/>
          <main>
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
          </main>
      </Router>
    </div>
  );
}

export default App;
