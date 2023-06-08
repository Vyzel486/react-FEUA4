import { useContext } from "react";
import Greeting from "./Greeting";
import LoginForm from "./LoginForm";
import { userContext } from "../../contexts/userContext";
import './Login.css';

const Login = () => {
  const { user } = useContext(userContext);

  return (
    <div className="login">
      <Greeting />
      {!user && <LoginForm />}
    </div>
  );
};

export default Login;