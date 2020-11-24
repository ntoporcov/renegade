import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import {NavBar} from "./components/common/nav";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import colors from "./utils/colors";
import Footer from "./components/common/footer";
import Industries from "./pages/Industries";
import Team from "./pages/Team"
import Contact from "./pages/Contact";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: colors.lightTeal,
            main: colors.teal,
            dark: colors.darkTeal,
            contrastText: '#ffffff',
        },
        secondary: {
            light: colors.gold,
            main: colors.white,
            dark: colors.gray.barely,
            contrastText: colors.teal,
        },
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <NavBar/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/industries" component={Industries}/>
                <Route path="/team" component={Team}/>
                <Route path="/contact" component={Contact}/>
            <Footer/>
        </BrowserRouter>
    </ThemeProvider>,
  document.getElementById('root')
);
