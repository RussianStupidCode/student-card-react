import { Routes, Route, Navigate } from "react-router-dom";
import { BASE_URL } from "./helpers/paths";
import Card from "./layouts/card";
import CreateForm from "./layouts/createForm";
import Main from "./layouts/main";

function App() {
  return (
    <Routes>
      <Route exact path={BASE_URL} element={<Main />}>
        <Route exact path="" element={<Navigate to="/main" replace />}></Route>
        <Route exact path="main" element={<Card />}></Route>
        <Route exact path="form" element={<CreateForm />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
