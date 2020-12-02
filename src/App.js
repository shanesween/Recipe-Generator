import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import theme from './theme'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from "./components/home.component";
import About from "./components/about.component";
import Sets from "./components/sets/index";
import ProminentAppBar from "./components/app-bar.component";
import { Box } from "@material-ui/core";

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <ProminentAppBar />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/sets">
              <Sets />
            </Route>
          </Switch>
        </Router>
      </Box>
    </ThemeProvider>
  );
}




