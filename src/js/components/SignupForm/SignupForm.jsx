import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authRegister } from 'Actions/auth-actions';

import { Form, Field, Label, Input } from 'Components/Form/Form';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.fields = {
            name: {
                errorMessages: {
                    required: "Your name is required"
                },
                keep: true
            },
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
            },
            confirmPassword: {
                errorMessages: {
                    required: "Please confirm your password",
                    match: "The password given does not match the one above"
                },
                customValidation: {
                    match: (field, fields) => field.value == fields.password.value
                }
            },
        };
    };

    render() {
        return (
            <Form fields={this.fields} className="form form--login" multiSubmit={true} noValidate
                submitMethod={this.props.authRegister}>
                <Field name="name">
                    <Label>Name</Label>
                    <Input required />
                </Field>
                <Field name="email">
                    <Label>Email Address</Label>
                    <Input type="email" required />
                </Field>
                <Field name="password">
                    <Label>Password</Label>
                    <Input type="password" required />
                </Field>
                <Field name="confirmPassword">
                    <Label>Confirm Password</Label>
                    <Input type="password" required />
                </Field>
                <button type="submit" className="btn btn--primary btn--fixed form__submit m-t-5">SIGNUP</button>
            </Form>
        );
    }
}

SignupForm.propTypes = {
    authRegister: PropTypes.func.isRequired,
    response: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return ({
        response: state.auth.response
    });
}

export default connect(mapStateToProps, { authRegister })(SignupForm);