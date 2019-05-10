import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
    render() {
        return (
            <div className="row column medium-5">
                <h1>Extensi-ple</h1>
                <p>
                    xple is an extesible personal learning environment providing tools to assist in the learning and
                    management of your education journey.
                </p>
                <p>
                    Create an account to get started or login.
                </p>
                <div className="m-t-8 landing-auth-btns">
                    <Link to="/sign-up" className="btn btn--fixed btn--primary">SIGN UP</Link>
                    <Link to="/login" className="btn btn--fixed btn--secondary">LOGIN</Link>
                </div>
                <div className="m-t-4 m-medium-t-8">
                    <Link to="/learning-tools" className="btn btn--neutral btn--cta">See the learning tools</Link>
                </div>
            </div>
        );
    }
}

export default Landing;