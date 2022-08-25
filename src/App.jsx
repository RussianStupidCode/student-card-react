import { Routes, Route, Navigate } from "react-router-dom";
import { BASE_URL, ROUTER_PATH } from "./helpers/paths";
import Card from "./layouts/card";
import CreateForm from "./layouts/createForm";

function App() {
  return (
    <Routes>
      <Route exact path={ROUTER_PATH.main} element={<Card />} />
      <Route
        exact
        path={BASE_URL}
        element={<Navigate to={ROUTER_PATH.main} replace />}
      />
      <Route exact path={ROUTER_PATH.form} element={<CreateForm />} />
    </Routes>
  );
}

export default App;
