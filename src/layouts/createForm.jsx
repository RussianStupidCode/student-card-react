import React from "react";
import StudentForm from "../components/studentForm";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../helpers/paths";

const CreateForm = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(ROUTER_PATH.main);
  };

  const handleSubmit = () => {
    navigate(ROUTER_PATH.main);
  };

  const studentData = window.localStorage.student;

  return (
    <StudentForm
      title="Создать"
      submitText={studentData ? "Обновить" : "Создать"}
      storage={window.localStorage}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
    />
  );
};

export default CreateForm;
