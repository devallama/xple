import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from 'Components/LoginForm/LoginForm';

class Login extends React.Component {
    render() {
        return (
            <div className="row column medium-3">
                <h1>Login to xple</h1>
                <LoginForm />
                <Link to="/sign-up" className="btn btn--neutral btn--cta btn--small btn--fullwidth m-t-4 m-medium-t-6">Don't have an account? Sign up</Link>
            </div>
        );
    }
}

export default Login;