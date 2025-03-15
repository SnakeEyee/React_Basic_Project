// Dependencies
import { useState } from "react";
import { CreateUserRequest } from "@services/UserServices";

// Components
import {
  EmailInput,
  PasswordInput,
  UserInput,
  UsernameInput,
} from "@ui/INPUTS/Inputs";
import Button from "@ui/BUTTONS/Button";

// Styles
import "./LoginForm.css";

export default function Register() {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await CreateUserRequest(formData);
    if (response.Created) {
      alert("User Created");
    } else {
      alert("Error Creating User");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleRegister}>
        <h2>Register</h2>
        <UserInput
          name="name"
          value={formData.name}
          onChange={handleDataChange}
        />
        <UsernameInput
          name="username"
          value={formData.username}
          onChange={handleDataChange}
        />
        <EmailInput
          name="email"
          placeholder="Email"
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
        <Button className="login" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
}
