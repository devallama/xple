import React from 'react';

import { deepMap } from 'Util/react-children';

import Field from './Field/Field';
import Label from './Field/Label/Label';
import Input from './Field/Input/Input';

class Form extends React.Component {
    constructor(props) {
        super(props);

        const defaultFieldState = {
            value: "",
            touched: false,
            valid: true,
            errorMessage: ""
        };

        this.state = {
            isSubmitting: false,
            fields: { ...props.fields }
        };

        Object.keys(this.state.fields).forEach(key =>
            this.state.fields[key] = { ...this.state.fields[key], ...defaultFieldState }
        );
    }

    updateField = (fieldName, field) => {
        this.setState({
            fields: { ...this.state.fields, [fieldName]: field }
        });
    }

    validateField = (field, input) => {
        const { validity } = input;

        field.valid = true;
        field.touched = true;

        if (field.customValidation) {
            let validations = field.customValidation;

            Object.keys(validations).forEach(key => {
                if (!validations[key](field, this.state.fields)) {
                    field.valid = false;
                    field.errorMessage = field.errorMessages[key];
                }
            });
        }

        if (!validity.valid && field.valid) {
            const validationErrors = {};

            for (const key in validity) {
                const value = validity[key];

                if (value) {
                    validationErrors[key] = value;
                }
            }

            field.valid = false;

            switch (Object.keys(validationErrors)[0]) {
                case "valueMissing":
                    field.errorMessage = field.errorMessages.required;
                    break;
                case "typeMismatch":
                    field.errorMessage = field.errorMessages.format;
                    break;
                case "tooShort":
                    field.errorMessage = field.errorMessages.lengthShort;
                    break;
                default:
                    field.errorMessage = "This field is not valid.";
            }
        }

        return field;
    }

    validateFieldsOnSubmit(fields, event) {
        Object.keys(fields).forEach(key => {
            let input = event.target.querySelector(`[name=${key}]`);
            fields[key] = this.validateField(fields[key], input);
        });

        this.setState({
            ...fields
        }, this.onSubmit(event));
    }

    resetForm = (hardReset = false) => {
        let fields = { ...this.state.fields };

        Object.keys(fields).forEach(key => {
            const resetField = () => fields[key].value;

            if (hardReset) {
                resetField();
            } else if (!fields[key].keep) {
                resetField();
            }
        });

        this.setState({
            fields: fields
        });
    }

    onSubmit = event => {
        event.preventDefault();

        const fields = this.state.fields;
        const fieldKeys = Object.keys(fields);

        if (fieldKeys.some(key => !fields[key].touched)) {
            this.validateFieldsOnSubmit(fields, event);
            return;
        } else {
            if (!fieldKeys.some(key => !fields[key].valid)) {
                if (this.state.isSubmitting) return;

                // Submit
                this.setState({
                    isSubmitting: true
                }, () => {
                    let formValues = {};

                    Object.entries(fields).forEach(([key, field]) => formValues[key] = field.value);

                    if (this.props.submitMethod instanceof Promise) {
                        this.props.submitMethod(formValues)
                            .catch(err => {
                                console.log(err);
                            })
                            .finally(() => {
                                this.setState({
                                    isSubmitting: false
                                })
                            });
                    } else {
                        this.props.submitMethod(formValues);

                        this.setState({
                            isSubmitting: false
                        });
                    }

                    /* If form can be submitted multiple times, reset it */
                    if (this.props.multiSubmit) {
                        this.resetForm();
                    }
                });
            }
        }
    }

    render() {
        const applyProps = element => {
            if (element.type == Field) {
                return React.cloneElement(element, {
                    field: this.state.fields[element.props.name],
                    updateField: this.updateField,
                    validateField: this.validateField,
                    hideError: this.props.hideErrors
                });
            } else {
                return React.cloneElement(element);
            }
        };

        const children = deepMap(this.props.children, applyProps, child => child.type != Field);

        return (
            <form noValidate={this.props.noValidate} className={this.props.className} onSubmit={this.onSubmit}>
                {children}
            </form>
        );
    }
}

export default Form;

export {
    Form,
    Field,
    Input,
    Label
};