import {
  Basket,
  Bell,
  CaretDown,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import "./header.css";

const Header = () => {
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
          <img
            src="https://i.pinimg.com/1200x/a7/cb/fa/a7cbfaaf0c56b3d80328fdad51b48f78.jpg"
            alt=""
          />

          <div className="dropdown">
            <CaretDown size={40} />
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
