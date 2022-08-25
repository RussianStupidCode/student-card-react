const VALIDATE_METHOD_NAMES = {
  isRequired: "isRequired",
  isEmail: "isURL",
  minLength: "minLength",
  minValue: "minValue",
  maxValue: "maxValue",
  isURL: "isURL",
};

const validate = (valdiateMethod, value, fieldConfig) => {
  if (valdiateMethod === VALIDATE_METHOD_NAMES.isRequired) {
    if (value.trim() === "") {
      return fieldConfig.message;
    }
  }

  if (valdiateMethod === VALIDATE_METHOD_NAMES.isURL) {
    const regexp = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gi;

    if (!regexp.test(value)) {
      return fieldConfig.message;
    }
  }

  if (valdiateMethod === VALIDATE_METHOD_NAMES.isNumber) {
    if (isNaN(Number(value))) {
      return fieldConfig.message;
    }
  }

  if (valdiateMethod === VALIDATE_METHOD_NAMES.minLength) {
    if (value.length < fieldConfig.value) {
      return fieldConfig.message;
    }
  }

  if (valdiateMethod === VALIDATE_METHOD_NAMES.minValue) {
    if (Number(value) < fieldConfig.value) {
      return fieldConfig.message;
    }
  }

  if (valdiateMethod === VALIDATE_METHOD_NAMES.maxValue) {
    if (Number(value) > fieldConfig.value) {
      return fieldConfig.message;
    }
  }
};

function validator(form, config) {
  const errors = {};
  for (const [name, value] of Object.entries(form)) {
    for (const [validateMethod, fieldConfig] of Object.entries(config[name])) {
      const error = validate(validateMethod, value, fieldConfig);
      if (!error || errors[name]) {
        continue;
      }
      errors[name] = error;
    }
  }

  return errors;
}

export { VALIDATE_METHOD_NAMES, validator };
