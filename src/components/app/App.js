import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Header from '../Header/Header';
import Container from '../Container/Container';
import styles from './App.css';

const themeDark = createMuiTheme({
  palette: {
    background: {
      defualt: 'dark',
    },
  },
});

const themeLight = createMuiTheme({
  palette: {
    background: {
      defualt: 'light',
    },
  },
});

export default function App() {
  const [light, setLight] = useState(true);
  return (
    <div className={styles.root}>
      <Router>
        <ThemeProvider theme={light ? themeLight : themeDark}>
          <CssBaseLine />
          <Header setLight={setLight} />
          <Switch>
            <Route path="/" component={Container} />
            <Route path="/about" component={Container} />
            <Route path="/portfolio" component={Container} />
            <Route path="/resume" component={Container} />
            <Route path="/contact" component={Container} />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}
