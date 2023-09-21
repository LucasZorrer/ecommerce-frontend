import Input from "../../components/Input/input";
import "./login.css";

const Login = () => {
  return (
    <div className="container-login">
      <div className="sub-containers">
        <h1>Login</h1>
        <Input />
      </div>
      <div className="sub-containers">
        <h1>Signup</h1>
      </div>
    </div>
  );
};

export default Login;
