import {
  ArrowCircleLeft,
  Heart,
  ShoppingCartSimple,
  User,
} from "@phosphor-icons/react";
import { useState } from "react";
import AsideOption from "../../components/AsideOption/AsideOption";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Links from "../../components/Links/Links";
import { useStateContext } from "../../contexts/ContextProvider";
import "./profile.css";
import Modal from "../../components/Modal/Modal";

const Profile = () => {
  const [isLoadingChange, setIsLoadingChange] = useState(false);
  const { user } = useStateContext();
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
  };

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
            <form onSubmit={handleChange}>
              <div className="input-user">
                <label htmlFor={"name"}>Nome:</label>
                <input id="name" value={"Lucas"} />
              </div>
              <div className="input-user">
                <label htmlFor={"email"}>Email:</label>
                <input id="email" value={"lucas@gmail.com"} disabled />
              </div>
              <div className="input-user">
                <label htmlFor={"name"}>Password:</label>
                <input id="name" type="password" value={"Lucas"} />
                <button onClick={() => setOpenModal(true)}>Open Modal</button>
              </div>

              <div className="button-profile">
                <Button name={"Change"} isLoading={isLoadingChange} />
              </div>
            </form>
          </div>
        </div>
        <Modal openModal={openModal} />
      </div>
    </>
  );
};

export default Profile;
