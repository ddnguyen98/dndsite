import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './app.module.css';

import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Sheets from './components/sheets';
import Character from './components/character';
import Alerts from './components/alerts';
import Forgot from './components/forgot';
import Reset from './components/reset';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className={styles.body}>
        <Router>
          <Route path="/" component={Header} />
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/forgot" exact component={Forgot} />
            <Route path="/reset" exact component={Reset} />
            <Route path="/register" exact component={Register} />
            <Route path="/sheets" exact component={Sheets} />
            <Route path="/character/:id" exact component={Character} />
            <Alerts />
          </main>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
