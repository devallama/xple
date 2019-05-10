import React from 'react';

class Error extends React.Component {
    render() {
        if (!this.props.isValid) {
            return (
                <p className={this.props.errorClassName || "form__error"}>
                    {this.props.errorMessage}
                </p>
            );
        }

        return null;
    }
}

export default Error;