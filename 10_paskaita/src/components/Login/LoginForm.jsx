import { useContext, useState } from "react";
import { userContext } from "../../contexts/userContext";
import "./LoginForm.css";

const LoginForm = () => {
  const { handleLogin } = useContext(userContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleUserLogin = () => {
    handleLogin({ username, email, message });
  };

  return (
    <form className="loginForm">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter a name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter a message..."
      />
      <input
        className="formButton"
        onClick={handleUserLogin}
        type="submit"
        value="Login"
      />
    </form>
  );
};

export default LoginForm;
