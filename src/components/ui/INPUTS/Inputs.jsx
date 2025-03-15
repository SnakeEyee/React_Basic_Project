import "./SearchInput.css";
import { IoSearch } from "react-icons/io5";

import "./EmailInput.css";
import { HiOutlineMail } from "react-icons/hi";

import "./PasswordInput.css";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";

import "./UserInput.css";
import { FaRegUser } from "react-icons/fa";

import "./UsernameInput.css";
import { FaPen } from "react-icons/fa";

export function SearchInput() {
  return (
    <div className="search-input-container">
      <input className="search-input" placeholder="Search..." />
      <IoSearch />
    </div>
  );
}

export function UserInput({ name, value, onChange }) {
  return (
    <div className="user-input-container">
      <FaRegUser />
      <input
        name={name}
        className="user-input"
        type="text"
        placeholder="Full Name"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export function UsernameInput({ name, value, onChange }) {
  return (
    <div className="username-input-container">
      <FaPen />
      <input
        name={name}
        className="username-input"
        type="text"
        placeholder="Username"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export function EmailInput({ name, placeholder, value, onChange }) {
  return (
    <div className="email-input-container">
      <HiOutlineMail />
      <input
        name={name}
        className="email-input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export function PasswordInput({
  name,
  value,
  onChange,
  showPass,
  setShowPass,
}) {
  return (
    <div className="password-input-container">
      <RiLockPasswordLine />
      <input
        name={name}
        className="password-input"
        type={showPass ? "text" : "password"}
        placeholder="Password"
        value={value}
        onChange={onChange}
      />
      {showPass ? (
        <BiSolidHide id="shown-pass" onClick={() => setShowPass(false)} />
      ) : (
        <BiSolidShow id="hidden-pass" onClick={() => setShowPass(true)} />
      )}
    </div>
  );
}
