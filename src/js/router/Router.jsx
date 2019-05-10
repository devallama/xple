import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from 'Routes/Route';
import ProtectedRoute from 'Routes/ProtectedRoute';
import NouserRoute from 'Routes/NouserRoute';

import TemplateLanding from 'Pages/templates/page-templates/Landing';

import PageLanding from 'Pages/Landing';
import PageLogin from 'Pages/Login';
import PageSignup from 'Pages/Signup';
import PageProjects from 'Pages/Projects';

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={PageLanding}
                        pageTemplate={TemplateLanding}
                        title="Extensi-ple Home"
                    />
                    <NouserRoute
                        path="/login"
                        component={PageLogin}
                        pageTemplate={TemplateLanding}
                        title="Login"
                        redirect="/projects"
                        hideMobileBackground={true}
                    />
                    <NouserRoute
                        path="/sign-up"
                        component={PageSignup}
                        pageTemplate={TemplateLanding}
                        title="Sign up"
                        redirect="/projects"
                        hideMobileBackground={true}
                    />
                    <ProtectedRoute
                        path="/projects"
                        component={PageProjects}
                        title="Projects"
                    />
                    {/* <NouserRoute
                        path="/login"
                        component={PageLogin}
                        title="Login"
                        redirect="/dashboard"
                    />
                    <NouserRoute
                        path="/login-anon"
                        component={PageLoginAnon}
                        title="Login Anonymously"
                        redirect="/dashboard"
                    />
                    
                    <ProtectedRoute
                        path="/logout"
                        component={PageLogout}
                        title="Logout from Plantinerary"
                        redirect="/"
                    />
                    <ProtectedRoute
                        path="/dashboard"
                        component={PageDashboard}
                        title="Trips Dashboard"
                        redirect="/"
                    />
                    <ProtectedRoute
                        path="/planner"
                        component={PagePlanner}
                        title="Trip Planner"
                        redirect="/"
                    /> */}
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;