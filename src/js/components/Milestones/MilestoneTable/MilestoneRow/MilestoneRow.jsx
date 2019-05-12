import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { milestoneDelete } from 'Actions/milestone-actions';

import validUrl from 'valid-url';

class MilestoneRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuVisible: false,
            isDeletePopupVisible: false
        };

        this.menuRef = React.createRef();

        document.body.addEventListener('click', this.bodyClick);
    }

    bodyClick = event => {
        if (this.menuRef.current && !this.menuRef.current.contains(event.target)) {
            this.toggleMenu();
        }

        if (this.state.isDeletePopupVisible && event.target == event.currentTarget) {
            this.closeDeletePopup();
        }
    }

    toggleMenu = () => {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        });
    }

    closeDeletePopup = () => {
        this.setState({
            isDeletePopupVisible: false
        }, () => document.body.classList.remove('overlay'));
    }

    showDeletePopup = () => {
        this.toggleMenu();

        this.setState({
            isDeletePopupVisible: true
        }, () => document.body.classList.add('overlay'));
    }

    deleteMilestone = milestoneId => {
        this.props.milestoneDelete(milestoneId);

        this.closeDeletePopup();
    }

    render() {
        const { milestone } = this.props;
        return (
            <tr className="milestones__row" key={milestone.id}>
                <td className="milestones__cell">
                    {milestone.name}
                </td>
                <td className="milestones__cell">
                    {milestone.date}
                </td>
                <td className="milestones__cell">
                    {milestone.description}
                </td>
                <td className="milestones__cell">
                    <button onClick={this.toggleMenu}
                        className="project-card__menu-toggle"
                        aria-label="Milestone options menu"
                    />
                    {this.state.isMenuVisible && (
                        <div className="popup-box__container">
                            <div className="project-card__menu popup-box popup-box--origin" ref={this.menuRef}>
                                <ul className="project-card__menu-list">
                                    <li className="project-card__menu-item">
                                        <button className="link" onClick={this.showDeletePopup}>Delete {milestone.type}</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {this.state.isDeletePopupVisible && (
                        <div className="popup-box p-4">
                            Are you sure you want to delete this milestone?
                            <div className="text-center m-t-2">
                                <button className="btn btn--neutral btn--small weight--light m-r-1"
                                    onClick={this.closeDeletePopup}
                                >
                                    No
                                </button>
                                <button className="btn btn--danger btn--small weight--light m-l-1"
                                    onClick={() => this.deleteMilestone(milestone.id)}
                                >
                                    Yes
                                </button>
                            </div>
                        </div>
                    )}
                </td>
            </tr>
        );
    }
}

MilestoneRow.propTypes = {
    milestoneDelete: PropTypes.func.isRequired,
    response: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return ({
        response: state.milestone.response
    });
};

export default connect(mapStateToProps, { milestoneDelete })(MilestoneRow);