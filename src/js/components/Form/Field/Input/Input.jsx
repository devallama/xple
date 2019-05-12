import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
    render() {
        const {
            name,
            type,
            ...rest
        } = this.props;

        const inputType = type || "text";

        return (
            <input id={`input_${name}`} name={name} className={`form__input form__input--${inputType}`}
                type={inputType} {...rest}
            />
        );
    }
}

Input.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};

export default Input;