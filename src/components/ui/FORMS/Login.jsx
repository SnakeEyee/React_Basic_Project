// Dependencies
import { useState } from "react";
import { LoginUserRequest } from "@services/UserServices";
import { useNavigate } from "react-router-dom";

// Components
import { EmailInput, PasswordInput } from "@ui/INPUTS/Inputs";
import Button from "../BUTTONS/Button";

// Styles
import "./LoginForm.css";

export default function Login() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await LoginUserRequest(formData);
    if (response.LoggedIn) {
      navigate("/user");
      console.log("User Logged In");
    } else {
      console.log("User Not Logged In");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <EmailInput
          name="email"
          placeholder="Email or Username"
          value={formData.email}
          onChange={handleDataChange}
        />
        <PasswordInput
          name="password"
          value={formData.password}
          showPass={showPass}
          setShowPass={setShowPass}
          onChange={handleDataChange}
        />
        <Button className="login" onClick={handleLogin}>
          Login
        </Button>
      </form>
    </div>
  );
}
