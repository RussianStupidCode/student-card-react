import React from "react";
import StudentCard from "../components/studentCard";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../helpers/paths";

const Card = () => {
  const navigate = useNavigate();

  const studentData = window.localStorage.student
    ? JSON.parse(window.localStorage.student)
    : undefined;

  const handleSubmit = () => {
    navigate(ROUTER_PATH.form, { replace: true });
  };

  return <StudentCard storageData={studentData} onSubmit={handleSubmit} />;
};

export default Card;
