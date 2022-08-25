/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MAX_AGE, MIN_AGE } from "../helpers/utils";
import { VALIDATE_METHOD_NAMES, validator } from "../helpers/validator";
import TextInput from "./textInput";

const validateConfig = {
  firstName: {
    [VALIDATE_METHOD_NAMES.isRequired]: {
      message: "Имя обязательно к заполнению",
    },
  },
  lastName: {
    [VALIDATE_METHOD_NAMES.isRequired]: {
      message: "Фамилия обязательна к заполнению",
    },
  },

  birthDate: {
    [VALIDATE_METHOD_NAMES.isRequired]: {
      message: "Год рождения обязателен к заполнению",
    },
    [VALIDATE_METHOD_NAMES.isNumber]: {
      message: "Год рождения должен быть числом",
    },
    [VALIDATE_METHOD_NAMES.minValue]: {
      message: "Студент должен быть моложе",
      value: new Date().getFullYear() - MAX_AGE,
    },
    [VALIDATE_METHOD_NAMES.maxValue]: {
      message: "Студент должен быть старше",
      value: new Date().getFullYear() - MIN_AGE,
    },
  },
  url: {
    [VALIDATE_METHOD_NAMES.isRequired]: {
      message: "Ссылка на портфолио обязательна к заполнению",
    },
    [VALIDATE_METHOD_NAMES.isURL]: {
      message: "Невалидная ссылка",
    },
  },
};

const StudentForm = ({ title, submitText, storage, onSubmit, onCancel }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    url: "",
  });

  useEffect(() => {
    if (storage.student) {
      setForm(JSON.parse(storage.student));
    }
  }, []);

  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setForm((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validate = () => {
    const errors = validator(form, validateConfig);

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    validate();
  }, [form]);

  const handleSubmit = (event) => {
    const isValid = validate();
    if (!isValid) {
      return;
    }

    storage.student = JSON.stringify(form);
    event.preventDefault();
    onSubmit();
  };

  const isValid = Object.keys(errors).length !== 0;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <form>
            <h2>{title}</h2>
            <TextInput
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              labelText="Имя"
              error={errors.firstName}
            />
            <TextInput
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              labelText="Фамилия"
              error={errors.lastName}
            />
            <TextInput
              name="birthDate"
              type="number"
              value={form.birthDate}
              onChange={handleChange}
              labelText="Год рождения"
              error={errors.birthDate}
            />
            <TextInput
              name="url"
              value={form.url}
              onChange={handleChange}
              labelText="Портфолио"
              error={errors.url}
            />

            <div className="d-flex flex-row">
              {storage.student && (
                <button
                  type="button"
                  className="btn btn-secondary w-25 mx-auto"
                  onClick={onCancel}
                >
                  Назад
                </button>
              )}

              <button
                disabled={isValid}
                type="button"
                className="btn btn-primary w-25 mx-auto"
                onClick={handleSubmit}
              >
                {submitText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

StudentForm.propTypes = {
  title: PropTypes.string.isRequired,
  submitText: PropTypes.string.isRequired,
  storage: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default StudentForm;
