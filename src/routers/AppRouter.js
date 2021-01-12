import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import CodeDashboardPage from "../components/CodeDashboardPage";
import AddCodePage from "../components/AddCodePage";
import EditCodePage from "../components/EditCodePage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory(); //use <Router> to pass in custom history instead of <BrowserRouter> which uses browser history by default

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={CodeDashboardPage} />
                <PrivateRoute path="/create" component={AddCodePage} />
                <PrivateRoute path="/edit/:id" component={EditCodePage} />

                <PublicRoute component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
