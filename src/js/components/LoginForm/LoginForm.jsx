import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authLogin } from 'Actions/auth-actions';

import { Form, Field, Label, Input } from 'Components/Form/Form';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.fields = {
            email: {
                errorMessages: {
                    required: "Your email address is required",
                    format: "The email address given must be valid"
                },
                keep: true
            },
            password: {
                errorMessages: {
                    required: "A password is required",
                    lengthShort: "Your password must be more than 8 characters"
                }
            }
        };
    }

    render() {
        return (
            <Form fields={this.fields} className="form form--login" multiSubmit={true} noValidate
                submitMethod={this.props.authLogin}>
                <Field name="email">
                    <Label>Email Address</Label>
                    <Input type="email" required />
                </Field>
                <Field name="password">
                    <Label>Password</Label>
                    <Input type="password" required />
                </Field>
                <button type="submit" className="btn btn--secondary btn--fixed form__submit m-t-5">LOGIN</button>
            </Form>
        );
    }
}

LoginForm.propTypes = {
    authLogin: PropTypes.func.isRequired,
    response: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return ({
        response: state.auth.response
    });
}

export default connect(mapStateToProps, { authLogin })(LoginForm);