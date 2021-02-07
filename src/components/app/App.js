import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
  makeStyles,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header/Header';
import Container from '../Container/Container';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    left: 0,
    boxSizing: 'border-box',
    minWidth: '100vw',
    maxWidth: '100vw',
    minHeight: '100vh',
  },
});
export default function App() {
  const [lightOrDark, setLightOrDark] = useState(true);
  const palletType = lightOrDark ? 'light' : 'dark';
  const classes = useStyles();
  let theme = createMuiTheme({
    palette: {
      type: palletType,
    },
    typography: {
      fontFamily: 'sans-serif',
      body1: {
        fontSize: '1.2rem',
        LineHeight: 1.6,
      },
      body2: {
        fontSize: '1.0rem',
        lineHeight: 1.6,
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return (
    <main className={classes.root}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header setLightOrDark={setLightOrDark} lightOrDark={lightOrDark} />
          <Switch>
            <Route path='/' component={Container} />
            <Route path='/about' component={Container} />
            <Route path='/portfolio' component={Container} />
            <Route path='/resume' component={Container} />
            <Route path='/contact' component={Container} />
          </Switch>
        </ThemeProvider>
      </Router>
    </main>
  );
}
