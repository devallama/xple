import React from 'react';

import dayjs from 'dayjs';

class Milestone extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPopupVisible: false
        };

        this.popupRef = React.createRef();

        document.body.addEventListener('click', this.bodyClick);
    }

    bodyClick = event => {
        if (this.popupRef.current && !this.popupRef.current.contains(event.target)) {
            this.togglePopup();
        }
    }

    togglePopup = () => {
        this.setState({
            isPopupVisible: !this.state.isPopupVisible
        });
    }

    render() {
        const { milestone } = this.props;
        const milestoneDate = dayjs(milestone.date);
        const positionX = (milestoneDate.diff(this.props.startDate, 'day') / this.props.dayDifference) * 100;

        return (
            <div className="timeline-mini__milestone-container"
                style={{ left: `${positionX}%` }}
            >
                <button key={milestone.id}
                    className={`timeline-mini__milestone timeline-mini__milestone--${milestone.type}`}
                    aria-label="Milestone details"
                    onClick={this.togglePopup}
                >
                </button>
                {this.state.isPopupVisible && (
                    <div className="popup-box__container">
                        <div className="timeline-mini__milestone-popup popup-box popup-box--fixed popup-box--origin" ref={this.popupRef}>
                            <div className="timeline-mini__milestone-info">
                                <img className="timeline-mini__mileston-icon" src={`/assets/icons/indicator-${milestone.type}.svg`} />
                                <span>{milestone.type}</span>
                                <div className="timeline-mini__milestone-date">
                                    Due date: <span className="weight--light">{milestoneDate.format("D MMM YYYY")}</span>
                                </div>
                                <button className="popup-box__close" onClick={this.togglePopup} aria-label="Close popup" />
                            </div>
                            <h3 className="timeline-mini__milestone-title">{milestone.name}</h3>
                            <p className="timeline-mini__milestone-description">{milestone.description}</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Milestone;