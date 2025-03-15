import { Routes, Route } from "react-router-dom";
import User from "@pgs/User";

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/user" element={<User />} />
    </Routes>
  );
}
