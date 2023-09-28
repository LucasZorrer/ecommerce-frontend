import { useState } from "react";
import Input from "../../components/Input/Input";
import "./login.css";
import Button from "../../components/Button/Button";
import apiAuth from "../../helpers/axiosClient";
import { useStateContext } from "../../contexts/ContextProvider";

const Login = () => {
  const [messageError, setMessageError] = useState("");

  //LOGIN SECTION //
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const { setUser, setToken } = useStateContext();

  const handleEmailLogin = (e) => {
    setEmailLogin(e.target.value);
  };

  const handlePasswordLogin = (e) => {
    setPasswordLogin(e.target.value);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    await apiAuth
      .post("login", { email: emailLogin, password: passwordLogin })
      .then(({ data }) => {
        setUser(data.user), setToken(data.accessToken);
      });
  };

  // SIGNUP SECTION //

  const [nameSignup, setNameSignup] = useState("");
  const [emailSignup, setEmailSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const handleNameSignup = (e) => {
    setNameSignup(e.target.value);
  };
  const handleEmailSignup = (e) => {
    setEmailSignup(e.target.value);
  };
  const handlePasswordSignup = (e) => {
    setMessageError("");
    setPasswordSignup(e.target.value);
  };
  const handlePasswordVerify = (e) => {
    setMessageError("");
    setPasswordVerify(e.target.value);
  };

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    if (passwordSignup !== passwordVerify) {
      setMessageError("The passwords must be the same!");
      return;
    }
    console.log("nice");
  };

  return (
    <div className="container-login">
      <div className="sub-containers">
        <h1>Login</h1>
        <form onSubmit={handleSubmitLogin} className="form-container">
          <Input
            name={"Email"}
            type={"email"}
            value={emailLogin}
            onChange={handleEmailLogin}
          />
          <Input
            name={"Password"}
            type={"password"}
            value={passwordLogin}
            onChange={handlePasswordLogin}
          />
          <div className="button-container">
            <Button name={"Login"} />
          </div>
        </form>
      </div>
      <div className="sub-containers">
        <h1>Signup</h1>
        <form onSubmit={handleSubmitSignup} className="form-container">
          <Input
            name={"name"}
            type={"text"}
            value={nameSignup}
            onChange={handleNameSignup}
          />
          <Input
            name={"Email"}
            type={"email"}
            value={emailSignup}
            onChange={handleEmailSignup}
          />
          <Input
            name={"Password"}
            type={"password"}
            value={passwordSignup}
            onChange={handlePasswordSignup}
          />
          <Input
            name={"Password"}
            type={"password"}
            value={passwordVerify}
            onChange={handlePasswordVerify}
          />
          <span className="message-error">{messageError}</span>
          <div className="button-container">
            <Button name={"Signup"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
