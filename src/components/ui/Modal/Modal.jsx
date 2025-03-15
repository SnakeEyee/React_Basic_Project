import { useNavigate, useLocation, Link } from "react-router-dom";
import Button from "@ui/BUTTONS/Button";
import "./Modal.css";

export default function Modal({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state?.background || { pathname: "/" };

  const handleCloseModal = () => {
    navigate(background.pathname, { replace: true });
  };
  return (
    <div className="modal-container">
      <div className="modal-content">
        <Button className="close" onClick={handleCloseModal}>
          &times;
        </Button>
        {children}
        {location.pathname === "/login" ? (
          <Link to="/register">Do not have an account? Register</Link>
        ) : (
          <Link to="/login">Already have an account? Login</Link>
        )}
      </div>
    </div>
  );
}
