// Dependencies
import { useLocation, useNavigate, Link } from "react-router-dom";

// Components
import Button from "@ui/BUTTONS/Button";
import { SearchInput } from "@ui/INPUTS/Inputs";

// Styles
import "./styles/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    navigate("/login", { state: { background: location } });
  };

  return (
    <div className="navbar">
      <ul className="navbar-list">
        <div className="navbar-links">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact Us</Link>
        </div>
        <SearchInput />
        <Button className="button" onClick={handleLogin}>
          Login
        </Button>
      </ul>
    </div>
  );
}
