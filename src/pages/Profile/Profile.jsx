import "./profile.css";
import Header from "../../components/Header/Header";
import Links from "../../components/Links/Links";
import {
  ArrowCircleLeft,
  Heart,
  ShoppingCartSimple,
  User,
} from "@phosphor-icons/react";
import AsideOption from "../../components/AsideOption/AsideOption";
import Input from "../../components/Input/Input";

const Profile = () => {
  return (
    <>
      <Header />
      <Links />
      <div className="profile-content">
        <div className="aside">
          <div className="profile-title">
            <p>SEU PERFIL</p>
          </div>
          <div className="aside-options">
            <AsideOption title={"Your Profile"} icon={User} />
            <AsideOption title={"Favorites"} icon={Heart} />
            <AsideOption title={"Cart"} icon={ShoppingCartSimple} />
          </div>
          <div className="logout-option">
            <ArrowCircleLeft size={40} color="#d95d39" />
            <p>LOGOUT</p>
          </div>
        </div>
        <div className="user-content">
          <div className="top-content">
            <div className="profile-image">
              <img
                src="https://i.pinimg.com/1200x/a7/cb/fa/a7cbfaaf0c56b3d80328fdad51b48f78.jpg"
                alt=""
              />
            </div>
            <div>
              <p>Lucas Zorrer</p>
            </div>
          </div>

          <div className="inputs">
            <div className="input-user">
              <label htmlFor={"name"}>Nome:</label>
              <input id="name" value={"Lucas"} />
            </div>
            <div className="input-user">
              <label htmlFor={"email"}>Email:</label>
              <input id="email" value={"lucas@gmail.com"} disabled/>
            </div>
            <div className="input-user">
              <label htmlFor={"name"}>Password:</label>
              <input id="name" value={"Lucas"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
