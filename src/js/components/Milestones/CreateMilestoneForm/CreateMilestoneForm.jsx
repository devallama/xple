import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { milestoneCreate } from 'Actions/milestone-actions';

import { Form, Field, Label, Input, Textarea, ResetButton } from 'Components/Form/Form';

class CreateMilestoneForm extends React.Component {
    constructor(props) {
        super(props);

        this.fields = {
            name: {
                errorMessages: {
                    required: "A name for the milestone is required"
                }
            },
            type: {
                hidden: true,
                value: props.type
            },
            description: {
                errorMessages: {
                    required: "A description is required"
                }
            },
            date: {
                errorMessages: {
                    required: "The date for the milestone is required"
                }
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
                submitMethod={this.props.milestoneCreate} afterSubmitMethod={this.props.toggleCreateMilestoneForm}>
                <h1>Create {this.props.type}</h1>
                <p>All fields marked with an asterisk (<span className="color--warn">*</span>) are required.</p>
                <Field name="name">
                    <Label>Milestone name <span className="color--warn">*</span></Label>
                    <Input required />
                </Field>
                <Field name="description">
                    <Label>Description <span className="color--warn">*</span></Label>
                    <Textarea required />
                </Field>
                <Field name="date">
                    <Label>Date <span className="color--warn">*</span></Label>
                    <Input type="date" required />
                </Field>
                <ResetButton className="btn btn--warn btn--upper weight--light form__btn"
                    fn={this.props.toggleCreateMilestoneForm}
                >
                    Cancel
                </ResetButton>
                <button type="submit" className="btn btn--primary btn--upper weight--light form__btn">Create</button>
            </Form>
        );
    }
}

CreateMilestoneForm.propTypes = {
    milestoneCreate: PropTypes.func.isRequired,
    response: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return ({
        response: state.milestone.response
    });
};

export default connect(mapStateToProps, { milestoneCreate })(CreateMilestoneForm);