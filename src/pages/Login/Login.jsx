import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useStateContext } from "../../contexts/ContextProvider";
import { apiAuth } from "../../helpers/axiosClient";
import "./login.css";

const Login = () => {
  const [messageErrorLogin, setMessageErrorLogin] = useState("");
  const [messageErrorSignup, setMessageErrorSignup] = useState("");
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [isLoadingSignup, setIsLoadingSignup] = useState(false);
  const { setUser, setToken, token } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  //LOGIN SECTION //
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const handleEmailLogin = (e) => {
    setEmailLogin(e.target.value);
    setMessageErrorLogin("");
  };

  const handlePasswordLogin = (e) => {
    setPasswordLogin(e.target.value);
    setMessageErrorLogin("");
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setIsLoadingLogin(true);
    await apiAuth
      .post("login", { email: emailLogin, password: passwordLogin })
      .then(({ data }) => {
        if (data.success === false) {
          setMessageErrorLogin(data.message);
        } else {
          toast.success("User Successfully Logged!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setUser(data.user), setToken(data.accessToken);
          navigate("/");
        }
      })
      .finally(() => {
        setIsLoadingLogin(false);
      });
  };

  // SIGNUP SECTION //

  const [nameSignup, setNameSignup] = useState("");
  const [emailSignup, setEmailSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const handleNameSignup = (e) => {
    setNameSignup(e.target.value);
    setMessageErrorSignup("");
  };
  const handleEmailSignup = (e) => {
    setEmailSignup(e.target.value);
    setMessageErrorSignup("");
  };
  const handlePasswordSignup = (e) => {
    setMessageErrorSignup("");
    setPasswordSignup(e.target.value);
  };
  const handlePasswordVerify = (e) => {
    setMessageErrorSignup("");
    setPasswordVerify(e.target.value);
  };

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    setIsLoadingSignup(true);
    if (passwordSignup !== passwordVerify) {
      setMessageErrorSignup("The passwords must be the same!");
      setIsLoadingSignup(false);
      return;
    }

    await apiAuth
      .post("signup", {
        name: nameSignup,
        email: emailSignup,
        password: passwordSignup,
      })
      .then(({ data }) => {
        if (data.success === false) {
          setMessageErrorSignup(data.message);
        } else {
          toast.success("User Successfully Created!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .finally(() => {
        setIsLoadingSignup(false);
      });
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
          <span className="message-error">{messageErrorLogin}</span>
          <div className="button-container">
            <Button name={"Login"} isLoading={isLoadingLogin} />
          </div>
        </form>
      </div>
      <div className="sub-containers">
        <h1>Signup</h1>
        <form onSubmit={handleSubmitSignup} className="form-container">
          <Input
            name={"Name"}
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
          <span className="message-error">{messageErrorSignup}</span>
          <div className="button-container">
            <Button name={"Signup"} isLoading={isLoadingSignup} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
