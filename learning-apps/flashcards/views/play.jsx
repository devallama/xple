import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 1rem;
`;

const CardContainer = styled.div`
    margin-top: 2rem;
`;

const CardFlip = styled.div`
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
    margin: 0 auto;

    &:focus {
        outline: 0;
    }
`;

const CardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    ${CardFlip}:hover &,
    ${CardFlip}:focus & {
        transform: rotateY(180deg);
    }
`;

const CardSide = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
`

const CardFront = styled(CardSide)`
    background: linear-gradient(to top left, #68DDD5, #8294D6);
    color: black;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardBack = styled(CardSide)`
    background: linear-gradient(to bottom right, #68DDD5, #8294D6);
    color: white;
    transform: rotateY(180deg);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardLabel = styled.h4`
    font-size: 1.5rem;
`;

const ControlWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
`;

class ViewPlay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentFlashcard: 0
        }
    }

    incFlash = () => {
        if (this.state.currentFlashcard + 1 < this.props.selectedFlashstack.flashstack.length) {
            this.setState({
                currentFlashcard: this.state.currentFlashcard + 1
            });
        } else {
            this.setState({
                currentFlashcard: 0
            });
        }
    }

    randomFlash = () => {
        const getRandom = (min, max) => {
            let num = Math.floor(Math.random() * (max - min)) + min;

            if (num == this.state.currentFlashcard) {
                num = getRandom(min, max);
            }

            return num;
        };

        const num = getRandom(0, this.props.selectedFlashstack.flashstack.length - 1);

        this.setState({
            currentFlashcard: num
        })
    }

    descFlash = () => {
        if (this.state.currentFlashcard != 0) {
            this.setState({
                currentFlashcard: this.state.currentFlashcard - 1
            });
        } else {
            this.setState({
                currentFlashcard: this.props.selectedFlashstack.flashstack.length - 1
            });
        }
    }

    render() {
        const flashstack = this.props.selectedFlashstack;
        const currentFlashcard = flashstack.flashstack[this.state.currentFlashcard];

        const Flashcard = () => (
            <CardFlip>
                <CardInner>
                    <CardFront>
                        <CardLabel>
                            {currentFlashcard.front}
                        </CardLabel>
                    </CardFront>
                    <CardBack>
                        <CardLabel>
                            {currentFlashcard.back}
                        </CardLabel>
                    </CardBack>
                </CardInner>
            </CardFlip>
        );

        return (
            <Wrapper>
                <h2>Learning: {flashstack.name}</h2>
                <CardContainer>
                    <Flashcard />
                </CardContainer>
                <ControlWrapper>
                    <button type="button" className="btn btn--neutral" onClick={this.descFlash}>Previous</button>
                    <button type="button" className="btn btn--primary" style={{ borderRadius: '0' }} onClick={this.randomFlash}>Random</button>
                    <button type="button" className="btn btn--neutral" onClick={this.incFlash}>Next</button>
                </ControlWrapper>
            </Wrapper>
        );
    }
}

export default ViewPlay;