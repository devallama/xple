import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { referenceDelete } from 'Actions/reference-actions';

import validUrl from 'valid-url';

class ReferenceRow extends React.Component {
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

    deleteReference = referenceId => {
        this.props.referenceDelete(referenceId);

        this.closeDeletePopup();
    }

    render() {
        const { reference } = this.props;
        return (
            <tr className="references__row" key={reference.id}>
                <td className="references__cell">
                    {reference.name}
                </td>
                <td className="references__cell">
                    {reference.author}
                </td>
                <td className="references__cell">
                    {validUrl.isUri(reference.source) ?
                        (
                            <a href={reference.source} target="_blank" rel="noopener">{reference.source}</a>
                        ) : reference.source
                    }
                </ td>
                <td className="references__cell">
                    {reference.dateAdded}
                </td>
                <td className="references__cell">
                    <button onClick={this.toggleMenu}
                        className="project-card__menu-toggle"
                        aria-label="Reference options menu"
                    />
                    {this.state.isMenuVisible && (
                        <div className="popup-box__container">
                            <div className="project-card__menu popup-box popup-box--origin" ref={this.menuRef}>
                                <ul className="project-card__menu-list">
                                    <li className="project-card__menu-item">
                                        <button className="link" onClick={this.showDeletePopup}>Delete reference</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {this.state.isDeletePopupVisible && (
                        <div className="popup-box p-4">
                            Are you sure you want to delete this reference?
                            <div className="text-center m-t-2">
                                <button className="btn btn--neutral btn--small weight--light m-r-1"
                                    onClick={this.closeDeletePopup}
                                >
                                    No
                                </button>
                                <button className="btn btn--danger btn--small weight--light m-l-1"
                                    onClick={() => this.deleteReference(reference.id)}
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

ReferenceRow.propTypes = {
    referenceDelete: PropTypes.func.isRequired,
    response: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return ({
        response: state.reference.response
    });
};

export default connect(mapStateToProps, { referenceDelete })(ReferenceRow);