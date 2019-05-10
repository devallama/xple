import React from 'react';
import { Link } from 'react-router-dom';

import SignupForm from 'Components/SignupForm/SignupForm';

class Register extends React.Component {
    render() {
        return (
            <div className="row column medium-3">
                <h1>Sign up to xple</h1>
                <SignupForm />
                <Link to="/login" className="btn btn--neutral btn--cta btn--small btn--fullwidth m-t-4 m-medium-t-6">Already have an account? Login</Link>
            </div>
        );
    }
}

export default Register;