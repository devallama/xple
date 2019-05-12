import React from 'react';

import CreateMilestoneForm from '../CreateMilestoneForm/CreateMilestoneForm';
import MilestoneRow from './MilestoneRow/MilestoneRow';

class MilestoneTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isCreateMilestoneFormVisible: false
        };

        document.body.addEventListener('mousedown', this.closeSidebarOffclick);
    }

    toggleCreateMilestoneForm = () => {
        this.setState({
            isCreateMilestoneFormVisible: !this.state.isCreateMilestoneFormVisible
        }, () => {
            this.state.isCreateMilestoneFormVisible ? document.body.classList.add('overlay') : document.body.classList.remove('overlay');
        });
    }

    closeSidebarOffclick = event => {
        if (this.state.isCreateMilestoneFormVisible && event.target == event.currentTarget) {
            this.toggleCreateMilestoneForm();
        }
    }

    render() {
        let milestonesItems;

        if (this.props.milestones.length > 0) {
            milestonesItems = this.props.milestones.map(milestone => (
                <MilestoneRow milestone={milestone} key={milestone.id} />
            ));
        } else {
            milestonesItems = (
                <tr className="milestones__row">
                    <td className="milestones__cell" colSpan="5">No {this.props.type}s created.</td>
                </tr>
            );
        }

        return (
            <div className={`milestones milestones--${this.props.type}`}>
                <h2 className="milestones__header">{this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1)}s</h2>
                <table className="milestones__table" >
                    <thead className="milestones__thead">
                        <tr>
                            <th className="milestones__heading">Name</th>
                            <th className="milestones__heading">Date</th>
                            <th className="milestones__heading">Description</th>
                            <th className="milestones__heading"></th>
                        </tr>
                    </thead>
                    <tbody className="milestones__tbody">
                        {milestonesItems}
                    </tbody>
                </table>
                <button className="m-t-2 btn btn--primary weight--light btn--add" onClick={this.toggleCreateMilestoneForm}>
                    Create {this.props.type}
                </button>
                {this.state.isCreateMilestoneFormVisible &&
                    <div className="side-overlay side-overlay--right">
                        <CreateMilestoneForm projectId={this.props.projectId} type={this.props.type} toggleCreateMilestoneForm={this.toggleCreateMilestoneForm} />
                    </div>
                }
            </div>
        );
    }
}

export default MilestoneTable;

// .propTypes = {

// };

// const mapStateToProps = state => {
//     return ({

//     });
// };

// export default connect(mapStateToProps, {})();