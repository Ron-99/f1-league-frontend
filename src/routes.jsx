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

const HeaderCustom = () => {
    const location = useLocation().pathname;

    return (
        <Route
            render={() =>
                location === "/" ? (
                    <HomePage />
                ) : (
                        <Nav />
                    )
            }
        />
    )
};

const Routes = () => (
    <BrowserRouter>
        <HeaderCustom />
        <Switch>
            <Route exact path='/classification' component={ClassificationPage} />
            <Route exact path='/driver' component={DriversPage} />
            <Route path='/driver/:id' component={DriverPage} />
            <Route path='/classification/driver' component={ClassificationDriverPage} />
            <Route path='/classification/team' component={ClassificationTeamPage} />
            {

                !isAuthenticated
                    ?
                    <Route path='/login' component={LoginPage} />
                    :
                    ""
            }


        </Switch>

        
    </BrowserRouter>
);

export default Routes;