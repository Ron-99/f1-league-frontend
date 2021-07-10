import React from 'react';

import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";

import { isAuthenticated } from './services/auth';

import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ClassificationPage from './pages/ClassificationPage';
import DriversPage from './pages/DriversPage';
import DriverPage from './pages/DriverPage';
import ClassificationDriverPage from './pages/ClassificationDriverPage';
import ClassificationTeamPage from './pages/ClassificationTeamPage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import RegisterPage from "./pages/RegisterPage";

const HeaderCustom = ({themeToggler, theme}) => {
    const location = useLocation().pathname;

    return (
        location === "/" ? "" :
        <Nav theme={theme} themeToggler={themeToggler}/>
    )
};

const NotAuthenticated = ({path, component}) => {
  if(!isAuthenticated())
    return <Route path={path} component={component}/>
}

const FooterCustom = () => {
    const location = useLocation().pathname;

    return(
        location === "/" ? "" :
        <Footer />
    )
}

const Routes = ({themeToggler, theme}) => (
    <BrowserRouter>
        <HeaderCustom themeToggler={themeToggler} theme={theme}/>
        <Switch>
            <Route exact path='/' component={() => (<HomePage themeToggler={themeToggler} theme={theme} />)} />
            <Route exact path='/classification' component={ClassificationPage} />
            <Route exact path='/driver' component={DriversPage} />
            <Route path='/driver/:id' component={DriverPage} />
            <Route path='/classification/driver' component={ClassificationDriverPage} />
            <Route path='/classification/team' component={ClassificationTeamPage} />
            <NotAuthenticated path='/D56B699830E77BA53855679CB1D252DA' component={LoginPage} />
            <NotAuthenticated path='/register' component={RegisterPage} />
            <Route path='*' component={NotFound} />


        </Switch>
        <FooterCustom />
        
    </BrowserRouter>
);

export default Routes;
