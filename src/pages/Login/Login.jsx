import { useState } from "react";
import Input from "../../components/Input/Input";
import "./login.css";
import Button from "../../components/Button/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="container-login">
      <div className="sub-containers">
        <h1>Login</h1>
        <form onSubmit={handleSubmitLogin} className="form-container">
          <Input
            name={"Email"}
            type={"email"}
            value={email}
            onChange={handleEmail}
          />
          <Input
            name={"Password"}
            type={"password"}
            value={password}
            onChange={handlePassword}
          />
          <div className="button-container">
            <Button name={"Login"} />
          </div>
        </form>
      </div>
      <div className="sub-containers">
        <h1>Signup</h1>
      </div>
    </div>
  );
};

export default Login;
