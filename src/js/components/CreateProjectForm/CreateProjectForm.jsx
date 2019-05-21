import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { projectCreate } from 'Actions/project-actions';

import { Form, Field, Label, Input, Textarea, ResetButton } from 'Components/Form/Form';

class CreateProjectForm extends React.Component {
    constructor(props) {
        super(props);

        this.fields = {
            name: {
                errorMessages: {
                    required: "A name for the project is required"
                }
            },
            group: {},
            description: {
                errorMessages: {
                    required: "A description for the project is required"
                }
            },
            startDate: {
                errorMessages: {
                    required: "The start date for the project is required",
                    greaterThan: "The password given does not match the one above"
                }
            },
            endDate: {
                errorMessages: {
                    required: "The end date for the project is required",
                    greaterThan: "The end date must be after the start date"
                },
                customValidation: {
                    greaterThan: (field, fields) => field.value >= fields.startDate.value
                }
            }
        };
    }

    closeForm = () => {
        this.props.toggleCreateProjectForm();
    }

    render() {
        return (
            <Form fields={this.fields} className="form form--login" multiSubmit={true} noValidate
                submitMethod={this.props.projectCreate} afterSubmitMethod={this.props.toggleCreateProjectForm}>
                <h1>Create project</h1>
                <p>All fields marked with an asterisk (<span className="color--warn">*</span>) are required.</p>
                <Field name="name">
                    <Label>Project name <span className="color--warn">*</span></Label>
                    <Input required />
                </Field>
                <Field name="group">
                    <Label>Project group</Label>
                    <Input />
                </Field>
                <Field name="description">
                    <Label>Description</Label>
                    <Textarea required />
                </Field>
                <div className="row column">
                    <label className="form__label">Timeline</label>
                    <div className="column small-12 medium-6 p-medium-r-1">
                        <Field name="startDate">
                            <Label className="form__sub-label">Start date <span className="color--warn">*</span></Label>
                            <Input type="date" required />
                        </Field>
                    </div>
                    <div className="column small-12 medium-6 p-medium-l-1">
                        <Field name="endDate">
                            <Label className="form__sub-label">End date <span className="color--warn">*</span></Label>
                            <Input type="date" required />
                        </Field>
                    </div>
                </div>
                <ResetButton className="btn btn--warn btn--upper weight--light form__btn"
                    fn={this.props.toggleCreateProjectForm}
                >
                    Cancel
                </ResetButton>
                <button type="submit" className="btn btn--primary btn--upper weight--light form__btn">Create</button>
            </Form>
        );
    }
}

CreateProjectForm.propTypes = {
    projectCreate: PropTypes.func.isRequired,
    response: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return ({
        response: state.project.response
    });
};

export default connect(mapStateToProps, { projectCreate })(CreateProjectForm);