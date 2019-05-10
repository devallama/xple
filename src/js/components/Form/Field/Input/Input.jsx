import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
    render() {
        const {
            name,
            type,
            ...rest
        } = this.props;

        return (
            <input id={`input_${name}`} name={name} className="form__input form__input--text" type={type || "text"} {...rest} />
        );
    }
}

Input.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};

export default Input;