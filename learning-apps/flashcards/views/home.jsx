import React from 'react';

import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
`;

const Item = styled.li`
    background-color: white;
    padding: 1rem;
    margin: 2rem;
    width: calc(50% - 4rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`;

const Button = styled.button`
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border-radius: 0;
`;

class ViewHome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const flashstacks = this.props.flashstacks.map(flashstack => (
            <Item key={flashstack.id}>
                {flashstack.name.toUpperCase()}
                <Button className="btn btn--primary" type="button" onClick={() => this.props.setCurrentFlashstack(flashstack.id)}>Go</Button>
            </Item>
        ));

        return (
            <div>
                <div className="row">
                    <div className="column small-8">
                        <h2>Welcome to your flashcards, {this.props.user.name}</h2>
                    </div>
                    <div className="column small-4 text-right">
                        <button onClick={() => this.props.changeView('create')} className="btn btn--primary btn--add">Create flashstack</button>
                    </div>
                </div>
                <List>
                    {flashstacks}
                </List>
            </div>
        );
    }
}

export default ViewHome;