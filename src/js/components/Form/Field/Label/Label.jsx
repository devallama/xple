import React from 'react';

class Label extends React.Component {
    render() {
        return (
            <label htmlFor={`input_${this.props.name}`} className={this.props.className || "form__label"}>
                {this.props.label || this.props.children}
            </label>
        );
    }
}

export default Label;