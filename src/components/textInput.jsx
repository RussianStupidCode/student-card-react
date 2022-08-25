import PropTypes from "prop-types";
import React from "react";

const TextInput = ({ labelText, type, name, value, onChange, error }) => {
  const getaInputClass = () => {
    if (error) {
      return "form-control is-invalid";
    }
    return "form-control";
  };

  return (
    <div className="mb-4">
      <label htmlFor={name}>{labelText}</label>
      <div className="input-group has-validation">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={getaInputClass()}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

TextInput.defaultProps = {
  type: "text",
};

TextInput.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default TextInput;
