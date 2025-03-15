import { Routes, Route } from "react-router-dom";
import Modal from "@ui/Modal/Modal";
import Login from "@ui/FORMS/Login";
import Register from "@ui/FORMS/Register";

export default function ModalRoutes() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Modal>
            <Login />
          </Modal>
        }
      />
      <Route
        path="/register"
        element={
          <Modal>
            <Register />
          </Modal>
        }
      />
    </Routes>
  );
}
