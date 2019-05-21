import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 1rem;
    overflow: visible;
`;

const FieldsWrapper = styled.div`
    display: flex;
    padding: 0;
    margin: 0;
    border: 0;
    flex-direction: row;
    justify-content: space-between;
`;

const FieldsWrapperSeperated = styled(FieldsWrapper)`
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #68DDD5;
`;

const Field = styled.div`
    width: 48%;
    box-sizing: border-box;
`;

const Input = styled.input`
    width: 100%;
    display: inline-block;
`;

class ViewCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            flashstackName: '',
            flashstack: [{
                id: 0,
                front: '',
                back: ''
            }]
        };
    }

    saveFlashStack = event => {
        event.preventDefault();

        const data = {
            name: this.state.flashstackName,
            flashstack: this.state.flashstack.map(flashcard => flashcard.name != ''),
            uid: this.props.user.uid
        }

        if (data.name != '' && data.flashstack.length > 0) {
            this.props.db.collection("flashstacks").add(data)
                .then(() => {
                    this.props.changeView('home');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    addToFlashstack = () => {
        const nextId = Math.max(...Object.keys(this.state.flashstack)) + 1;
        const flashcard = {
            id: nextId,
            front: '',
            back: ''
        };

        this.setState({
            flashstack: [...this.state.flashstack, flashcard]
        });
    }

    handleInputChange = (event, id) => {
        const { name, value } = event.target;

        let flashstack = this.state.flashstack;
        flashstack[id][name] = value;

        this.setState({
            flashstack: flashstack
        });
    }

    handleInputChangeSingle = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        const fields = this.state.flashstack.map(flashcard => (
            <FieldsWrapperSeperated key={flashcard.id}>
                <Field>
                    <Input className="form__input" type="text" name="front" value={flashcard.front} onChange={event => this.handleInputChange(event, flashcard.id)} />
                </Field>
                <Field>
                    <Input className="form__input" type="text" name="back" value={flashcard.back} onChange={event => this.handleInputChange(event, flashcard.id)} />
                </Field>
            </FieldsWrapperSeperated>
        ));

        return (
            <Wrapper>
                <form onSubmit={this.saveFlashStack}>
                    <div>
                        <label className="form__label" styled={{ marginBottom: "1rem" }}>Flashstack name:</label>
                        <input className="form__input" style={{ width: "20rem" }} type="type" name="flashstackName" value={this.state.flashstackName} onChange={this.handleInputChangeSingle} />
                    </div>
                    <FieldsWrapper className="m-t-2">
                        <Field>
                            <label className="form__label">Front of flashcard</label>
                        </Field>
                        <Field>
                            <label className="form__label">Back of flashcard</label>
                        </Field>
                    </FieldsWrapper>
                    {fields}
                    <div className="m-t-2">
                        <button type="button" className="btn btn--primary btn--small" onClick={this.addToFlashstack}>Add flashcard</button>
                    </div>
                    <div className="m-t-2">
                        <button type="submit" className="btn btn--secondary btn--small">Create flashstack</button>
                    </div>
                </form>
            </Wrapper>
        );
    }
}

export default ViewCreate;