import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Home from './components/home'
import { Container } from 'reactstrap'
import styles from './app.module.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';



function App() {
  return (
    <div className={styles.body}>
      <Router>
        <Route path="/" component={Header}/>
          <main>
            <Route path="/" exact component={Home}/>
          </main>
      </Router>
    </div>
  );
}

export default App;
