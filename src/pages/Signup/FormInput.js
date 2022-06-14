import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormInput.module.css';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  const {
    errorMessage, onChange, type, name, placeholder, pattern, value,
  } = props;

  const handleFocus = async () => {
    setFocused(true);
  };

  if (pattern === '') {
    return (
      <div className={styles.div_input}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onBlur={handleFocus}
          focused={focused.toString()}
          onFocus={() => name === 'password_confirmation' && setFocused(true)}
          required
        />
        <span>{errorMessage}</span>
      </div>
    );
  }
  return (
    <div className={styles.div_input}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={handleFocus}
        focused={focused.toString()}
        onFocus={() => name === 'password_confirmation' && setFocused(true)}
        required
        pattern={pattern}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

FormInput.propTypes = {
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  value: PropTypes.string,
};

FormInput.defaultProps = {
  onChange: null,
  errorMessage: '',
  type: '',
  name: '',
  placeholder: '',
  pattern: '',
  value: '',
};

export default FormInput;
