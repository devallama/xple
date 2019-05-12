import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { referencesFetch } from 'Actions/reference-actions';

import CreateReferenceForm from './CreateReferenceForm/CreateReferenceForm';
import ReferenceRow from './ReferenceRow/ReferenceRow';

class References extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isCreateReferenceFormVisible: false
        };

        this.props.referencesFetch(this.props.projectId);

        document.body.addEventListener('mousedown', this.closeSidebarOffclick);
    }

    toggleCreateReferenceForm = () => {
        this.setState({
            isCreateReferenceFormVisible: !this.state.isCreateReferenceFormVisible
        }, () => {
            this.state.isCreateReferenceFormVisible ? document.body.classList.add('overlay') : document.body.classList.remove('overlay');
        });
    }

    closeSidebarOffclick = event => {
        if (this.state.isCreateReferenceFormVisible && event.target == event.currentTarget) {
            this.toggleCreateReferenceForm();
        }
    }

    render() {
        let referencesItems;

        if (this.props.references.length > 0) {
            referencesItems = this.props.references.map(reference => (
                <ReferenceRow reference={reference} key={reference.id} />
            ));
        } else {
            referencesItems = (
                <tr className="references__row">
                    <td className="references__cell" colSpan="5">No references created.</td>
                </tr>
            );
        }

        return (
            <div className="references">
                <table className="references__table" >
                    <thead className="references__thead">
                        <tr>
                            <th className="references__heading">Name</th>
                            <th className="references__heading">Author</th>
                            <th className="references__heading">Source</th>
                            <th className="references__heading">Date added</th>
                            <th className="references__heading"></th>
                        </tr>
                    </thead>
                    <tbody className="references__tbody">
                        {referencesItems}
                    </tbody>
                </table>
                <button className="m-t-2 btn btn--primary weight--light btn--add" onClick={this.toggleCreateReferenceForm}>
                    Create reference
                </button>
                {this.state.isCreateReferenceFormVisible &&
                    <div className="side-overlay side-overlay--right">
                        <CreateReferenceForm projectId={this.props.projectId} toggleCreateReferenceForm={this.toggleCreateReferenceForm} />
                    </div>
                }
            </div>
        );
    }
}

References.propTypes = {
    projectId: PropTypes.string,
    referencesFetch: PropTypes.func.isRequired,
    references: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    return ({
        projectId: state.location.projectId,
        references: state.reference.references
    });
};

export default connect(mapStateToProps, { referencesFetch })(References);