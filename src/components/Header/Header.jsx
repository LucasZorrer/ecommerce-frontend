import {
  Basket,
  Bell,
  CaretDown,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { useEffect } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { apiAuth } from "../../helpers/axiosClient";
import "./header.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const { token, setUser, setToken } = useStateContext();

  useEffect(() => {
    apiAuth.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, [setUser]);

  const handleLogout = (e) => {
    e.preventDefault();
    apiAuth.delete("/logout").then(({ data }) => {
      if (data.success) {
        setUser({});
        setToken(null);
        toast.success("Logout Successfully done!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    });
  };

  const linkStyleHeader = {
    margin: 0,
    padding: 0,
    color: "#FFFF",
    textDecoration: "none",
  };

  const linkStyle = {
  padding: "12px 16px",
  textDecoration: "none",
  display: "block",
  color: "#000",
  };

  return (
    <div className="header">
      <h6 className="title">TWIN</h6>
      <div className="search-bar">
        <input type="text" placeholder="Faça sua busca" />
        <MagnifyingGlass size={32} />
      </div>
      <div className="icons">
        <div className="cart icons-margin">
          <Basket size={40} />
        </div>
        <div className="notifications icons-margin">
          <Bell size={40} />
        </div>
        <div className="profile-image-container">
          {token === null ? (
            <div className="not-logged">
              <Link style={linkStyleHeader} to={"/login"}>
                Hello, Sign In!
              </Link>
            </div>
          ) : (
            <>
              <img
                src="https://i.pinimg.com/1200x/a7/cb/fa/a7cbfaaf0c56b3d80328fdad51b48f78.jpg"
                alt=""
              />
              <div className="dropdown">
                <CaretDown size={40} />
                <div className="dropdown-content">
                  <Link style={linkStyle} to={"/profile"}>
                    Profile
                  </Link>{" "}
                  <Link style={linkStyle} to={"/myproducts"}>
                    My Products
                  </Link>
                  <a onClick={handleLogout}>Logout</a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
