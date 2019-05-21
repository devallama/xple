import React from 'react';

import styled from 'styled-components';

import ViewHome from './views/home';
import ViewCreate from './views/create';
import ViewPlay from './views/play';

const Views = {
    home: ViewHome,
    create: ViewCreate,
    play: ViewPlay
};

const Wrapper = styled.div`
    background-color: #EAEEF6;
    padding: 1rem;
    box-sizing: border-box;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
`;

const Heading = styled.h1`
    display: inline-block;
    margin: 0.5rem 0 0;
`;

const HomeLink = styled.button`
    display: inline-block;
    margin-left: 2rem;
    font-size: 1.5rem;
    margin-top: 0.5rem;
`;

class FlashcardsApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentView: 'home',
            flashstacks: [],
            selectedFlashstack: null
        }

        this.getUserFlashStacks();
    }

    getUserFlashStacks = () => {
        this.props.db.collection("flashstacks").where("uid", "==", this.props.user.uid)
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } });

                this.setState({
                    flashstacks: data
                })
            });
    }

    setCurrentFlashstack = id => {
        const flashstack = this.state.flashstacks.find(f => f.id == id);

        if (flashstack) {
            this.setState({
                selectedFlashstack: flashstack
            });

            this.changeView('play');
        }
    }

    changeView = view => {
        this.setState({
            currentView: view
        });
    }

    render() {
        const View = Views[this.state.currentView] || Views.home;
        return (
            <Wrapper className="flashcards-container">
                <div className="row column">
                    <Header>
                        <Heading>Flashcards</Heading>
                        <HomeLink className="link link--purple" onClick={() => this.changeView('home')}>home</HomeLink>
                    </Header>
                </div>
                <View {...this.props} changeView={this.changeView} flashstacks={this.state.flashstacks} setCurrentFlashstack={this.setCurrentFlashstack} selectedFlashstack={this.state.selectedFlashstack} />
            </Wrapper>
        );
    }
}

export default FlashcardsApp;