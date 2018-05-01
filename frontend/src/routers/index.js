import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import Home from "../containers/Home";
import Search from "../containers/Search";

const customHistory = createBrowserHistory();

const MainRouters = () => (
    <Router history={ customHistory }>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/search" component={ Search }/>
        </Switch>
    </Router>
);

export default MainRouters;