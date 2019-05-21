import React from 'react';

class ViewHome extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="column small-8">
                    <h2>Welcome to your flashcards, {this.props.user.name}</h2>
                </div>
                <div className="column small-4 text-right">
                    <button onClick={() => this.props.changeView('create')} className="btn btn--primary btn--add">Create flashstack</button>
                </div>
            </div>
        );
    }
}

export default ViewHome;