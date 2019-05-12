import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { referenceCreate } from 'Actions/reference-actions';

import { Form, Field, Label, Input, Textarea, ResetButton } from 'Components/Form/Form';

import dayjs from 'dayjs';

class CreateReferenceForm extends React.Component {
    constructor(props) {
        super(props);

        this.fields = {
            name: {
                errorMessages: {
                    required: "A name for the reference is required"
                }
            },
            author: {
                errorMessages: {
                    required: "The author is required"
                }
            },
            source: {},
            dateAdded: {
                hidden: true,
                value: dayjs().format('YYYY-MM-DD')
            },
            projectId: {
                hidden: true,
                value: props.projectId
            }
        };
    }

    closeForm = () => {
        this.props.toggleCreateProjectForm();
    }

    render() {
        return (
            <Form fields={this.fields} className="form form--login" multiSubmit={true} noValidate
                submitMethod={this.props.referenceCreate} afterSubmitMethod={this.props.toggleCreateReferenceForm}>
                <h1>Create reference</h1>
                <p>All fields marked with an asterisk (<span className="color--warn">*</span>) are required.</p>
                <Field name="name">
                    <Label>Reference name <span className="color--warn">*</span></Label>
                    <Input required />
                </Field>
                <Field name="author">
                    <Label>Author</Label>
                    <Input required />
                </Field>
                <Field name="source">
                    <Label>Source</Label>
                    <Input />
                </Field>
                <ResetButton className="btn btn--warn btn--upper weight--light form__btn"
                    fn={this.props.toggleCreateReferenceForm}
                >
                    Cancel
                </ResetButton>
                <button type="submit" className="btn btn--primary btn--upper weight--light form__btn">Create</button>
            </Form>
        );
    }
}

CreateReferenceForm.propTypes = {
    referenceCreate: PropTypes.func.isRequired,
    response: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return ({
        response: state.reference.response
    });
};

export default connect(mapStateToProps, { referenceCreate })(CreateReferenceForm);