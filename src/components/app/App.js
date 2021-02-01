import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Container from '../Container/Container';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles.root}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Container} />
          <Route path="/about" component={Container} />
          <Route path="/portfolio" component={Container} />
          <Route path="/resume" component={Container} />
          <Route path="/contact" component={Container} />
        </Switch>
      </Router>
    </div>
  );
}
