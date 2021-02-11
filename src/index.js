import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, useLocation } from "react-router-dom";
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
            light: colors.primaryLight,
            main: colors.primary,
            dark: colors.primaryDark,
            contrastText: '#ffffff',
        },
        secondary: {
            light: colors.secondary,
            main: colors.white,
            dark: colors.gray.barely,
            contrastText: colors.primary,
        },
    },
});

function ScrollToTop() {
    const locationState  = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [locationState]);

    return null;
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <ScrollToTop/>
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
