import React from 'react';

class ResetButton extends React.Component {
    onClick = () => {
        this.props.resetForm(this.props.hardReset || false);

        if (typeof this.props.fn == 'function') {
            this.props.fn();
        }
    }

    render() {
        return (
            <button className={this.props.className} type={this.props.type || "button"} onClick={this.onClick}>
                {this.props.children}
            </button>
        );
    }
}

export default ResetButton;