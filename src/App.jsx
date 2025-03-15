import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "@comps/Navbar";
import ModalRoutes from "@routes/ModalRoutes";
import UserRoutes from "@routes/UserRoutes";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <ModalRoutes />
        <UserRoutes />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
