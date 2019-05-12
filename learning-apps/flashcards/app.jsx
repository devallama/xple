import React from 'react';

class FlashcardsApp extends React.Component {
    constructor(props) {
        super(props);

        this.props.db.doc("LA").set({
            name: "Los Angeles",
            state: "CA",
            country: "USA"
        });
    }

    render() {
        return (
            <div className="flashcards-container">
                Flashcards
                <div className="btn">Button</div>
                test
            </div>
        );
    }
}

export default FlashcardsApp;