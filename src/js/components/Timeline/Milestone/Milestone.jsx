import React from 'react';

import dayjs from 'dayjs';

class Milestone extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPopupVisible: false
        };

        this.popupRef = React.createRef();
    }

    togglePopup = () => {
        this.setState({
            isPopupVisible: !this.state.isPopupVisible
        });
    }

    render() {
        const { milestone } = this.props;
        const milestoneDate = dayjs(milestone.date);
        const positionY = (milestoneDate.diff(this.props.startDate, 'day') / this.props.dayDifference) * 100;
        const isOdd = this.props.index % 2 == 0;

        return (
            <div className={`timeline__milestone-container ${isOdd ? "timeline__milestone-container--odd" : ""}`}
                style={{ top: `${positionY}%` }}
            >
                <button key={milestone.id}
                    className={`timeline__milestone timeline__milestone--${milestone.type}`}
                    aria-label="Milestone details"
                    onClick={this.togglePopup}
                >
                </button>
                {this.state.isPopupVisible && (
                    <div className="popup-box__container">
                        <div className="timeline__milestone-popup popup-box popup-box--fixed popup-box--origin" ref={this.popupRef}>
                            <div className="timeline__milestone-info">
                                <img className="timeline__mileston-icon" src={`/assets/icons/indicator-${milestone.type}.svg`} />
                                <span>{milestone.type}</span>
                                <div className="timeline__milestone-date">
                                    Due date: <span className="weight--light">{milestoneDate.format("D MMM YYYY")}</span>
                                </div>
                                <button className="popup-box__close" onClick={this.togglePopup} aria-label="Close popup" />
                            </div>
                            <h3 className="timeline__milestone-title">{milestone.name}</h3>
                            <p className="timeline__milestone-description">{milestone.description}</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Milestone;