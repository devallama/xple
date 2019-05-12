import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from 'Routes/Route';
import ProtectedRoute from 'Routes/ProtectedRoute';
import NouserRoute from 'Routes/NouserRoute';

import TemplateLanding from 'Pages/templates/page-templates/Landing';
import TemplateMain from 'Pages/templates/page-templates/Main';

import PageLanding from 'Pages/Landing';
import PageLogin from 'Pages/Login';
import PageSignup from 'Pages/Signup';
import PageProjects from 'Pages/Projects';
import PageProjectHome from 'Pages/ProjectHome';
import PageProjectReferences from 'Pages/ProjectReferences';

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
                        pageTemplate={TemplateMain}
                        title="Projects"
                    />
                    <ProtectedRoute
                        path="/project/:projectId/home"
                        component={PageProjectHome}
                        pageTemplate={TemplateMain}
                        title="Project home"
                    />
                    <ProtectedRoute
                        path="/project/:projectId/learning-tools"
                        component={PageProjectHome}
                        pageTemplate={TemplateMain}
                        title="Learning tools"
                    />
                    <ProtectedRoute
                        path="/project/:projectId/references"
                        component={PageProjectReferences}
                        pageTemplate={TemplateMain}
                        title="References"
                    />
                    <ProtectedRoute
                        path="/project/:projectId/timeline"
                        component={PageProjectHome}
                        pageTemplate={TemplateMain}
                        title="Timeline"
                    />
                    <ProtectedRoute
                        path="/project/:projectId/resources"
                        component={PageProjectHome}
                        pageTemplate={TemplateMain}
                        title="Resources"
                    />
                    <ProtectedRoute
                        path="/project/:projectId/milestones"
                        component={PageProjectHome}
                        pageTemplate={TemplateMain}
                        title="Goals &amp; Milestones"
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