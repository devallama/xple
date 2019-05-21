import React from 'react';

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
            flashstack: this.state.flashstack,
            uid: this.props.user.uid
        }
        this.props.db.collection("flashstacks").add(data)
            .then(() => {
                console.log("success");
            })
            .catch(err => {
                console.log(err);
            });
    }

    addToFlashstack = () => {
        const nextId = Math.max(...Object(this.state.flashstack).keys()) + 1;
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
        console.log(this.state.flashstack);
        const fields = this.state.flashstack.map(flashcard => (
            <fieldset key={flashcard.id}>
                <input type="text" name="front" value={flashcard.front} onChange={event => this.handleInputChange(event, flashcard.id)} />
                <input type="text" name="back" value={flashcard.back} onChange={event => this.handleInputChange(event, flashcard.id)} />
            </fieldset>
        ));

        console.log(fields);

        return (
            <div>
                Create flash cards

                <form onSubmit={this.saveFlashStack}>
                    <div>
                        Flashstack name: <input type="type" name="flashstackName" value={this.state.flashstackName} onChange={this.handleInputChangeSingle} />
                    </div>
                    {fields}
                    <div>
                        <button type="submit">Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ViewCreate;