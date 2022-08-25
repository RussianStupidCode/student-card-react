import React from "react";
import PropTypes from "prop-types";
import { birthDateToString } from "../helpers/utils";

const StudentCard = ({ storageData, onSubmit }) => {
  if (storageData) {
    return (
      <div className="card w-50 m-5">
        <h2 className="text-center">Карточка студента</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="fw-bold">Имя:</span> {storageData.firstName}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Фамилия:</span> {storageData.lastName}
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Год рождения:</span>
            {birthDateToString(storageData.birthDate)}
          </li>

          <li className="list-group-item">
            <span className="fw-bold">Портфолио:</span>{" "}
            <a href={storageData.url}>{storageData.url}</a>
          </li>
        </ul>
        <button
          type="button"
          className="btn btn-primary w-50 mx-auto my-2"
          onClick={onSubmit}
        >
          Редактировать
        </button>
      </div>
    );
  }

  return (
    <div className="card w-50 m-5">
      <h2 className="text-center">Карточка студента</h2>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center">Нет данных</li>
      </ul>
      <button
        type="button"
        className="btn btn-primary w-50 mx-auto my-2"
        onClick={onSubmit}
      >
        Добавить
      </button>
    </div>
  );
};

StudentCard.propTypes = {
  storageData: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default StudentCard;
