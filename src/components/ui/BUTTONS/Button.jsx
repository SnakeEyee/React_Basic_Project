import "./Button.css";
import "./Login.css";
import "./CloseButton.css";

export default function Button({ className, children, type, onClick }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
