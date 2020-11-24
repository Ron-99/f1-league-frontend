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

const HeaderCustom = ({themeToggler, theme}) => {
    const location = useLocation().pathname;

    return (
        location === "/" ? "" :
        <Nav theme={theme} themeToggler={themeToggler}/>
    )
};

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
            {

                !isAuthenticated()
                    ?
                    <Route path='/login' component={LoginPage} />
                    :
                    ""
            }
            <Route path='*' component={NotFound} />


        </Switch>
        <FooterCustom />
        
    </BrowserRouter>
);

export default Routes;